import React, { useEffect, useRef } from "react";
import caminar from "../assets/caminar.webm";
import caer from "../assets/caer.webm";
import rebotar from "../assets/rebotar.webm";
import forcejear from "../assets/forcejear.webm";
import bailar from "../assets/bailar.webm";
import saludar from "../assets/saludar.webm";

const IDLE_ANIMS = [bailar, saludar];
const IDLE_MIN_MS = 5000;   // mínimo 5s entre pausas
const IDLE_MAX_MS = 15000;  // máximo 15s entre pausas
const IDLE_DURATION_MS = 3000; // cuánto dura la pausa

const Personaje = () => {
    const wrapperRef = useRef(null);
    const videoRef = useRef(null);
    const animId = useRef(null);
    // 👇 referencias para los timers (así podemos cancelarlos)
    const idleTimerRef = useRef(null);
    const idleEndTimerRef = useRef(null);

    const state = useRef({
        mode: "border",
        progress: 0,
        x: 0,
        y: 0,
        vy: 0,
        offsetX: 0,
        offsetY: 0,
        segment: "top",
    });
    const speed = -1.5;

    const setAnimacion = (src) => {
        const video = videoRef.current;
        if (!video) return;
        if (video.currentSrc.includes(src.split("/").pop())) return;
        video.src = src;
        video.load();
        video.play();
    };

    const rotaciones = {
        top:    "rotate(180deg)",
        right:  "rotate(270deg)",
        bottom: "rotate(0deg)",
        left:   "rotate(90deg)",
    };

    // 👇 Programa la próxima pausa aleatoria
    const scheduleNextIdle = () => {
        clearTimeout(idleTimerRef.current);
        const delay = IDLE_MIN_MS + Math.random() * (IDLE_MAX_MS - IDLE_MIN_MS);
        idleTimerRef.current = setTimeout(() => {
            // Solo entra en idle si sigue caminando
            if (state.current.mode !== "border") {
                scheduleNextIdle();
                return;
            }
            const anim = IDLE_ANIMS[Math.floor(Math.random() * IDLE_ANIMS.length)];
            state.current.mode = "idle";
            setAnimacion(anim);

            // Vuelve a caminar después de IDLE_DURATION_MS
            idleEndTimerRef.current = setTimeout(() => {
                if (state.current.mode === "idle") {
                    state.current.mode = "border";
                }
                scheduleNextIdle(); // programa la siguiente pausa
            }, IDLE_DURATION_MS);
        }, delay);
    };

    // 👇 Cancela todos los timers de idle (al arrastrar o caer)
    const cancelIdleTimers = () => {
        clearTimeout(idleTimerRef.current);
        clearTimeout(idleEndTimerRef.current);
    };

    useEffect(() => {
        const el = wrapperRef.current;
        if (!el) return;
        const SIZE = 150;

        const animate = () => {
            const s = state.current;
            const W = window.innerWidth  - SIZE;
            const H = window.innerHeight - SIZE;

            if (s.mode === "border") {
                setAnimacion(caminar);
                const perimeter = 2 * (W + H);
                const dist = (s.progress % perimeter + perimeter) % perimeter;

                if (dist < W) {
                    s.x = dist;  s.y = 0;
                    s.segment = "top";
                } else if (dist < W + H) {
                    s.x = W;  s.y = dist - W;
                    s.segment = "right";
                } else if (dist < 2*W + H) {
                    s.x = 2*W + H - dist;  s.y = H;
                    s.segment = "bottom";
                } else {
                    s.x = 0;  s.y = 2*(W+H) - dist;
                    s.segment = "left";
                }

                el.style.transform = rotaciones[s.segment];
                s.progress += speed;

            } else if (s.mode === "idle") {
                // 👇 Se queda quieto, solo reproduce la animación (ya se asignó en el timer)
                el.style.transform = rotaciones[s.segment];
                // no se mueve: x e y no cambian

            } else if (s.mode === "drag") {
                setAnimacion(forcejear);
                el.style.transform = `rotate(0deg)`;

            } else if (s.mode === "fall") {
                s.vy += 0.6;
                s.y  += s.vy;
                el.style.transform = `rotate(0deg)`;

                if (s.y >= H) {
                    s.y   = H;
                    s.vy *= -0.4;

                    if (Math.abs(s.vy) < 1) {
                        setAnimacion(rebotar);
                        s.vy   = 0;
                        s.mode = "border";
                        const perimeter = 2 * (W + H);
                        s.progress = (2 * W + H - s.x + perimeter) % perimeter;
                        s.segment  = "bottom";
                        el.style.transform = rotaciones["bottom"];
                        scheduleNextIdle(); // 👈 reagenda después de aterrizar
                    } else {
                        setAnimacion(caer);
                    }
                } else {
                    setAnimacion(caer);
                }
            }

            el.style.left = s.x + "px";
            el.style.top  = s.y + "px";
            animId.current = requestAnimationFrame(animate);
        };

        animId.current = requestAnimationFrame(animate);
        scheduleNextIdle(); // 👈 arranca la primera pausa aleatoria

        const getXY = (e) => {
            if (e.touches && e.touches.length > 0) {
                return { clientX: e.touches[0].clientX, clientY: e.touches[0].clientY };
            }
            return { clientX: e.clientX, clientY: e.clientY };
        };

        const onStart = (e) => {
            const s = state.current;
            const { clientX, clientY } = getXY(e);
            cancelIdleTimers(); // 👈 cancela cualquier pausa pendiente
            s.mode    = "drag";
            s.offsetX = clientX - s.x;
            s.offsetY = clientY - s.y;
            e.preventDefault();
        };

        const onMove = (e) => {
            if (state.current.mode !== "drag") return;
            const { clientX, clientY } = getXY(e);
            state.current.x = clientX - state.current.offsetX;
            state.current.y = clientY - state.current.offsetY;
        };

        const onEnd = () => {
            if (state.current.mode !== "drag") return;
            state.current.mode = "fall";
            state.current.vy   = 0;
            // scheduleNextIdle se llama cuando aterriza (en el bloque fall)
        };

        el.addEventListener("mousedown", onStart);
        window.addEventListener("mousemove", onMove);
        window.addEventListener("mouseup", onEnd);
        el.addEventListener("touchstart", onStart, { passive: false });
        window.addEventListener("touchmove", onMove, { passive: false });
        window.addEventListener("touchend", onEnd);

        return () => {
            cancelAnimationFrame(animId.current);
            cancelIdleTimers(); // 👈 limpia al desmontar
            el.removeEventListener("mousedown", onStart);
            window.removeEventListener("mousemove", onMove);
            window.removeEventListener("mouseup", onEnd);
            el.removeEventListener("touchstart", onStart);
            window.removeEventListener("touchmove", onMove);
            window.removeEventListener("touchend", onEnd);
        };
    }, []);

    return (
        <div
            ref={wrapperRef}
            style={{
                position: "fixed",
                width: 150,
                height: 150,
                zIndex: 9999,
                cursor: "grab",
                touchAction: "none",
                overflow: "visible",
                lineHeight: 0,      // 👈 elimina el gap de inline
                fontSize: 0, 
            }}
        >
            <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                style={{
                    width: 150,
                    height: 150,
                    margin: 0,
                    padding: 0,
                    display: "block",
                    objectFit: "cover",   // 👈 o "contain" dependiendo del video
                    verticalAlign: "bottom",
                }}
            >
                <source src={caminar} type="video/webm" />
            </video>
        </div>
    );
};

export default Personaje;
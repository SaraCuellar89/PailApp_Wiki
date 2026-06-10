import React, { useEffect, useRef } from "react";
import caminar from "../assets/caminar.webm";  
import caer from "../assets/caer.webm";  
import rebotar from "../assets/rebotar.webm";
import forcejear from "../assets/forcejear.webm";

const Personaje = () => {
    const wrapperRef = useRef(null); 
    const videoRef = useRef(null);  // 👈 referencia al video
    const animId = useRef(null);
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

    // 👇 función para cambiar la animación
    const setAnimacion = (src) => {
        const video = videoRef.current;
        if (!video) return;
        if (video.currentSrc.includes(src.split("/").pop())) return; // evita reiniciar si ya está
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

    useEffect(() => {
        const el = wrapperRef.current;
        if (!el) return;

        const SIZE = 150;

        const animate = () => {
            const s = state.current;
            const W = window.innerWidth  - SIZE;
            const H = window.innerHeight - SIZE;

            if (s.mode === "border") {
                setAnimacion(caminar); // 👈 caminando en el borde
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

            } else if (s.mode === "drag") {
                setAnimacion(forcejear); // 👈 mientras lo arrastras
                el.style.transform = `rotate(0deg)`;

            } else if (s.mode === "fall") {
                s.vy += 0.6;
                s.y  += s.vy;
                // el.style.transform = `rotate(${s.y * 2}deg)`;
                el.style.transform = `rotate(0deg)`;

                if (s.y >= H) {
                    s.y   = H;
                    s.vy *= -0.4;

                    if (Math.abs(s.vy) < 1) {
                        setAnimacion(rebotar); // 👈 rebotando al llegar al suelo
                        s.vy   = 0;
                        s.mode = "border";
                        const perimeter = 2 * (W + H);
                        s.progress = (2 * W + H - s.x + perimeter) % perimeter;
                        s.segment  = "bottom";
                        el.style.transform = rotaciones["bottom"];
                    } else {
                        setAnimacion(caer); // 👈 cayendo en el aire
                    }
                } else {
                    setAnimacion(caer); // 👈 cayendo
                }
            }

            el.style.left = s.x + "px";
            el.style.top  = s.y + "px";
            animId.current = requestAnimationFrame(animate);
        };

        animId.current = requestAnimationFrame(animate);

        // ... todos tus eventos igual ...
        const getXY = (e) => {
            if (e.touches && e.touches.length > 0) {
                return { clientX: e.touches[0].clientX, clientY: e.touches[0].clientY };
            }
            return { clientX: e.clientX, clientY: e.clientY };
        };

        const onStart = (e) => {
            const s = state.current;
            const { clientX, clientY } = getXY(e);
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
        };

        el.addEventListener("mousedown", onStart);
        window.addEventListener("mousemove", onMove);
        window.addEventListener("mouseup", onEnd);
        el.addEventListener("touchstart", onStart, { passive: false });
        window.addEventListener("touchmove", onMove, { passive: false });
        window.addEventListener("touchend", onEnd);

        return () => {
            cancelAnimationFrame(animId.current);
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
            }}
        >
            <video
                ref={videoRef}  // 👈 
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
                }}
            >
                <source src={caminar} type="video/webm" />
            </video>
        </div>
    );
};

export default Personaje;
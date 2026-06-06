import React, { useEffect, useRef } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import animacion from "../assets/batman.json"; // tu archivo lottie

const Personaje = () => {
    const wrapperRef = useRef(null);  // ref al div contenedor
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

    const rotaciones = {
        top:    "rotate(180deg)",
        right:  "rotate(270deg)",
        bottom: "rotate(0deg)",
        left:   "rotate(90deg)",
    };

    useEffect(() => {
        const el = wrapperRef.current;
        if (!el) return;

        const SIZE = 120; // mismo que width/height del wrapper

        const animate = () => {
            const s = state.current;
            const W = window.innerWidth  - SIZE;
            const H = window.innerHeight - SIZE;

            if (s.mode === "border") {
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

            } else if (s.mode === "fall") {
                s.vy += 0.6;
                s.y  += s.vy;
                el.style.transform = `rotate(${s.y * 2}deg)`;

                if (s.y >= H) {
                    s.y   = H;
                    s.vy *= -0.4;

                    if (Math.abs(s.vy) < 1) {
                        s.vy   = 0;
                        s.mode = "border";
                        const perimeter = 2 * (W + H);
                        s.progress = (2 * W + H - s.x + perimeter) % perimeter;
                        s.segment  = "bottom";
                        el.style.transform = rotaciones["bottom"];
                    }
                }
            }

            el.style.left = s.x + "px";
            el.style.top  = s.y + "px";
            animId.current = requestAnimationFrame(animate);
        };

        animId.current = requestAnimationFrame(animate);

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
        // el div es el que se mueve, el Player vive adentro quieto
        <div
            ref={wrapperRef}
            style={{
                position: "fixed",
                width: 120,
                height: 120,
                zIndex: 9999,
                cursor: "grab",
                touchAction: "none",
                overflow: "visible",  // 👈 por si el lottie se sale
            }}
        >
            <Player
                src={animacion}
                autoplay
                loop
                style={{
                    width: 120,
                    height: 120,
                    margin: 0,        // 👈 elimina márgenes
                    padding: 0,       // 👈 elimina padding
                    display: "block", // 👈 evita espacio inline
                }}
            />
        </div>
    );
};

export default Personaje;
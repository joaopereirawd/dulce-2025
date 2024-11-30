"use client";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { FC, useRef } from "react";

type LenisScrollProviderProps = {
    children: React.ReactNode;
};

const LenisScrollProvider: FC<LenisScrollProviderProps> = ({ children }) => {
    const lenisRef = useRef(null);

    const lenis = useLenis(({ scroll }) => {
        console.log(scroll, 'scroll');
    })

    return <ReactLenis ref={lenisRef} root options={
        {
            lerp: 0.1,
            duration: 1.5,
            smoothWheel: true
        }
    }>
        {children}
    </ReactLenis>;
};

export default LenisScrollProvider;
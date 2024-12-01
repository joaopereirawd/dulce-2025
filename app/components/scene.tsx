'use client'

import { Canvas } from '@react-three/fiber'
import { Model } from "@components/model";
import React, { Suspense, useRef } from 'react'
import { OrbitControls, Environment, AccumulativeShadows, RandomizedLight, useTexture } from '@react-three/drei'
import { useStore } from "@store/store";

export default function Scene() {
    const { scrollingValue } = useStore();
    const groupYPosition = scrollingValue * 0.001; // Ajusta o multiplicador conforme necessário

    // Carrega várias texturas
    /*     const photoTextures = [
            useTexture('/photos/01.jpg'),
            useTexture('/photos/01.jpg'),
            useTexture('/photos/01.jpg'),
            useTexture('/photos/01.jpg'),
        ] */

    return (
        <Canvas shadows dpr={[1, 2]} camera={{ fov: 35 }}>
            <Suspense fallback={null}>
                <ambientLight />

                <group position={[0, groupYPosition, 2]}>
                    <Model position={[-1.1, 0, 0]} />
                    <Model position={[0, 0.2, 0]} />
                    <Model position={[1.1, 0, 0]} />

                    <Model position={[0, -1.15, 0]} />
                </group>
                {/*              <AccumulativeShadows position={[0, -0.5, 0]} temporal frames={100} alphaTest={0.75} opacity={0.9}>
                    <RandomizedLight radius={6} position={[5, 5, -10]} bias={0.001} />
                </AccumulativeShadows> */}
                <Environment preset="city" />
            </Suspense>
            <OrbitControls enableZoom={false} enableRotate={true} />
        </Canvas>
    );
}
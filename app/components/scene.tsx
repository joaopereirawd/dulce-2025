'use client'

import { Canvas } from '@react-three/fiber'
import { Model } from "@components/model";
import React, { Suspense, useRef } from 'react'
import { OrbitControls, Stage } from '@react-three/drei'

export default function Scene() {
    return (
        <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
            <Suspense fallback={null}>
                <Stage preset="rembrandt" intensity={1.2} environment="city">
                    <Model />
                </Stage>
            </Suspense>
            <OrbitControls enableZoom={false} enableRotate={false} />
        </Canvas>
    );
}
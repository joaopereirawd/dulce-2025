'use client'

import { Canvas } from '@react-three/fiber'
import { SceneContent } from "@components/sceneContent";


import React, { Suspense, useRef } from 'react'
import { OrbitControls, Environment, AccumulativeShadows, RandomizedLight, useTexture } from '@react-three/drei'

export default function Scene() {
    return (
        <Canvas shadows dpr={[1, 2]} camera={{ fov: 35 }}>
            <Suspense fallback={null}>
                <pointLight />

                <SceneContent />

                {/*              <AccumulativeShadows position={[0, -0.5, 0]} temporal frames={100} alphaTest={0.75} opacity={0.9}>
                    <RandomizedLight radius={6} position={[5, 5, -10]} bias={0.001} />
                </AccumulativeShadows> */}
                <Environment preset="city" />
            </Suspense>
            <OrbitControls enableZoom={false} enableRotate={true} />
        </Canvas>
    );
}
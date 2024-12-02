'use client'

import { Canvas } from '@react-three/fiber'
import { SceneContent } from "@components/sceneContent";


import React, { Suspense, useRef } from 'react'
import { OrbitControls, Environment, AccumulativeShadows, RandomizedLight, useTexture } from '@react-three/drei'
import { EffectComposer, Bloom, DepthOfField } from '@react-three/postprocessing';
import * as THREE from 'three';

export default function Scene() {
    return (
        <Canvas shadows dpr={[1, 2]} camera={{ fov: 35 }}>
            <Suspense fallback={null}>

                <ambientLight intensity={0.5} color="#fffff" />

                {/* Luz direcional ajustada */}
                <directionalLight
                    castShadow
                    position={[0, 0, 3]}
                    intensity={0.2}
                    color="#ffffff"
                />

                <SceneContent />
                <Environment preset="night" />

                {/*              <AccumulativeShadows position={[0, -0.5, 0]} temporal frames={100} alphaTest={0.75} opacity={0.9}>
                    <RandomizedLight radius={6} position={[5, 5, -10]} bias={0.001} />
                </AccumulativeShadows> */}
            </Suspense>
            <OrbitControls enableZoom={false} enableRotate={true} />
        </Canvas>
    );
}
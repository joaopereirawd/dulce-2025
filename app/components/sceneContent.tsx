'use client'

import { Model } from "@components/model";
import React, { } from 'react'
import { useTexture } from '@react-three/drei'
import { useStore } from "@store/store";

export function SceneContent() {
    const { scrollingValue } = useStore();
    const groupYPosition = scrollingValue * 0.001;

    // Carrega as texturas dentro deste componente
    const photoTextures = [
        useTexture('/photos/01.jpg'),
        useTexture('/photos/02.jpg'),
        useTexture('/photos/03.jpg'),
        useTexture('/photos/04.jpg'),
    ]

    console.log(photoTextures, 'photoTextures')

    return (
        <group position={[-1, groupYPosition, 2]}>
            <Model position={[-1.1, 0, 0]} photoTexture={photoTextures[0]} />
            <Model position={[0, 0.2, 0]} photoTexture={photoTextures[1]} />
            <Model position={[1.1, 0, 0]} photoTexture={photoTextures[2]} />
            <Model position={[0, -1.15, 0]} photoTexture={photoTextures[3]} />
        </group>
    );
}
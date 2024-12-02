'use client'

import { Model } from "@components/model";
import React, { } from 'react'
import { useTexture } from '@react-three/drei'
import { useStore } from "@store/store";
import { useEffect, useState } from 'react';

export function SceneContent() {
    const { scrollingValue } = useStore();
    const groupYPosition = scrollingValue * 0.001;

    const library = [

        {
            url: "/photos/01.jpg",
            position: [-1.1, 0, 0]
        },
        {
            url: "/photos/02.jpg",
            position: [0, 0.2, 0]
        },
        {
            url: "/photos/03.jpg",
            position: [1.1, 0, 0]
        },
        {
            url: "/photos/04.jpg",
            position: [0, -1.15, 0]
        }
    ]

    // Carrega as texturas dinamicamente
    const photoTextures = library.map((item) => useTexture(item.url));

    return (
        <group position={[-1, groupYPosition, 2]}>
            {library.map((item, index) => (
                <Model
                    key={index}
                    position={item.position}
                    photoTexture={photoTextures[index]}
                />
            ))}
        </group>
    );
}
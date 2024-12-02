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
            position: [-1.22, 0, 0],
            rotation: false
        },
        {
            url: "/photos/06.jpg",
            position: [0, 0, 0],
            rotation: true
        },
        {
            url: "/photos/03.jpg",
            position: [1.22, 0, 0],
            rotation: false

        },
        //New line
        {
            url: "/photos/05.jpg",
            position: [-1.1, -1.34, 0],
            rotation: false
        },
        {
            url: "/photos/04.jpg",
            position: [0, -1.22, 0],
            rotation: false
        },

        {
            url: "/photos/06.jpg",
            position: [1.1, -1.35, 0],
            rotation: false
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
                    rotation={item.rotation}
                    photoTexture={photoTextures[index]}
                />
            ))}
        </group>
    );
}
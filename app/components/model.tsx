import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Object_5_1: THREE.Mesh
    Object_5_2: THREE.Mesh
  }
  materials: {
    FRAME_7: THREE.MeshStandardMaterial
    PHOTO_5: THREE.MeshStandardMaterial
  }
}

type ModelProps = JSX.IntrinsicElements['group'] & {
  photoTexture?: THREE.Texture // Adiciona a prop para a textura
}

export function Model({ photoTexture, ...props }: ModelProps) {
  const { nodes, materials } = useGLTF('/scene.gltf') as GLTFResult

  // Atualiza o material PHOTO_5 com a textura recebida
  if (photoTexture) {
    materials.PHOTO_5.map = photoTexture
    materials.PHOTO_5.needsUpdate = true // Garante que o material seja atualizado
  }

  return (
    <group {...props} dispose={null}>
      <group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5_1.geometry}
          material={materials.FRAME_7}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5_2.geometry}
          material={materials.PHOTO_5} // Material atualizado
        />
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')

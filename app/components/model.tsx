import * as THREE from 'three'
import React, { useMemo } from 'react'
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
  rotation: Boolean
}

export function Model({ photoTexture, rotation, ...props }: ModelProps) {
  const { nodes, materials } = useGLTF('/scene.gltf') as GLTFResult

  // Cria um clone do material para evitar modificar o material original
  const photoMaterial = useMemo(() => {
    const material = materials.PHOTO_5.clone()

    if (photoTexture) {
      material.map = photoTexture
      material.needsUpdate = true
    }

    return material
  }, [materials.PHOTO_5, photoTexture])

  return (
    <group {...props} dispose={null}>
      <group rotation={[0, 0, rotation ? Math.PI * -0.5 : 0]}>
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
          material={photoMaterial} // Use o material clonado
        />
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
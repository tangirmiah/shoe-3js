/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.2 .\shoe.gltf -t
*/

import * as THREE from 'three'
import { useContext } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { ColorContext, ColorProvider } from '../appContext'

type GLTFResult = GLTF & {
  nodes: {
    shoe: THREE.Mesh
    shoe_1: THREE.Mesh
    shoe_2: THREE.Mesh
    shoe_3: THREE.Mesh
    shoe_4: THREE.Mesh
    shoe_5: THREE.Mesh
    shoe_6: THREE.Mesh
    shoe_7: THREE.Mesh
  }
  materials: {
    laces: THREE.MeshStandardMaterial
    mesh: THREE.MeshStandardMaterial
    caps: THREE.MeshStandardMaterial
    inner: THREE.MeshStandardMaterial
    sole: THREE.MeshStandardMaterial
    stripes: THREE.MeshStandardMaterial
    band: THREE.MeshStandardMaterial
    patch: THREE.MeshStandardMaterial
  }
}
export interface ShoeColors {

  laces ?: string
  mesh ?: string
  caps ?: string
  inner ?: string
  sole ?: string
  stripes ?: string
  band ?: string
  patch ?: string

}
export function Shoe(props: Partial<ShoeColors>) {
  const { nodes, materials } = useGLTF('/shoe.gltf') as unknown as GLTFResult
  const colorsFromContext = useContext(ColorContext)
  return (
    <ColorProvider>
      <group  {...props} dispose={null} >
      <mesh geometry={nodes.shoe.geometry} material={materials.laces} material-color={colorsFromContext.laces} /> 
      <mesh geometry={nodes.shoe_1.geometry} material={materials.mesh} material-color={colorsFromContext.mesh} />
      <mesh geometry={nodes.shoe_2.geometry} material={materials.caps} material-color={colorsFromContext.caps} />
      <mesh geometry={nodes.shoe_3.geometry} material={materials.inner} material-color={colorsFromContext.inner} />
      <mesh geometry={nodes.shoe_4.geometry} material={materials.sole} material-color={colorsFromContext.sole} />
      <mesh geometry={nodes.shoe_5.geometry} material={materials.stripes} material-color={colorsFromContext.stripes} />
      <mesh geometry={nodes.shoe_6.geometry} material={materials.band} material-color={colorsFromContext.band} />
      <mesh geometry={nodes.shoe_7.geometry} material={materials.patch} material-color={colorsFromContext.patch} />
      </group>
    </ColorProvider>
  )
}

useGLTF.preload('/shoe.gltf')

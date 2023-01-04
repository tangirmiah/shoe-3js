import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';

import { Float, OrbitControls, Stage } from '@react-three/drei';

import { Shoe } from './components/Shoe';
import ColorPicker from './components/ColorPicker';
import { ColorProvider } from './appContext';




function App() {

  return (
    <ColorProvider>

      <div className="h-screen w-screen bg-gradient-to-b from-blue-800 via-sky-200 to-emerald-100 overflow-hidden">
        <h1 className='p-6 text-white text-center text-6xl'>Customize your shoe</h1>
        <div className='z-10 flex flex-wrap justify-between items-center bg-white w-2/6  bg-opacity-10 rounded-lg p-3 absolute left-1/2 -translate-x-1/2 mt-2'>
          <ColorPicker item='laces' />
          <ColorPicker item='mesh' />
          <ColorPicker item='caps' />
          <ColorPicker item='inner' />
          <ColorPicker item='sole' />
          <ColorPicker item='stripes' />
          <ColorPicker item='band' />
          <ColorPicker item='patch' />
        </div>
        <Suspense fallback={<span className='z-50 h-screen w-screen bg-black'>Loading</span>}>
          <Canvas shadows className='relative z-0'>
            <OrbitControls />
            <Stage environment={'forest'}>
              <Shoe />
            </Stage>
          </Canvas>
        </Suspense>
      </div >
    </ColorProvider >
  );
}

export default App;


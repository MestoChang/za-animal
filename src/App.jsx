import React, { useState } from 'react';
import { Quiz } from './pages';

const App = () => {
  return (
    <div className='relative mx-auto w-full flex justify-center bg-emerald-100'>

      <div className='max-w-xl min-w-72 w-[50%] z-10 inset-x-0 bg-green-800'>
        <Quiz />
      </div>

    </div>
  )
}

export default App

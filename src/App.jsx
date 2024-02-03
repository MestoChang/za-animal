import React, { useState } from 'react';
import { Quiz } from './pages';

const App = () => {
  return (
    <div className='relative max-w-xl mx-auto bg-slate-100'>

      <div className='z-10 absolute top-0 inset-x-0'>
        <Quiz />
      </div>

    </div>
  )
}

export default App

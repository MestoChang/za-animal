import React, { useState } from 'react';
import { Quiz } from './pages';

const App = () => {
  return (
    <div className='relative mx-auto w-full flex justify-center bg-emerald-50'>

      <div className='max-w-2xl min-w-80 w-[50%] z-10 inset-x-0 bg-quizBg'>
        <Quiz />
      </div>

    </div>
  )
}

export default App

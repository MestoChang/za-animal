import React, { useState } from 'react';
import { Quiz } from './pages';

const App = () => {
  return (
    <div className='relative mx-auto w-full flex justify-center'>

      <div className='max-w-2xl min-w-60 z-10 inset-x-0 bg-quizBg'>
        <Quiz />
      </div>

    </div>
  )
}

export default App

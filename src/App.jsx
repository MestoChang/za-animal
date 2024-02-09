import React, { useState } from 'react';
import { Quiz } from './pages';

const App = () => {
  return (
    <div className='relative mx-auto w-full flex justify-center'>

      <div className='max-w-2xl min-w-60 z-10 inset-x-0 bg-quizBg'>
        <Quiz />
      </div>

      <footer className='h-8 absolute left-0 right-0 text-center bottom-0 z-20 text-xs md:text-sm text-white tracking-wide shadow'>
        Copyright © 2024 camego 團契. All rights reserved.
      </footer>


    </div>
  )
}

export default App

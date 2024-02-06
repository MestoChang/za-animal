import React from 'react';
import Button from '../components/Button';
import { Title, StartButton } from '../database/asset';

const Start = ({ onClick }) => {
    return (
        <div className='p-6 min-h-screen w-full flex flex-col justify-center items-center gap-4 text-quizColor'>

            {/* 心測標題 */}
            <div className='w-full flex justify-center'>
                <img src={Title} className='w-[80%]' />
            </div>

            {/*<h2 className='text-2xl font-bold text-white'>你是哪種焦慮動物</h2>*/}
            <h3 className='font-bold'>這是一個焦慮世代，生活中有各種讓人煩惱的事物。六種動物看清你現在的焦慮源頭。</h3>

            <div className='my-6 px-4 flex flex-col items-center justify-center gap-10 w-full'>

                <div className='w-[80%]'>

                    <p>
                        一覺醒來，你發現自己身處一片神秘的森林中，周圍非常地安靜，這裡的樹木散發出奇異的光芒，似乎擁有某種不可思議的力量。
                    </p>

                    <p className='mt-2'>
                        一場未知的旅行即將展開...
                    </p>

                </div>

                {/* start button */}
                <img src={StartButton} onClick={onClick} className='cursor-pointer hover:opacity-80 ease-in-out duration-150' />

            </div>
        </div>
    )
}

export default Start;
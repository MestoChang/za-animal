import React from 'react';
import Button from '../components/Button';
import { Title, StartButton } from '../database/asset';

const Start = ({ onClick }) => {
    return (
        <div className='relative p-6 min-h-screen w-full flex flex-col items-center gap-10 text-quizColor bg-cover bg-center start-background'>

            {/* 心測標題 */}
            <div className='w-full flex justify-center  mt-12'>
                <img src={Title} className='w-[80%]' />
            </div>

            {/*<h2 className='text-2xl font-bold text-white'>你是哪種焦慮動物</h2>*/}
            <div className='font-bold w-full text-lg flex flex-col items-center'>
                <p>
                    這是一個焦慮世代，
                </p>
                <p>
                    生活中有各種讓人煩惱的事物。
                </p>

                <p>
                    六種動物看清你現在的焦慮源頭。
                </p>
            </div>

            <div className='my-6 px-4 flex flex-col items-center justify-center gap-10 mb-8 w-full'>

                <div className='w-[80%]'>

                    <p>
                        「一覺醒來，你發現自己身處一片神秘的森林中，周圍非常地安靜，這裡的樹木散發出奇異的光芒，似乎擁有某種不可思議的力量。
                    </p>

                    <p className='mt-2'>
                        一場未知的旅行即將展開...」
                    </p>

                </div>

                {/* start button */}
                <img src={StartButton} onClick={onClick} className='w-[20%] cursor-pointer hover:opacity-80 ease-in-out duration-150' />
            </div>

            {/* bg img */}
            {/* <div className='absolute inset-0 h-full'>
                <img src={StartBg} className='object-cover' />
            </div> */}

        </div>
    )
}

export default Start;
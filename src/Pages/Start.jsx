import React from 'react';
import Button from '../components/Button';
import { Title } from '../database/asset';

const Start = ({ onClick }) => {
    return (
        <div className='p-6 min-h-screen w-full flex flex-col justify-center items-center gap-4'>

            {/* 心測標題 */}
            <div className='my-4 w-full flex justify-center'>
                <img src={Title} className='w-[80%]' />
            </div>

            {/*<h2 className='text-2xl font-bold text-white'>你是哪種焦慮動物</h2>*/}
            <h3 className='text-2xl font-bold text-white'>這是一個焦慮世代，生活中有各種讓人煩惱的事物。六種動物看清你現在的焦慮源頭。</h3>

            {/* logo 
            <div className='my-4 w-full flex justify-center'>
                <img src={Logo} className='w-[80%]' />
            </div>*/}

            <div className='my-6 px-4 flex flex-col items-center justify-center gap-10'>

                <div className='w-[80%] text-white'>

                    <p>
                        一覺醒來，你發現自己身處一片神秘的森林中，周圍非常地安靜，這裡的樹木散發出奇異的光芒，似乎擁有某種不可思議的力量。
                    </p>

                    <p className='mt-3'>
                        一場未知的旅行即將展開...
                    </p>

                </div>

                <Button primary
                    onClick={onClick}
                    className="flex w-1/2 justify-center">
                    開始測試
                </Button>

            </div>
        </div>
    )
}

export default Start;
import React from 'react';
import Button from '../components/Button';

const Start = ({ onClick }) => {
    return (
        <div className='p-6 min-h-screen w-full flex flex-col justify-center items-center gap-4'>
            <h2 className='text-2xl font-bold'>你是哪種焦慮動物</h2>


            <div className='my-6 px-4 flex flex-col items-center justify-center gap-10'>

                <div className='w-[80%]'>

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
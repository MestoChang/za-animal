import React, { useState } from 'react';
import resultData from '../database/resultData';
import Button from '../components/Button';

const Result = ({ finalResult }) => {

    const [showImg, setShowImg] = useState(false);
    const toggleImage = () => {
        setShowImg(!showImg);
    }

    // display result text
    function resultElement(index) {
        return (
            <div className='flex flex-col gap-3 items-center w-full'>
                <h3 className='text-2xl font-bold'>
                    {resultData[index].title}
                </h3>

                {
                    showImg ? (
                        <div>
                            <img src={resultData[index].img} className='w-full max-h-screen lg:max-h-[400px] mb-2' />
                        </div>
                    ) : (
                        <div className='flex flex-col gap-2 items-center'>

                            {/* Type */}
                            <span className='text-xl font-bold bg-green-600 text-white p-4'>
                                {resultData[index].type}
                            </span>

                            {/* description */}
                            {resultData[index].description.map((p, index) => (
                                <p key={index}>
                                    {p}
                                </p>
                            ))}

                            {/* invite */}
                            {resultData[index].invite.map((p, index) => (
                                <p key={index}>
                                    {p}
                                </p>
                            ))}

                            {/* hashtag */}
                            <div>
                                {resultData[index].hashtag.map((tag, index) => (
                                    <span key={index}>
                                        {tag}
                                    </span>
                                ))}
                            </div>


                            <Button primary onClick={toggleImage} className="mt-6 flex justify-center w-1/2">
                                顯示圖片
                            </Button>

                        </div>
                    )
                }



            </div>
        )
    }



    return (
        <div className='h-full md:pt-6'>
            {resultElement(finalResult)}
        </div>
    )
}

export default Result
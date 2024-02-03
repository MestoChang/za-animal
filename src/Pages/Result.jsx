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
                        <div className='w-full'>
                            <img src={resultData[index].img} className='w-full max-h-screen lg:max-h-[400px] mb-2' />
                        </div>
                    ) : (
                        <div className='flex flex-col gap-3 '>

                            {/* Type */}
                            <span className='flex justify-center items-center text-xl font-bold bg-green-600 text-white px-3 py-1'>
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
                            <div className='flex flex-col gap-1'>
                                {resultData[index].hashtag.map((tag, index) => (
                                    <span key={index}>
                                        # {tag}
                                    </span>
                                ))}
                            </div>


                        </div>
                    )
                }

                <div className='w-full flex justify-center mt-6'>
                    <Button primary onClick={toggleImage} className="flex justify-center w-full md:w-1/2 ">
                        {showImg ? "顯示文字" : "顯示圖片"}
                    </Button>

                </div>


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
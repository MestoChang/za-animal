import React, { useState } from 'react';
import resultData from '../database/resultData';
import Button from '../components/Button';

const Result = ({ finalResult, handleRetakeTest, isTestCompleted }) => {

    const [showResultImg, setShowResultImg] = useState(false);
    const toggleImage = () => {
        setShowResultImg(!showResultImg);
    }


    // handleToSignUp
    const handleToSignUp = () => {
        const w = window.open('about:blank');
        w.location.href = "https://www.google.com"
    }

    // display result text
    function resultElement(index) {
        return (
            <div className='flex flex-col gap-3 items-center w-full'>

                {
                    showResultImg ? (
                        <div className='w-full'>
                            <h3 className='text-2xl font-bold'>
                                {resultData[index].title}
                            </h3>

                            {/* 文字說明 */}
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

                            <img src={resultData[index].img} className='w-full h-auto mb-2' />

                            {/* Restart btn */}

                            {isTestCompleted ? (
                                <div className='mt-6 my-8 w-full flex justify-center flex-col gap-4'>
                                    <Button primary
                                        onClick={handleToSignUp}
                                        className="flex w-full md:w-1/2 justify-center">
                                        我要報名
                                    </Button>
                                    <Button secondary
                                        onClick={handleRetakeTest}
                                        className="flex w-full md:w-1/2 justify-center">
                                        再測一次
                                    </Button>
                                </div>
                            ) : null}


                        </div>
                    ) : (

                        <div>

                            <p className='text-xl font-bold'>
                                突然你手上出現了一封信函，你趕緊打開來看，上面寫著：
                            </p>

                            {/* show Result Img Btn */}
                            <div className='w-full flex justify-center flex-col mt-6'>
                                <Button primary onClick={toggleImage} className="flex justify-center w-full md:w-1/2 ">
                                    顯示結果
                                </Button>
                            </div>

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
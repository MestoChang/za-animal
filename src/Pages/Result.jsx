import React, { useState } from 'react';
import resultData from '../database/resultData';
import Button from '../components/Button';
import { Invatation } from '../database/asset';

const Result = ({ finalResult, handleRetakeTest, isTestCompleted }) => {

    const [showResult, setShowResult] = useState(false);
    const showResultImg = () => {
        setShowResult(!showResult);
    }

    const [showShareImg, setShowSharingImg] = useState(false);
    const openShareImg = () => {
        setShowSharingImg(!showShareImg);
    }


    // handleToSignUp
    const handleToSignUp = () => {
        const w = window.open('about:blank');
        w.location.href = "https://www.google.com"
    }

    // display result text
    function resultElement(index) {
        return (
            <div className='flex flex-col gap-4 items-center w-full'>

                {/* showResult or restart */}
                {
                    showResult ? (
                        <div className='w-full'>

                            {/* shareResultImg or description */}
                            {
                                showShareImg ? (
                                    <img src={resultData[index].shareImg} className='w-full h-auto mb-2' />
                                ) : (
                                    <div className='flex flex-col gap-3 text-white'>

                                        <img src={resultData[index].img} className='w-full h-auto mb-2 rounded-lg' />

                                        {/* title */}
                                        <div className='flex gap-2 items-center'>
                                            {/* Type */}
                                            <span className='flex justify-center items-center text-lg font-bold bg-orange-600 text-white px-2 py-0.5 rounded'>
                                                {resultData[index].type}
                                            </span>
                                            <h3 className='text-2xl font-bold text-center'>
                                                {resultData[index].title}
                                            </h3>
                                        </div>

                                        {/* description */}
                                        <div>
                                            {resultData[index].description.map((p, index) => (
                                                <p key={index}>
                                                    {p}
                                                </p>
                                            ))}
                                        </div>

                                        {/* invite */}
                                        <div>
                                            {resultData[index].invite.map((p, index) => (
                                                <p key={index}>
                                                    {p}
                                                </p>
                                            ))}
                                        </div>

                                        {/* hashtag */}
                                        <div className='flex flex-col gap-1'>
                                            {resultData[index].hashtag.map((tag, index) => (
                                                <span key={index}>
                                                    # {tag}
                                                </span>
                                            ))}
                                        </div>

                                    </div>
                                )}

                            {/* Restart btn */}
                            {isTestCompleted ? (
                                <div className='mt-6 my-8 w-full flex justify-center flex-col gap-4'>
                                    <Button primary
                                        onClick={openShareImg}
                                        className="flex w-full justify-center">
                                        分享結果
                                    </Button>
                                    <Button primary
                                        onClick={handleToSignUp}
                                        className="flex w-full justify-center">
                                        我要報名
                                    </Button>
                                    <Button secondary
                                        onClick={handleRetakeTest}
                                        className="flex w-full justify-center">
                                        再測一次
                                    </Button>
                                </div>
                            ) : null}

                        </div>
                    ) : (

                        <div className='flex items-center justify-center flex-col gap-6 pt-10'>

                            <p className='text-xl font-bold text-white'>
                                突然你手上出現了一封信函，你趕緊打開來看...
                            </p>

                            <img src={Invatation} alt="" />

                            {/* show Result Img Btn */}
                            <div className='w-full flex justify-center flex-col mt-6'>
                                <Button primary onClick={showResultImg} className="flex justify-center w-full ">
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
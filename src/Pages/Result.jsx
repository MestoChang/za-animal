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
        const formUrl = window.open('about:blank');
        formUrl.location.href = "https://forms.gle/MmhjTLyYti9fYuzG6";
    }

    // display result text
    function resultElement(index) {
        return (
            <div className='flex flex-col gap-4 items-center w-full'>

                {/* showResult or restart */}
                {
                    showResult ? (
                        <div className='w-full relative'>

                            {/* shareResultImg or description */}
                            {
                                showShareImg ? (
                                    <img src={resultData[index].shareImg} className='w-full h-auto mb-2' />
                                ) : (
                                    <div className='flex flex-col gap-6 text-white'>

                                        {/* title */}
                                        <div className='absolute -top-6 flex items-end justify-center gap-2 bg-resultBanner tracking-widest w-full h-24'>
                                            <h3 className='text-5xl  font-bold text-center'>
                                                {resultData[index].title}
                                            </h3>
                                        </div>


                                        {/* img */}
                                        <div className='relative mt-20 p-6 w-full flex flex-col gap-6 items-center '>

                                            {/* Type */}
                                            <span className='absolute top-3 left-10 flex justify-center items-center text-3xl tracking-wider font-bold bg-resultType text-white px-3 py-1.5 rounded'>
                                                {resultData[index].type}
                                            </span>

                                            <img src={resultData[index].img} className='w-[80%] h-auto mb-2 rounded-lg' />

                                            {/* hashtag */}
                                            <div className='flex flex-wrap justify-center gap-2 absolute bottom-6'>
                                                {resultData[index].hashtag.map((tag, index) => (
                                                    <span key={index} className='bg-white text-gray-900 font-bold px-2 py-0.5 rounded border-2 border-gray-900'>
                                                        #{tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* description */}
                                        <div className='mx-8 p-6 bg-white border border-gray-700 text-gray-900'>
                                            {resultData[index].description.map((p, index) => (
                                                <p key={index}>
                                                    {p}
                                                </p>
                                            ))}
                                        </div>

                                        {/* invite */}
                                        <div className='mx-8 p-6 bg-white border border-gray-700 text-gray-900'>
                                            {resultData[index].invite.map((p, index) => (
                                                <p key={index}>
                                                    {p}
                                                </p>
                                            ))}
                                        </div>


                                    </div>
                                )}

                            {/* Restart btn */}
                            {isTestCompleted ? (
                                <div className='my-16 px-8 w-full flex justify-center flex-col gap-6'>
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

                        <div className='p-6 flex items-center justify-center flex-col gap-6 pt-10'>

                            <p className='text-xl font-bold text-quizColor'>
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
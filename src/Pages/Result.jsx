import React, { useState } from 'react';
import resultData from '../database/resultData';
import Button from '../components/Button';
import { Invitation, Logo, ResultBottom } from '../database/asset';

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
            <div className='flex flex-col gap-4 items-center w-full h-full'>

                {/* showResult or restart */}
                {
                    showResult ? (
                        <div className='w-full relative bg-resultBg'>

                            {/* shareResultImg or description */}
                            {
                                showShareImg ? (
                                    <img src={resultData[index].shareImg} className='w-[80%] h-auto mb-2' />
                                ) : (
                                    <div className='flex flex-col gap-10'>

                                        <p className='z-10 text-lg absolute top-0 left-24 text-white'>
                                            你是一隻...
                                        </p>

                                        {/* title */}
                                        <div className='absolute -top-6 flex items-end justify-center gap-2 bg-resultBanner tracking-widest w-full h-24 text-white'>

                                            <h3 className='text-4xl  font-bold text-center'>
                                                {resultData[index].title}
                                            </h3>
                                        </div>


                                        {/* img */}
                                        <div className='relative mt-20 p-6 w-full flex flex-col gap-6 items-center'>

                                            {/* Type */}
                                            {/* <span className='absolute top-3 left-10 flex justify-center items-center text-3xl tracking-wider font-bold bg-resultType text-white px-3 py-1.5 rounded'>
                                                {resultData[index].type}
                                            </span> */}

                                            <img src={resultData[index].img} className='w-[90%] -translate-x-4 h-auto mb-2 rounded-lg' />

                                            {/* hashtag */}
                                            <div className='flex flex-wrap justify-center gap-2 absolute bottom-4 text-base md:text-lg'>
                                                {resultData[index].hashtag.map((tag, index) => (
                                                    <span key={index} className='bg-white text-gray-900 font-bold px-2 py-0.5 rounded border-2 border-gray-900 shadow-lg'>
                                                        #{tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* description */}
                                        <div className='mx-8 p-4 bg-white border border-gray-700 text-gray-900'>
                                            {resultData[index].description.map((p, index) => (
                                                <p key={index}>
                                                    {p}
                                                </p>
                                            ))}
                                        </div>

                                        {/* invite */}
                                        <div className='relative'>
                                            <span className='absolute -top-6 left-4 bg-resolutionTitle text-gray-900 border border-gray-900 font-bold px-2.5 py-1'>
                                                憂慮解方
                                            </span>
                                            <div className='mx-8 p-4 bg-white border border-gray-700 text-gray-900'>

                                                {resultData[index].invite.map((p, index) => (
                                                    <p key={index}>
                                                        {p}
                                                    </p>
                                                ))}
                                            </div>
                                        </div>


                                    </div>
                                )}


                            {/* Logo */}
                            <div className='p-4 w-full flex flex-col gap-12 mt-6'>

                                {/* logo */}
                                <div className='w-full flex justify-center'>
                                    <img src={Logo} className='w-[80%]' />
                                </div>

                                {/* date & text */}
                                <div className='flex gap-4 items-center justify-center text-2xl md:text-3xl text-greenText font-bold tracking-[.15rem]'>
                                    {/* date */}
                                    <div className='flex flex-col gap-1.5 it'>
                                        <span>03</span>
                                        <span>09</span>
                                    </div>

                                    {/* text */}
                                    <div className='flex flex-col gap-1.5'>
                                        <span>不再蕉綠</span>
                                        <span>用音樂告別EMO</span>
                                    </div>
                                </div>

                            </div>

                            {/* Restart btn */}
                            {isTestCompleted ? (
                                <div className='mt-16 mb-60 px-8 w-full flex justify-center flex-col gap-6'>
                                    <Button secondary
                                        onClick={handleToSignUp}
                                        className="flex w-full justify-center">
                                        我要報名
                                    </Button>
                                    <Button primary
                                        onClick={openShareImg}
                                        className="flex w-full justify-center">
                                        分享結果
                                    </Button>
                                    <Button primary
                                        onClick={handleRetakeTest}
                                        className="flex w-full justify-center">
                                        再測一次
                                    </Button>
                                </div>
                            ) : null}

                            {/* bottom img */}
                            <div className='absolute bottom-0 left-0 right-0 '>
                                <img src={ResultBottom} alt="" />
                            </div>

                        </div>
                    ) : (

                        <div className='p-6 pt-12 flex items-center justify-center flex-col gap-6'>

                            <p className='text-xl font-bold text-quizColor'>
                                突然你手上出現了一封信函，你趕緊打開來看...
                            </p>

                            <img src={Invitation} alt="" />

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
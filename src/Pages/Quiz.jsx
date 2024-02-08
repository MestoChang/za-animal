import React, { useState } from 'react';
import quizData from '../database/quizData';

import Button from '../components/Button';
import { Start, Result } from '../pages';
import { QuizBottom } from '../database/asset';



const Quiz = () => {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const [isTestCompleted, setIsTestCompleted] = useState(false);
    const [isTestStarted, setIsTestStarted] = useState(false);

    const [showResult, setShowResult] = useState(false);
    const [finalScore, setFinalScore] = useState(0);
    const [finalResult, setFinalResult] = useState(0);

    const [scoreA, setScoreA] = useState(0);
    const [scoreB, setScoreB] = useState(0);
    const [scoreC, setScoreC] = useState(0);
    const [scoreD, setScoreD] = useState(0);
    const [scoreE, setScoreE] = useState(0);
    const [scoreF, setScoreF] = useState(0);


    // start quiz
    const handleStartTest = () => {
        setIsTestStarted(true);
    };

    // restart
    const handleRetakeTest = () => {
        setCurrentQuestion(0);
        setUserAnswers([]);
        setShowResult(false);
        setIsTestCompleted(false);
        setIsTestStarted(false);

        setScoreA(0);
        setScoreB(0);
        setScoreC(0);
        setScoreD(0);
        setScoreE(0);
        setScoreF(0);
    };


    // 選取後跳轉下題
    const handleAnswerSelect = (selectedOption) => {
        const selectedScore = quizData[currentQuestion].options.find(
            (option) => option.text === selectedOption
        ).score;

        setUserAnswers([...userAnswers, selectedOption]);

        // count score
        setScoreA(scoreA + selectedScore.A);
        setScoreB(scoreB + selectedScore.B);
        setScoreC(scoreC + selectedScore.C);
        setScoreD(scoreD + selectedScore.D);
        setScoreE(scoreE + selectedScore.E);
        setScoreF(scoreF + selectedScore.F);
        // console.log("A:", scoreA, "B:", scoreB, "C:", scoreC, "D:", scoreD, "E:", scoreE, "F:", scoreF);

        // get highest score and type
        const scoreArray = [scoreA, scoreB, scoreC, scoreD, scoreE, scoreF];
        const maxScore = Math.max(...scoreArray);
        setFinalResult(scoreArray.indexOf(maxScore));
        setFinalScore(maxScore);
        // console.log('finalResult =', finalResult, 'finalScore =', finalScore);


        // last question
        if (currentQuestion < quizData.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else { // last one
            setShowResult(true);
            setIsTestCompleted(true);
        }
    };


    return (
        <div className="relative flex flex-col items-center min-h-screen h-full w-full">

            {/* Start or not */}
            {isTestStarted ? (

                // Result or Quiz
                showResult ? (
                    // Result
                    <div className='w-full h-full flex flex-col justify-center relative'>

                        <Result finalResult={finalResult} handleRetakeTest={handleRetakeTest} isTestCompleted={isTestCompleted} />

                    </div>
                ) : (
                    // Quiz
                    <div className="mt-4 flex flex-col gap-4 p-6 w-full items-center ">
                        <h2 className='text-xl font-bold text-quizColor'>
                            {quizData[currentQuestion].title}
                            <span className='text-sm opacity-60 ml-1'>
                                / {quizData.length}
                            </span>
                        </h2>
                        <div className='p-6 flex items-center justify-center'>
                            <img src={quizData[currentQuestion].icon} className='w-[80%]' />
                        </div>
                        <p className='text-quizColor my-3'>
                            {quizData[currentQuestion].question}
                        </p>

                        {/* option */}
                        <ul className="flex flex-col gap-4 my-6 w-full">
                            {
                                quizData[currentQuestion].options.map((option) => (
                                    <li
                                        key={option.text}
                                        onClick={() => handleAnswerSelect(option.text)}
                                        className='px-4 py-2 rounded text-white bg-optionBg duration-100 ease-in-out cursor-pointer hover:bg-optionHoverBg'
                                    >
                                        {option.text}
                                    </li>
                                ))
                            }
                        </ul>

                        {/* FIXME adjust img hight */}
                        {/* bottom img */}
                        <div className='absolute bottom-0 left-0 right-0 -z-20'>
                            <img src={QuizBottom} alt="" />
                        </div>

                    </div>
                )) : (

                // start
                <Start onClick={handleStartTest} />
            )}

        </div>
    );
}

export default Quiz
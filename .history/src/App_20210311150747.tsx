import React, {useState, useEffect} from 'react';
import QuestionCard from './components/QuestionCard';
import { fetchQuizQuestions } from './API';


// Types
import { QuestionState, Difficulty } from './API';

const TOTAL_QUESTIONS = 10;

type AnswerObject = {
    question: string;
    answer: string;
    correct: boolean;
    correctAnswer: string;

}

const App =  () =>  {
    
    
    
    const [loading, setLoading] = useState(false);
    const [questions, setQuestions] = useState<QuestionState[]>([]);
    const [number, setNumber] = useState(0);
    const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(true)


    console.log(questions)

    const startTrivia = async () => {
        setLoading(true);
        setGameOver(false);

        const newQuestions = await fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY)

        setQuestions(newQuestions);
        setScore(0)
        setUserAnswers([]);
        setNumber(0);
        setLoading(false)

    }

    const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
        

    }

    const nextQuestion = () => {

    }

    return (
        <div className="App">
            <h1>REACT QUIZ</h1>
            {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
                <button className="start" onClick={startTrivia}>
                    Start
                </button>
            ) : null}
            {!gameOver ? <p className="score">Score</p> : null }
            {loading && <p>Loading Questions ...</p> }
            
            {!loading && !gameOver && (
                <QuestionCard
                questionNr={number + 1}
                totalQuestions={TOTAL_QUESTIONS}
                question={questions[number].question}
                answers={questions[number].answers}
                userAnswer={userAnswers ? userAnswers[number] : undefined}
                callback={checkAnswer}
            />
            )}

            {(!gameOver && !loading && userAnswers.length === number + 1) && number !== TOTAL_QUESTIONS - 1 ? (

            )}
            
            
        </div>
    )
}


export default App;
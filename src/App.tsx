import React, { useState } from 'react'
import { fetchQuizQuestions } from "./API";
// components
import QuestionCard from './components/QuestionCard'
// Types
import { Difficulty } from './API';
import { QuestionState } from './API';

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

const TOTAL_QUESTIONS = 10;


const App = () => {

  const [loading, setLoading] = useState<Boolean>(false);
  const [questions, setQuesions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState<number>(0)
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([])
  const [score, setScore] = useState<number>(0)
  const [gameOver, setGameOver] = useState<Boolean>(true);

  const startTrivia = async () => {
    setLoading(true);
    
    
    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );
    setLoading(false);
    setQuesions(newQuestions);
    setUserAnswers([]);
    setGameOver(false)
  }


  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const question = questions[number];
      const answer = e.currentTarget.value;
      const correct = question.correct_answer == answer;

      if (correct) setScore(score + 1);

      const answerObject = {
        question: question.question,
        answer,
        correct,
        correctAnswer: question.correct_answer 
      }
      setUserAnswers((prev) => [...prev, answerObject])
    }
  }

  const nextQuestion = () => {
    const nextQuestion = number + 1;
    
    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }

  }

  return (
    <div>
      <h1>App</h1>
      {(gameOver || userAnswers.length === TOTAL_QUESTIONS) && (
        <button className="start" onClick={startTrivia}>
        Start
      </button>
      )}
      {!gameOver && (
        <p className='score'>
          Score:
        </p>
      )}
      {loading && (
        <p>{"...Loading Questions"}</p>
      )}
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
      {
        (!gameOver && !loading && userAnswers.length === number + 1) && (
          <button className='next' onClick={nextQuestion}>
          Next Question
        </button>
        )
      }
     
    </div>
  )
}

export default App
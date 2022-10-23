import React from 'react'
import { AnswerObject } from '../../App';

type Props = {
    question: string;
    answers: string[];
    callback:  (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer?: AnswerObject;
    questionNr: number;
    totalQuestions: number;
}


const QuestionCard: React.FC<Props> = ({question,answers,callback,userAnswer, questionNr,totalQuestions}) => {
  return (
      <li role={"article"}>
          <h2>
              Question: {questionNr} / {totalQuestions}
          </h2>
          <h1 dangerouslySetInnerHTML={{ __html: question }} />
          <div>
              {
                  answers.map((answer:string, i: number) => (
                    <div key={i}>
                        <button disabled={!!userAnswer} onClick={callback}>
                          <span dangerouslySetInnerHTML={{__html: answer}}/>
                        </button>
                    </div>
                  ))
              }
          </div>
    </li>
  )
}

export default QuestionCard
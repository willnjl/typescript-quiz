import React from 'react'
import { AnswerObject } from '../../App';
// styles
import {Wrapper, ButtonWrapper} from "./QuestionCard.styles";

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
      <Wrapper role={"article"}>
          <h2>
              Question: {questionNr} / {totalQuestions}
          </h2>
          <h1 dangerouslySetInnerHTML={{ __html: question }} />
          <div>
              {
                answers.map((answer:string) => (
                  <ButtonWrapper    
                    key={answer}
                    correct={userAnswer?.correctAnswer === answer}
                    userClicked={userAnswer?.answer === answer}
                  >
                    <button disabled={!!userAnswer} value={answer} onClick={callback}>
                      <span dangerouslySetInnerHTML={{__html: answer}}/>
                    </button>
                  </ButtonWrapper>
                ))
              }
          </div>
    </Wrapper>
  )
}

export default QuestionCard
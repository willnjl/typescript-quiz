import React from 'react'

type Props = {
    question: string;
    answers: string[];
    callback: any;
    userAnswer: any;
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
                  answers.map((answer:string) => (
                      <div>
                          <button disabled={userAnswer} onClick={callback}>
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
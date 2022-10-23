import { shuffleArary } from "./utils"

export enum Difficulty{
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard"
}

export type Question = {
    category: string,
    correct_answer: string,
    difficulty: Difficulty,
    incorrect_answers: string[],
    question: string,
    type: string
}


export type QuestionState = Question & {answers: string[]}

export const fetchQuizQuestions = async (amount: number, difficulty : Difficulty) => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
    
    const data = await (await fetch(endpoint)).json();

    return data.results.map((question: Question) => ({
        ...question,
        answer: shuffleArary([...question.incorrect_answers, question.correct_answer])
    }))
}
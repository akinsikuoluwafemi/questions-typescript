
import {shuffleArray } from './utils';
export type Question = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answersss: string[];
    question: string;
    type: string;
}

export type QuestionState = Question & { answersss: string[]}

export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard"
}

export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty) => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;

    const data = await (await fetch(endpoint)).json();
    console.log(data)
    return data.results.map((question: Question) => (
        {
            ...question,
            answersss: shuffleArray([...question.incorrect_answersss, question.correct_answer])
        }
    ))
}
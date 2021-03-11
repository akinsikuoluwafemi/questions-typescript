import React, {FC} from 'react';


type Props = {
    question: string;
    answers: string[];
    callback: any;
    userAnswer: string;
    questionNr: number;
    totalQuestions: number;
}

const QuestionCard: FC<Props> = ({question, answers, callback, userAnswer, questionNr, totalQuestions}) => (
    
    <div>
        <p className="number">Question: {questionNr} / {totalQuestions}</p>
        <p dangerouslySetInnerHTML={{ __html: question }} />
        <div>
            {answers.map(answer => (
                <div>

                    <div
            ))}
        </div>

    </div>
)


export default QuestionCard;
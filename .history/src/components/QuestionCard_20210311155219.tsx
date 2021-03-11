import React, {FC} from 'react';

// Types
import {} from './'


// import { } from './QuestionCard.styles';

type Props = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: any;
    questionNr: number;
    totalQuestions: number;
}

const QuestionCard: FC<Props> = ({question, answers, callback, userAnswer, questionNr, totalQuestions}) => (
    
    <div>
        <p className="number">Question: {questionNr} / {totalQuestions}</p>
        <p dangerouslySetInnerHTML={{ __html: question }} />
        <div>
            {answers.map(answer => (
                <div key={answer}>
                    <button disabled={userAnswer} value={answer} onClick={callback}>
                        <span dangerouslySetInnerHTML={{__html: answer}}/>
                    </button>
                </div>
            ))}
        </div>

    </div>
)


export default QuestionCard;
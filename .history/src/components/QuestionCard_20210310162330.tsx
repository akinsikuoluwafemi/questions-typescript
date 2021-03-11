import React, {FC} from 'react';


type Props = {
    question: string;
    answer: string[];
    callback: any;
    userAnswer: string;
    questionNr: number;
    totalQuestions: number;
}

const QuestionCard: FC<Props> = ({question, answer, callback, userAnswer, questionNr, totalQuestions}) => (
    
    <div>
        
    </div>
)


export default QuestionCard;
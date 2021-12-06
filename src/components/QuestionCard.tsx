import React from 'react';

type Props = {
    question: string;
    answers: string[];
    callback: any;
    userAnswer: any;
    questionNumr: number;
    totalQuestions: number;
}

// need to make this a functional component
const QuestionCard: React.FC<Props> = ({
    question,
    answers,
    callback,
    userAnswer,
    questionNumr,
    totalQuestions
}) => {
    return (
        <div>
            <p className='number'>
                Question: {questionNumr} / {totalQuestions}
            </p>
            <p dangerouslySetInnerHTML={{ __html: question }} />
            <div>
                {answers.map(answer => (
                    <div>
                        <button disabled={userAnswer} onClick={callback}>
                            <span dangerouslySetInnerHTML={{ __html: answer }} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default QuestionCard;
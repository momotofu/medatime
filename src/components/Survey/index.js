import React, { useState } from 'react'

/*
 * Survey component
 *
 * @param {Object[]} props - The data used to populate the survey with questions and answers.
 * [{ question: 'Example Question', questionType: 'textInput, multipleChoice' , options: [{ value: 'Value String' }] }]
 *
 */

const Survey = (props) => {
  const { questions } = props
  const [ questionIndex, setQuestionIndex ] = useQuestionIndex(0, 0, questions.length - 1)
  const firstQuestion = questions[0]

  return (
    <Question
      question={firstQuestion.question}
      options={firstQuestion.options}
      questionType={firstQuestion.questionType}
    />
  )
}

function Question(props) {
  const { questionType, question, options } = props

  switch (questionType) {
    case 'multipleChoice':
      return (
        <div>
          <h2>{question}</h2>

        </div>
      )
      break
    
    case 'textInput':
      return (
        <div>
          <h2>{question}</h2>

        </div>
      )
      break

    default:
      break
  }
}

function useQuestionIndex(initialState, minCap, maxCap) {
  // to prevent questionIndex from being to great or too small
  Array.from(arguments).forEach(arg => {
    if (typeof arg !== 'number') {
      throw new Error('All arguments are required to be a number.')
    }
  })

  const [questionIndex, setQuestionIndex] = useState(initialState)
  
  function setQuestionIndexWrapper(nextIndex) {
    
    if (nextIndex <= minCap) {
      setQuestionIndex(minCap)
    } else if (nextIndex >= maxCap) {
      setQuestionIndex(maxCap)
    } else {
      setQuestionIndex(nextIndex)
    }
  }

  return [questionIndex, setQuestionIndexWrapper]
}

export default Survey
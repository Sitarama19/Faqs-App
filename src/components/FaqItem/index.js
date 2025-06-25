import './index.css'

const FaqItem = props => {
  const {eachQuestion, isActive, clickedPlusBtn} = props
  const {id, questionText, answerText} = eachQuestion

  const toggleBtn = isActive
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

  const altBtnText = isActive ? 'minus' : 'plus'

  const answerContainer = isActive && (
    <div>
      <hr className="straight-line" />
      <p className="answer-text">{answerText}</p>
    </div>
  )

  const onClickPlusBtn = () => {
    clickedPlusBtn(id)
  }

  return (
    <li className="each-question-container">
      <div className="question-text-container">
        <h1 className="question-text">{questionText}</h1>
        <button
          type="button"
          className="answer-button"
          onClick={onClickPlusBtn}
        >
          <img src={toggleBtn} alt={altBtnText} className="plus-icon" />
        </button>
      </div>
      {answerContainer}
    </li>
  )
}

export default FaqItem

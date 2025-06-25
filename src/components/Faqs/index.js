import {Component} from 'react'
import FaqItem from '../FaqItem'

import './index.css'

class Faqs extends Component {
  state = {activeItemId: []}

  clickedPlusBtn = id => {
    const {activeItemId} = this.state

    if (activeItemId.includes(id)) {
      this.setState({
        activeItemId: activeItemId.filter(eachId => eachId !== id),
      })
    } else {
      this.setState({
        activeItemId: [...activeItemId, id],
      })
    }
  }

  render() {
    const {activeItemId} = this.state
    const {faqsList} = this.props

    return (
      <div className="app-container">
        <div className="faqs-container">
          <h1 className="heading">FAQs</h1>
          <ul className="questions-container">
            {faqsList.map(eachQuestion => (
              <FaqItem
                key={eachQuestion.id}
                eachQuestion={eachQuestion}
                isActive={activeItemId.includes(eachQuestion.id)}
                clickedPlusBtn={this.clickedPlusBtn}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs

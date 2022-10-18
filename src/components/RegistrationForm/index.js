import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    showErrorMsg1: false,
    showErrorMsg2: false,
    formSubmit: false,
  }

  onBlurFirstName = event => {
    if (event.target.value === '') {
      this.setState({showErrorMsg1: true})
    } else {
      this.setState({firstName: event.target.value, showErrorMsg1: false})
    }
  }

  onBlurLastName = event => {
    if (event.target.value === '') {
      this.setState({showErrorMsg2: true})
    } else {
      this.setState({lastName: event.target.value, showErrorMsg2: false})
    }
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    if (firstName === '' && lastName !== '') {
      this.setState({showErrorMsg1: true})
    } else if (lastName === '' && firstName !== '') {
      this.setState({showErrorMsg2: true})
    } else if (firstName === '' && lastName === '') {
      this.setState({showErrorMsg1: true, showErrorMsg2: true})
    } else if (firstName !== '' && lastName !== '') {
      this.setState({formSubmit: true})
    }
  }

  onClickingSubmitAnotherFormBtn = () => {
    this.setState({formSubmit: false})
  }

  render() {
    const {showErrorMsg1, showErrorMsg2, formSubmit} = this.state
    let inputStyling1
    if (showErrorMsg1) {
      inputStyling1 = 'input-highlight'
    }
    let inputStyling2
    if (showErrorMsg2) {
      inputStyling2 = 'input-highlight'
    }

    let display
    if (formSubmit === false) {
      display = (
        <form className="form-container" onSubmit={this.onSubmitForm}>
          <div className="first-container">
            <label htmlFor="first-name">FIRST NAME</label>
            <input
              id="first-name"
              type="text"
              className={`name-input ${inputStyling1}`}
              alt=""
              placeholder="First name"
              onBlur={this.onBlurFirstName}
            />
            {showErrorMsg1 && <p className="error-msg">Required</p>}
          </div>
          <div className="second-container">
            <label htmlFor="last-name">LAST NAME</label>
            <input
              id="last-name"
              type="text"
              className={`name-input ${inputStyling2}`}
              alt=""
              placeholder="Last name"
              onBlur={this.onBlurLastName}
            />
            {showErrorMsg2 && <p className="error-msg">Required</p>}
          </div>
          <div className="btn-container">
            <button type="submit">Submit</button>
          </div>
        </form>
      )
    } else if (formSubmit === true) {
      display = (
        <div className="success-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
            alt="success"
          />
          <p className="submit-msg">Submitted Successfully</p>
          <button type="button" onClick={this.onClickingSubmitAnotherFormBtn}>
            Submit Another Response
          </button>
        </div>
      )
    }

    return (
      <div className="main-container">
        <h1 className="main-heading">Registration</h1>
        {display}
      </div>
    )
  }
}

export default RegistrationForm

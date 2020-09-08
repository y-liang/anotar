import React, { Component } from 'react'
import { Popconfirm } from 'antd'

export class ContactModal extends Component {
  state = { isShown: false }

  handleToggle = () => {
    this.setState({ isShown: !this.state.isShown })
  }

  handleOk = e => {
    this.setState({
      isShown: false,
    });
  };

  handleCancel = e => {
    this.setState({
      isShown: false,
    });
  };

  render() {
    const label = this.state.isShown ? '...' : 'leave a note'
    return (
      <div>
        <Popconfirm placement="bottom" title={<ContactForm />} onConfirm={this.handleOk} okText="Yes" cancelText="No">

          <button className="Contact-button" onClick={this.handleToggle}>{label}</button>
        </Popconfirm>
      </div>
    )
  }
}


export class ContactForm extends Component {
  state = {
    fullName: '',
    emailAddress: '',
    visitorMessage: '',
    // isSubmitted: false,
  }

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = event => {
    event.preventDefault()
    alert(this.state.emailAddress)
    // this.setState({ isSubmitted: true }) /* no need to have this state when you have onClose */
    this.props.onClose() /* when submitted it calls this onClose function */
  }

  render() {
    // if (!this.state.isSubmitted) {
    return (
      <form className="Contact-form" onSubmit={this.handleSubmit} >
        <label>
          full name:
          <input className="Contact-input"
            name="fullName"
            type="text"
            value={this.state.fullName}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          email:
          <input className="Contact-input"
            name="emailAddress"
            type="email"
            value={this.state.emailAddress}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          message:
          <textarea
            name="visitorMessage"
            type="text"
            value={this.state.visitorMessage}
            onChange={this.handleInputChange} />
        </label>
        <input className="Contact-submitBtn" type="submit" value="submit" />
      </form>
    )
    // } else { return '' }
  }
}







/*
export class ModalButton extends Component {
  state = {
    modalShown: false,
  }

  handleToggle = () => {
    if (this.state.modalShown) {
      this.setState({ modalShown: false })
    } else {
      this.setState({ modalShown: true })
    }
    console.log(this.state.modalShown)
  }

  render() {
    return (
      <div>
        <button onClick={this.handleToggle}>leave a message</button>
        <ContactModal isShown={this.state.modalShown} />
      </div>
    )
  }
}

class ContactModal extends Component {
  state = {
    isShown: false,
    isSubmitted: false,
  }

  render() {
    const modalDisplayClass = this.state.isShown ? "modal display-block" : "modal display-none"
    return (
      <div className={modalDisplayClass} >
        <ContactForm />
      </div>
    );
  }
}
*/











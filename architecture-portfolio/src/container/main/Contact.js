import React, { Component } from 'react'
import { Drawer, Form, Button, Col, Row, Input } from 'antd'

import axios from 'axios'

export class ContactModal extends Component {
  state = {
    visible: false,
    name: '',
    email: '',
    message: '',
  }

  showDrawer = () => {
    this.setState({
      visible: true,
    })
  }

  onClose = () => {
    this.setState({
      visible: false,
    })
  }

  handleChange = e => {

    this.setState({
      [e.target.name]: e.target.value
    });
    // console.log(e.target.value);
  }

  handleSubmit = e => {
    axios.post(
      "https://formcarry.com/s/BROmfOUjnpj",
      this.state,
      { headers: { "Accept": "application/json" } }
    )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    e.preventDefault();
    // alert(this.state.email)
    this.onClose() /* when submitted it calls this onClose function */
  }


  render() {
    return (
      <div className="contact-section">
        <Button className="button-message" type="link" onClick={this.showDrawer}>
          let's talk
        </Button>
        <Drawer title="." width={720}
          onClose={this.onClose} visible={this.state.visible}
          placement="bottom">
          <form className="contact-form" onSubmit={this.handleSubmit} noValidate>
            <input className="contact-input contact-question" id="nme"
              type="text" name="name" required autoComplete="off"
              onChange={this.handleChange} />
            <label className="contact-label" htmlFor="nme">
              <span className="contact-span">hi, what's your name?</span>
            </label>
            <input className="contact-input contact-question" id="eml"
              type="text" name="email" required autoComplete="off"
              onChange={this.handleChange} />
            <label className="contact-label" htmlFor="eml">
              <span className="contact-span">and your email?</span>
            </label>
            <textarea className="contact-textarea contact-question" id="msg"
              name="message" rows="2" required autoComplete="off"
              onChange={this.handleChange}></textarea>
            <label className="contact-label" htmlFor="msg">
              <span className="contact-span">leave a message here...</span>
            </label>
            <input className="contact-input"
              type="reset" value="clear" />
            <input className="contact-input"
              type="submit" value="okay" />
            <input type="hidden" name="_gotcha" />
          </form>
        </Drawer>
      </div>
    )
  }
}







// class DrawerForm extends Component {
//   state = {
//     visible: false,
//     name: '',
//     email: '',
//     note: '',
//   }

//   showDrawer = () => {
//     this.setState({
//       visible: true,
//     })
//   }

//   onClose = () => {
//     this.setState({
//       visible: false,
//     })
//   }

//   handleChange = event => {
//     const target = event.target;
//     const value = target.value;
//     const name = target.name;
//     this.setState({
//       [name]: value
//     });
//     console.log(value);
//   }

//   handleCancel = () => {
//     this.setState({
//       name: '',
//       email: '',
//       note: '',
//     })
//     this.props.form.setFieldsValue({
//       name: '',
//       email: '',
//       note: '',
//     })
//     this.onClose()
//   }

//   handleSubmit = event => {
//     event.preventDefault()
//     // alert(this.state.email)
//     this.props.form.validateFields((err, values) => {
//       if (!err) {
//         console.log('Received values of form: ', values)
//         this.onClose() /* when submitted it calls this onClose function */
//       }
//     })
//   }


//   render() {
//     const { getFieldDecorator } = this.props.form;
//     return (
//       <div className="contact-section">
//         <Button className="button-message" type="link" onClick={this.showDrawer}>
//           let's talk
//         </Button>
//         <Drawer
//           title="."
//           width={720}
//           onClose={this.onClose}
//           visible={this.state.visible}
//           placement="bottom"
//         >
//           <Form layout="vertical" hideRequiredMark action="https://formspree.io/antipodally@gmail.com" method="POST">
//             <Form.Item label="">
//               {getFieldDecorator('name', {
//                 rules: [{ required: true, message: 'please enter your name' }],
//               })(<Input type="text" name="name" placeholder="hi, what is your name?" onChange={this.handleChange} />)}
//             </Form.Item>
//             <Form.Item label="">
//               {getFieldDecorator('email', {
//                 rules: [{ required: true, message: 'please enter your email' }],
//               })(<Input type="email" name="_replyto" style={{ width: '100%' }} placeholder="and your email address?" onChange={this.handleChange} />,
//               )}
//             </Form.Item>
//             <Form.Item label="">
//               {getFieldDecorator('note', {
//                 rules: [{ required: true, message: 'please write a message' }],
//               })(<Input.TextArea type="text" name="note" rows={4} placeholder="leave a note here..." onChange={this.handleChange} />)}
//             </Form.Item>
//             <div className="drawer-footer" >
//               <Button onClick={this.handleCancel} style={{ opacity: 0.5 }}>
//                 cancel
//               </Button>
//               {/* <Button onClick={this.handleSubmit} type="submit">
//                 okay
//               </Button> */}
//               <input onClick={this.handleSubmit} type="submit" value="okay" />
//               <input type="hidden" name="_next" value="https://yliang.net" />
//             </div>
//           </Form>
//         </Drawer>
//       </div>
//     )
//   }
// }

// export const ContactModal = Form.create()(DrawerForm)








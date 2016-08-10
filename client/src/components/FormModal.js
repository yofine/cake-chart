import React, { Component, PropTypes } from 'react'
import { Button, Form, Input, Modal } from 'antd';
const createForm = Form.create;
const FormItem = Form.Item;

class FormModal extends Component {

  constructor(props, context) {
    super(props, context)
    this.showModal = this.showModal.bind(this)
    this.hideModal = this.hideModal.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      visible: false
    }
  }

  handleSubmit() {
    const { handleSubmit, form } = this.props
    handleSubmit(form.getFieldsValue())
  }

  showModal() {
    this.setState({ visible: true })
  }

  hideModal() {
    this.setState({ visible: false })
  }

  render() {
    const { getFieldProps } = this.props.form;

    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 20 },
    };
    return (
      <div className={this.props.buttonWrapClass} style={{display: 'inline-block'}}>
        <Button
          type={this.props.buttonType || "primary"}
          onClick={this.showModal}
        >
          {this.props.buttonText}
        </Button>
          <Modal
            title={this.props.modalTitle}
            visible={this.state.visible}
            onOk={this.handleSubmit}
            onCancel={this.hideModal}
          >
            {this.props.renderForm(this.props.form, getFieldProps, this)}
          </Modal>
      </div>
    )
  }
}

export default createForm()(FormModal)

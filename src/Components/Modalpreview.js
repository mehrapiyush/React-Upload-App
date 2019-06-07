import React , {Component} from 'react';
import { Modal} from 'antd';


class Modalpreview extends Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        <img
            width = "100"
            src= {this.props.URL}
            onClick={this.showModal}
            alt="no image"
          />
        <Modal
          title="File Preview"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <img src = {this.props.URL} width = "450px" />
        </Modal>
      </div>
    );
  }
}
export default Modalpreview;

import React , {Component} from 'react';
import './imagedialog.css';
export default class ImageComponent extends Component {
    constructor(props){
        super(props);
    }
    state = { isOpen: false };
  
    handleShowDialog = () => {
      this.setState({ isOpen: !this.state.isOpen });
      console.log('cliked');
    };
  
    render() {
      return (
        <div>
          <img
            width = "100"
            style = {{position: 'revert'}}
            src= {this.props.URL}
            onClick={this.handleShowDialog}
            alt="no image"
          />
          {this.state.isOpen && (
            <dialog
              className="dialog"
              style={{ position: 'relative' }}
              open
              onClick={this.handleShowDialog}
            >
              <img
                className="image"
                src={this.props.URL}
                onClick={this.handleShowDialog}
                alt="no image"
              />
            </dialog>
          )}
        </div>
      );
    }
  }
/*
import React, { Component } from 'react';
import { Upload, Icon, message } from 'antd';

const Dragger = Upload.Dragger;
const props = {
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange(info) {
    const status = info.file.status;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};
class Uploadimage extends Component{

    render(){
          return(
              <Dragger {...props}>
                <p className="ant-upload-drag-icon">
                  <Icon type="inbox" />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">
                  Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                  band files
                </p>
              </Dragger>
            );
    }
}
export default Uploadimage;*/

/*import React from 'react';
import { Upload, Button, Icon } from 'antd';

const props = {
  action: '//jsonplaceholder.typicode.com/posts/',
  listType: 'picture',
  previewFile(file) {
    console.log('Your upload file:', file);
    // Your process logic. Here we just mock to the same file
    return fetch('https://next.json-generator.com/api/json/get/4ytyBoLK8', {
      method: 'POST',
      body: file,
    }).then(res => res.json()).then(({ thumbnail }) => thumbnail);
  },
};

function Uploadimage(){
  return (
    <div>
      <Upload {...props} >
        <Button>
          <Icon type="upload" /> Upload
        </Button>
      </Upload>
    </div>
  );
}
export default Uploadimage;*/
import React , {Component} from 'react';
import Cardpreview from './Cardpreview';
import Contentpreview from './Contentpreview';


class Uploadimage extends Component {
  constructor(props){
    super(props);
  }
  state = {
    imags : null
  }
  _onChange = event => {
    if(event.target.files.length >= 1) {
      this.setState({
            imgs: event.target.files
      }) 
    }
    else{
      this.setState({
        imgs : this.state.imgs
      })
    }
}
  render() {
    return (
      <div>
        <input type = "file" multiple onChange={this._onChange} />
          <div className = "UD">
              {this.state.imgs && [...this.state.imgs].map((file)=>( 
                <Cardpreview URL = {URL.createObjectURL(file)} fileName = {file.name}/>
        ))}
        </div>
      </div>
    );
  }
}
export default Uploadimage;


/*
import React , {Component} from 'react';
import { Upload, Button, Icon } from 'antd';

class Uploadimage extends Component {
  state = {
    fileList: [
      {
        uid: '-1',
        name: null,
        status: 'done',
        url: null
      },
    ],
  };

  handleChange = info => {
    let fileList = [...info.fileList];

    // 1. Limit the number of uploaded files
    // Only to show two recent uploaded files, and old ones will be replaced by the new
    fileList = fileList.slice(-2);

    // 2. Read from response and show file link
    fileList = fileList.map(file => {
      if (file.response) {
        // Component will show file.url as link
        file.url = file.response.url;
      }
      return file;
    });

    this.setState({ fileList : fileList });
  };

  render() {
    const props = {
      action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
      onChange: this.handleChange,
      multiple: true,
    };
    return (
      <div>
        <Upload {...props}>
          <Button>
            <Icon type="upload" /> Upload
          </Button> 
        </Upload>
       
       </div>

    );
  }
}
export default Uploadimage;*/
/*
import React , {Component} from 'react';
import { Upload, Icon, Modal } from 'antd';
import './image.css';

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

class UploadImage extends Component {
  state = {
    previewVisible: false,
    previewImage: null,
    fileList: [
      {
        uid: '-1',
        name: null,
        status: 'done',
        url: null
      },
    ],
  };

  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    this.setState({
      previewImage: file.url || file.preview,
      previewVisible: true,
    });
  };

  handleChange = ({ fileList }) => this.setState({ fileList });

  render() {
    const { previewVisible, previewImage, fileList } = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <div className="clearfix" style = "">
        <Upload className
          action=""
          listType="picture-card"
          fileList={fileList}
          onPreview={this.handlePreview}
          onChange={this.handleChange}
        >
          {fileList.length >= 5 ? null : uploadButton}
        </Upload>
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="example" style={{ width: '200%' }} src={previewImage} />
        </Modal>
      </div>
    );
  }
}
export default UploadImage;
*/

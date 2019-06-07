import React, { Component } from 'react';
import { Card } from 'antd';
import Modalpreview from './Modalpreview';

class Cardpreview extends Component{
  render(){
    return(
      <div style={{ background: '#ECECEC', padding: '30px' }}>
        <Card title = {this.props.fileName} bordered={false} style={{ width: 300 }}>
          <Modalpreview URL = {this.props.URL} />
        </Card>
      </div>
    );
  }
}
export default Cardpreview;
import React from 'react';
import { Card } from 'antd';
function Contentpreview(){
  return(
    <div style={{ background: '#ECECEC', padding: '30px' }}>
        <Card title="Card title" bordered={false} style={{ width: 300 }}>
        <p>Name : xxxx</p>
        <p>Address : xxxx</p>
        <p>Aadhar: xxxx</p>
        </Card>
    </div>
    );
}
export default Contentpreview;
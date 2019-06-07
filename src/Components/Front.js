/*import React from 'react';
import { Button } from 'antd';
import {BrowserRouter , Route , Link} from 'react-router-dom';
import './btn.css';
import Uploadimage from './Uploadimage';
function front(){
    return (
        <BrowserRouter>
        <div className = "btn-group">
            <Button>
            </Button>
            <Button >
                <Link to = "/ImageRecognition/UploadImage">Vehicle Inspection</Link>
            </Button>
       </div>
       <Route exact path = "/ImageRecognition/UploadImage" component = {Uploadimage} />
       </BrowserRouter>
    );
}
export default front;*/
import React from 'react';
import { Tabs, Comment } from 'antd';
import {BrowserRouter} from 'react-router-dom';
import Uploadimage from './Uploadimage';
const { TabPane } = Tabs;


function callback(key) {
  console.log(key);
}
function Front(){
        return (
    <BrowserRouter>
            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="Dent Detection"  key="1">
                <Uploadimage />
                </TabPane>
                <TabPane tab="Vehicle Inspection" key="2">
                <Uploadimage />
                </TabPane>
            </Tabs>
    </BrowserRouter>
    );
}
export default Front;
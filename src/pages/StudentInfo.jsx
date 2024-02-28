import React, {Component} from 'react';
import {Route, Routes} from "react-router-dom";

class StudentInfo extends Component {

    render() {
        debugger
        return (
            <div>
                <h2>学生信息</h2>
                {/*没必要遍历所有，App传值就行*/}
                <Routes>
                    <Route path="/studentInfo" element={<Student/>}>
                    </Route>
                </Routes>
            </div>
        );
    }
}

class Student extends Component{
    render() {
        return (
            <div>
                <h2>这里是学生信息</h2>
            </div>
        );
    }
}

export default StudentInfo;
import React, {Component} from 'react';
import axios from 'axios'

class StudentInfo extends Component {

    state = { // 学生状态，传递给student
        stuId: window.location.href.split("http://localhost:3000/studentInfo/?stuid=")[1],
        student: {
            age: '',
            avatar: '',
            id: '',
            name: ''
        },
        isFirst: true
    }

    // axios
    getStu = () => {
        const {stuId} = this.state
        axios.get('http://localhost:8848/stu/?id=' + stuId).then(
            response => {
                this.setState({student: response.data})
                this.setState({isFirst: false})
            },
            error => {
                if (this.state.isFirst) {
                    return
                }
                alert('获取数据失败' + error.message)
            }
        )
    }

    render() {
        this.getStu();
        const {student, isFirst} = this.state
        return (
            <div>
                {
                    isFirst ? <h2>请点击照片墙的学生照片以查询该学生信息</h2> :
                        <div>
                            <h2>学生信息</h2>
                            <h2>name: {student.name}</h2>
                            <h2>age: {student.age}</h2>
                            <h2>id: {student.id}</h2>
                            <h2>avatar: {student.avatar}</h2>
                        </div>
                }

            </div>
        );
    }
}

export default StudentInfo;
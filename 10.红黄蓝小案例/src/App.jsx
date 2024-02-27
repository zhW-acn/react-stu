import React, {Component} from 'react';
import MyDiv from "./components/MyDiv";
import MyButton from "./components/MyButton";
class App extends Component {
    state = {
        btnColor: '',
        divColor: ''
    }

    changeDivColor(color) {
        this.setState({divColor: color})
    }

    render() {
        let {divColor} = this.state
        return (
            <>
                <MyDiv divColor={divColor}/>
                <MyButton btnColor="red" changeDivColor={() => this.changeDivColor('red')}/> <br/>
                <MyButton btnColor="yellow" changeDivColor={() => this.changeDivColor('yellow')}/> <br/>
                <MyButton btnColor="blue" changeDivColor={() => this.changeDivColor('blue')}/> <br/>
            </>
        );
    }
}

export default App;
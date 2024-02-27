import React, {Component} from 'react';

class MyButton extends Component {

    change = () => {
        const {changeDivColor,btnColor} = this.props
        changeDivColor(btnColor)
    }

    render() {
        const {btnColor} = this.props
        console.log(btnColor,typeof btnColor)
        return (
                <button style={{backgroundColor:btnColor}} onClick={this.change}>
                    change
                </button>
        );
    }
}

export default MyButton;
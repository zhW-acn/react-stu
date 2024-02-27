import React, {Component} from 'react';

class MyDiv extends Component {

    render() {
        const {divColor} = this.props
        return (
            <div style={{backgroundColor: divColor}}>
                这是一个div
            </div>
        );
    }
}

export default MyDiv;
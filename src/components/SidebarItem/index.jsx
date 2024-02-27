import React, {Component} from 'react';

class SidebarItem extends Component {

    changeItemPoint = () => {
        const {name, updateItemPoint} = this.props
        updateItemPoint(name)
    }

    render() {
        const {name, itemPoint} = this.props
        return (
            <li style={{textAlign: 'center'}} onClick={this.changeItemPoint}>
                {/*判断当前选中的Item*/}
                <span style={itemPoint === name ? {backgroundColor: 'red'} : {}}>{name}</span>
            </li>
        );
    }
}

export default SidebarItem;
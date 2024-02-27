import React from 'react';

function App_useState() {
    // React.useState(0)：初始化状态为0
    // sum：获得状态
    // setSum：获得更新状态的方法
    const [sum, setSum] = React.useState(0)

    function upd(event){
        // setSum(event.keyCode.value)
        // 标准写法 传入函数，返回值为新的状态
        setSum(sum => event.keyCode.value)
    }
    return (
        <div>
            <h2>{sum}</h2>
            <input type="text" name="" id="" onKeyUp={upd}/>
        </div>
    );
}

export default App_useState;
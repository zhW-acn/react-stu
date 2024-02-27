import React from 'react';

function App_useRef(props) {
    const inp = React.useRef()
    // 与React.createRef()没有区别

    function getInp() {
        alert(inp.current.value)
    }

    return (
        <div>
            <input type="text" ref={inp}/>
            {/*回调形式*/}
            {/*<input type="text" ref={c => inp = c}/>*/}
            <button onClick={getInp}>点我获取值</button>
        </div>
    );
}

export default App_useRef;
import React from 'react';

function App_useEffect(props) {

    /*
    语法说明：
    React.useEffect( ()=> {
        // 监测数组中的状态发生改变
        ...
        return () => { // 组件卸载前执行该回调
        }
    }, []) // 监测数组，里面存放useState创建的值。
    如果缺省表示只要useState的值改变，就会调用effect
    如果是空数组表示不监测
     */

    const [sum, setSum] = React.useState(0);
    const [num, setNum] = React.useState(0);
    const [isShow, setIsShow] = React.useState(true);

    const effect1 = () => {
        console.log('sum或num发生改变')
    }
    const effect2 = () => {
        console.log('num发生改变')
    }
    const effect3 = () => {
        console.log('sum发生改变')
    }
    const effect4 = () => {
        console.log('isShow初始化或sum将要被卸载')
        return () => {
            console.log('sum卸载')
        }
    }


    React.useEffect(effect1)// 没有指定state，初始化和所有state变化都会调用该方法
    React.useEffect(effect2, [num])// 使用数组指定state，初始化和只有当检测数组里的state发生变化才会调用该方法
    React.useEffect(effect3, [sum])
    React.useEffect(effect4, [isShow])


    function inp(event) {
        setNum(num => Number.parseInt(event.key))
        event.target.value = ''
    }

    function doClick() {
        setSum(sum => sum + num)
    }

    function doUninstall() {
        setIsShow(isShow => false)
    }

    return (
        <div>
            {isShow ?
                <h2>sum:{sum}</h2> :
                <h2>sum被移除了</h2>
            }
            <h2>num:{num}</h2>
            <input type="text" onKeyUp={inp}/>
            <button onClick={doClick}>点我加</button>
            <button onClick={doUninstall}>卸载组件sum</button>
        </div>
    );
}

export default App_useEffect;
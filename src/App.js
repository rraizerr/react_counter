import { useState } from 'react';

import './App.css';

const App = (props) => {

    const [counter, setCounter] = useState(props.counter)

    function incCounter(i) {
        if (counter < props.max) {
            setCounter(counter => counter + i);
        }
    }

    function decCounter(i) {
        if (counter > props.min) {
            setCounter(counter => counter + i);
        }
    }

    function rndCounter() {
        let random = Math.floor(Math.random() * (props.max - props.min + 1)) + props.min;
        setCounter(random)
    }

    function resetCounter() {
        setCounter(props.counter)
    }

    return (
        <div className="app">
            <div className="counter">{counter}</div>
            <div className="controls">
                <button onClick={() => incCounter(1)}>INC</button>
                <button onClick={() => decCounter(-1)}>DEC</button>
                <button onClick={rndCounter}>RND</button>
                <button onClick={resetCounter}>RESET</button>
            </div>
        </div>
    )
}


export default App;

// 1) Начальное значение счетчика должно передаваться через props
// 2) INC и DEC увеличивают и уменьшают счетчик соответственно на 1. 
//    Без ограничений, но можете добавить границу в - 50 / 50. 
//    По достижению границы ничего не происходит
// 3) RND изменяет счетчик в случайное значение от -50 до 50. 
//    Конструкцию можете прогуглить за 20 секунд:) Не зависит от 
//    предыдущего состояния
// 4) RESET сбрасывает счетчик в 0 или в начальное значение из пропсов. 
//    Выберите один из вариантов
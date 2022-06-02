import { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: this.props.counter,
      max: this.props.max,
      min: this.props.min
    }
  }
  
  incCounter = () => {
    if (this.state.counter < this.state.max) {
      this.setState(state => ({
      counter: state.counter + 1
    }))
    }
  }

  decCounter = () => {
    if (this.state.counter > this.state.min) {
      this.setState(state => ({
      counter: state.counter - 1
    }))
    }
  }

  rndCounter = () => {
    let random = Math.floor(Math.random() * (this.state.max - this.state.min + 1)) + this.state.min;
    this.setState(state => ({
      counter: state.counter = random
    }))
  }

  resetCounter = () => {
    this.setState(state => ({
      counter: state.counter = this.props.counter
    }))
  }

  // Используйте только стрелочную форму методов
  // Почему? Подробный ответ будет в следующем уроке
  
  render() {
    return (
      <div className="app">
        <div className="counter">{this.state.counter}</div>
        <div className="controls">
          <button onClick={this.incCounter}>INC</button>
          <button onClick={this.decCounter}>DEC</button>
          <button onClick={this.rndCounter}>RND</button>
          <button onClick={this.resetCounter}>RESET</button>
        </div>
      </div>
    )
  }
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
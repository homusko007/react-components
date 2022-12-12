import React from 'react';
import style from './ClassComponent.module.css';
import PropTypes from 'prop-types';

export class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 'Результат',
      win: false,
      userNumber: '',
      randomNumber:
        Math.floor(Math.random() * this.props.max - this.props.min) +
        this.props.min,
      count: 0,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState(state => ({
      count: state.count + 1,
    }));

    this.setState(state => {
      if (!state.userNumber) {
        return {
          result: `Введите число`
        };
      }

      if (state.userNumber > state.randomNumber) {
        return {
          result: `${state.userNumber} больше загаданного`,
        };
      }

      if (state.userNumber < state.randomNumber) {
        return {
          result: `${state.userNumber} меньше загаданного`,
        };
      }

      return {
        result: `Вы угадали! Загаданное число ${state.userNumber} 
        попыток ${state.count}`,
        win: true,
      };
    });

    this.setState(state => ({
      userNumber: '',
    }));
  };

  handleChange = e => {
    this.setState((state, props) => ({
      userNumber: e.target.value,
    }));
  };

  startNewGame = e => {
    this.setState(state => ({
      result: 'Результат',
      win: false,
      userNumber: '',
      randomNumber:
        Math.floor(Math.random() * this.props.max - this.props.min) +
        this.props.min,
      count: 0,
    }));
  };

  render() {
    if (!this.state.win) {
      return (
        <div className={style.game}>
          <p className={style.result}>{this.state.result}</p>

          <form className={style.form} onSubmit={this.handleSubmit}>
            <label className={style.label} htmlFor='user_number'>
              Угадай число
            </label>

            <input className={style.input} type='number' id='user_number'
              onChange={this.handleChange} value={this.state.userNumber} />

            <button className={style.btn}>Угадать</button>
          </form>
        </div>);
    } else {
      return (
        <div className={style.game}>
          <p className={style.result}>{this.state.result}</p>
          <button className={style.btn} onClick={this.startNewGame}>
            Начать заново
          </button>
        </div>
      );
    }
  }
}

ClassComponent.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
};

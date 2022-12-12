import {useState} from 'react';
import style from './FuncComplex.module.css';
import PropTypes from 'prop-types';

export const FuncComplex = ({min, max}) => {
  const [state, setState] = useState({
    userNumber: '',
    count: 0,

  });
  const [result, setResult] = useState('Результат');
  const [randomNumber] = useState(
    Math.floor(Math.random() * (max - min + 1)) + min
  );

  const handleSubmit = e => {
    e.preventDefault();

    setState((prevState) => ({...state, count: prevState.count + 1}));

    setResult(() => {
      if (!state.userNumber || state.userNumber < min ||
         state.userNumber > max) {
        return `Введите число от ${min} до ${max}`;
      }

      if (state.userNumber > randomNumber) {
        return `${state.userNumber} больше загаданногочисла`;
      }

      if (state.userNumber < randomNumber) {
        return `${state.userNumber} меньше загаданногочисла`;
      }

      return `Вы угадали. Загаданное число ${state.userNumber}`;
    });
  };

  const handleChange = e => {
    setState({...state, userNumber: e.target.value});
  };

  console.log('rn:', randomNumber);

  return (
    <div className={style.game}>
      <p className={style.result}>{result}</p>
      <form className={style.form} onSubmit={handleSubmit}>
        <label className={style.label} htmlFor='user_number'>
          Попыток {state.count}
        </label>
        <input className={style.input}
          type='number'
          id='user_number'
          value={state.userNumber}
          onChange={handleChange} />
        <button className={style.btn}>Угадать</button>
      </form>
    </div>
  );
};

FuncComplex.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
};

import {useState, useEffect} from 'react';
import style from './FuncComponent.module.css';
import PropTypes from 'prop-types';

export const FunctionalComponent = ({min, max}) => {
  const [userNumber, setUserNumber] = useState('');
  const [result, setResult] = useState('Результат');
  const [count, setCount] = useState(0);
  const [randomNumber, setRandomNumber] = useState(0);
  const [finish, setFinish] = useState(false);


  /* const randomNumber = useMemo(() => {
    setFinish(false);
    return (Math.floor(Math.random() * (max - min + 1)) + min);
  }, [finish]); // если есть тяжелые расчеты*/

  useEffect(() => {
    setRandomNumber(Math.floor(Math.random() * (max - min + 1)) + min);
    setFinish(false);
  }, [finish]); // как только finish станет true, запустится перерендер

  useEffect(() => {
    setFinish(false); // возвращаем finish в первоначальное состояние
  }, [randomNumber]);

  const handleSubmit = e => {
    e.preventDefault();

    setCount(prevCount => prevCount + 1); // Если в setStase есть зависимость
    // от предыдущего состояния, тогда обязательно используем функцию

    setResult(() => {
      if (!userNumber || userNumber < min || userNumber > max) {
        return `Введите число от ${min} до ${max}`;
      }

      if (userNumber > randomNumber) {
        return `${userNumber} больше загаданногочисла`;
      }

      if (userNumber < randomNumber) {
        return `${userNumber} меньше загаданного числа`;
      }
      setFinish(true);
      return `Вы угадали. Загаданное число ${userNumber}`;
    });
  };

  const handleChange = e => {
    setUserNumber(e.target.value);
  };

  console.log('rn:', randomNumber);

  return (
    <div className={style.game}>
      <p className={style.result}>{result}</p>
      <form className={style.form} onSubmit={handleSubmit}>
        <label className={style.label} htmlFor='user_number'>
          Попыток {count}
        </label>
        <input className={style.input}
          type='number'
          id='user_number'
          value={userNumber}
          onChange={handleChange} />
        <button className={style.btn}>Угадать</button>
      </form>
    </div>
  );
};

FunctionalComponent.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
};

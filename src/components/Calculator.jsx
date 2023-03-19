import { useState } from 'react';
import Operator from './Operator';
import Num from './Num';
import Equal from './Equal';
import Display from './Display';
import styles from './Calculator.module.css';

export default function Calculator() {
  const [text, setText] = useState('');

  return (
    <div className={styles.calculator}>
      <div>
        <Display text={text} />
      </div>
      <div>
        <Operator text="AC" setText={setText} />
        <Operator text="DE" setText={setText} />
        <Operator text="." setText={setText} />
        <Operator text="/" setText={setText} />
      </div>
      <div>
        <Num text="7" setText={setText} />
        <Num text="8" setText={setText} />
        <Num text="9" setText={setText} />
        <Operator text="*" setText={setText} />
      </div>
      <div>
        <Num text="4" setText={setText} />
        <Num text="5" setText={setText} />
        <Num text="6" setText={setText} />
        <Operator text="-" setText={setText} />
      </div>
      <div>
        <Num text="1" setText={setText} />
        <Num text="2" setText={setText} />
        <Num text="3" setText={setText} />
        <Operator text="+" setText={setText} />
      </div>
      <div>
        <Num text="00" setText={setText} />
        <Num text="0" setText={setText} />
        <Equal text="=" setText={setText} />
      </div>
    </div>
  );
}

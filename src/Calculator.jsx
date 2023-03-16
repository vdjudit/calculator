import Operator from './Operator';
import Num from './Num';
import Equal from './Equal';
import Display from "./Display"
import styles from './Calculator.module.css';

export default function Calculator() {
  return (
    <div className={styles.calculator}>
      <div>
        <Display/>
      </div>
      <div>
        <Operator text="AC" />
        <Operator text="DE" />
        <Operator text="." />
        <Operator text="/" />
      </div>
      <div>
        <Num text="7" />
        <Num text="8" />
        <Num text="9" />
        <Operator text="*" />
      </div>
      <div>
        <Num text="4" />
        <Num text="5" />
        <Num text="6" />
        <Operator text="-" />
      </div>
      <div>
        <Num text="1" />
        <Num text="2" />
        <Num text="3" />
        <Operator text="+" />
      </div>
      <div>
        <Num text="00" />
        <Num text="0" />
        <Equal text="=" />
      </div>
    </div>
  );
}

import styles from './Operator.module.css';

export default function Operator({ text }) {
  return <input type="button" value={text} className={styles.operator} />;
}

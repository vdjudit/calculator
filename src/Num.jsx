import styles from './Num.module.css';

export default function Num({ text }) {
  return <input type="button" value={text} className={styles.num} />;
}

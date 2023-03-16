import styles from './Equal.module.css';

export default function Equal({ text }) {
  return <input type="button" value={text} className={styles.equal} />;
}

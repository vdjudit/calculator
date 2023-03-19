import styles from './Display.module.css';

export default function Display({ text }) {
  return (
    <div className={styles.display}>
      <input type="text" name="display" className={styles.input} value={text} />
    </div>
  );
}

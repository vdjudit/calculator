import styles from './Display.module.css';

export default function Display() {
  return (
    <div className={styles.display}>
      <input type="text" name="display" className={styles.input} />
    </div>
  );
}

import styles from './Equal.module.css';

export default function Equal({ text, setText }) {
  return (
    <input
      type="button"
      value={text}
      className={styles.equal}
      onClick={() => {
        setText((t) => {
          return eval(display.value);
        });
      }}
    />
  );
}

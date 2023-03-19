import styles from './Num.module.css';

export default function Num({ text, setText }) {
  return (
    <input
      type="button"
      value={text}
      className={styles.num}
      onClick={() => {
        setText((t) => (t += text));
      }}
    />
  );
}

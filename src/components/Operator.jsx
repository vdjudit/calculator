import styles from './Operator.module.css';

export default function Operator({ text, setText }) {
  return (
    <input
      type="button"
      value={text}
      className={styles.operator}
      onClick={() => {
        setText((t) => {
          if (text === 'AC') {
            return '';
          } else if (text === 'DE') {
            return t.toString().slice(0, -1);
          } else {
            return (t += text);
          }
        });
      }}
    />
  );
}

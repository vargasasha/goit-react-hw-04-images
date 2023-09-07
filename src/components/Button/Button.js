import styles from '../../css/styles.module.css'

export const Button = ({ loadMore }) => {
  return (
    <div>
      <button className={styles.Button} onClick={loadMore}>
        Load more
      </button>
    </div>
  );
};

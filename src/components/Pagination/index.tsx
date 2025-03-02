import styles from "./styles.module.scss";

interface PaginationProps {
  pageSize: number;
}

export default function Pagination({ pageSize }: PaginationProps) {
  return (
    <div className={styles.pagination}>
      <button>DoubleLeft</button>
      <button>Left</button>
      <div className={styles.pages}>
        {[...Array(pageSize).keys()].map((index) => (
          <button>{index + 1}</button>
        ))}
      </div>
      <button>Right</button>
      <button>DoubleRight</button>
    </div>
  );
}

import styles from "./styles.module.scss";

interface PaginationProps {
  pageSize: number;
  page: number;
  setPage: (page: number) => void;
  jumpStep?: number;
}

const defaultJumpStep = 2;

export default function Pagination({
  pageSize,
  page,
  setPage,
  jumpStep = defaultJumpStep,
}: PaginationProps) {
  const goToBackwardsPage = () => {
    setPage(page - jumpStep);
  };

  const goToForwardsPage = () => {
    setPage(page + jumpStep);
  };

  const goToPrevPage = () => {
    setPage(page - 1);
  };

  const goToNextPage = () => {
    setPage(page + 1);
  };

  const selectPage = (page: number) => {
    setPage(page);
  };

  const isBackwardsPageDisabled = page - jumpStep < 1;
  const isPrevPageDisabled = page <= 1;

  const isNextPageDisabled = page >= pageSize;
  const isForwardsPageDisabled = page + jumpStep > pageSize;

  return (
    <div className={styles.pagination}>
      <button onClick={goToBackwardsPage} disabled={isBackwardsPageDisabled}>
        DoubleLeft
      </button>
      <button onClick={goToPrevPage} disabled={isPrevPageDisabled}>
        Left
      </button>
      <div className={styles.pages}>
        {[...Array(pageSize).keys()].map((index) => (
          <button onClick={() => selectPage(index + 1)}>{index + 1}</button>
        ))}
      </div>
      <button onClick={goToNextPage} disabled={isNextPageDisabled}>
        Right
      </button>
      <button onClick={goToForwardsPage} disabled={isForwardsPageDisabled}>
        DoubleRight
      </button>
    </div>
  );
}

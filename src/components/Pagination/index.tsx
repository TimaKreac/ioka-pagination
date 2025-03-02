import classNames from "classnames";
import styles from "./styles.module.scss";

interface PaginationProps {
  pageSize: number;
  page: number;
  setPage: (page: number) => void;
  jumpStep?: number;
  loop?: boolean;
}

const defaultJumpStep = 2;

export default function Pagination({
  pageSize,
  page,
  setPage,
  jumpStep = defaultJumpStep,
  loop = false,
}: PaginationProps) {
  const goToPage = (page: number) => {
    let newPage = page;

    if (loop) {
      if (page < 1) {
        newPage = pageSize;
      } else if (page > pageSize) {
        newPage = 1;
      }
    } else {
      newPage = Math.min(Math.max(page, 1), pageSize);
    }

    setPage(newPage);
  };

  const goToBackwardsPage = () => {
    goToPage(page - jumpStep);
  };

  const goToForwardsPage = () => {
    goToPage(page + jumpStep);
  };

  const goToPrevPage = () => {
    goToPage(page - 1);
  };

  const goToNextPage = () => {
    goToPage(page + 1);
  };

  const selectPage = (page: number) => {
    goToPage(page);
  };

  const isBackwardsPageDisabled = !loop && page - jumpStep < 1;
  const isPrevPageDisabled = !loop && page <= 1;

  const isNextPageDisabled = !loop && page >= pageSize;
  const isForwardsPageDisabled = !loop && page + jumpStep > pageSize;

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
          <button
            className={classNames(styles.page, {
              [styles.active]: page === index + 1,
            })}
            onClick={() => selectPage(index + 1)}
          >
            {index + 1}
          </button>
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

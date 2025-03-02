import classNames from "classnames";
import { usePagination } from "../../hooks/usePagination";
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
  const {
    isBackwardsPageDisabled,
    isPrevPageDisabled,
    isNextPageDisabled,
    isForwardsPageDisabled,
    selectPage,
    goToNextPage,
    goToPrevPage,
    goToForwardsPage,
    goToBackwardsPage,
  } = usePagination({
    pageSize,
    page,
    setPage,
    jumpStep,
    loop,
  });

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

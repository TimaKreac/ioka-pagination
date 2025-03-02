interface UsePaginationProps {
  pageSize: number;
  page: number;
  setPage: (page: number) => void;
  jumpStep: number;
  loop: boolean;
}

export const usePagination = ({
  pageSize,
  page,
  setPage,
  jumpStep,
  loop,
}: UsePaginationProps) => {
  const isBackwardsPageDisabled = !loop && page - jumpStep < 1;
  const isPrevPageDisabled = !loop && page <= 1;

  const isNextPageDisabled = !loop && page >= pageSize;
  const isForwardsPageDisabled = !loop && page + jumpStep > pageSize;

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

  return {
    isBackwardsPageDisabled,
    isPrevPageDisabled,
    isNextPageDisabled,
    isForwardsPageDisabled,
    selectPage,
    goToNextPage,
    goToPrevPage,
    goToForwardsPage,
    goToBackwardsPage,
  };
};

import { ActivePage, List, PageItem } from "./Pagination.styles";

const Pagination = ({ numberOfPages, currentPage, setCurrentPage }) => {
  const pages = new Array(numberOfPages).fill(null).map((v, i) => i);

  const previousPage = () => {
    setCurrentPage((prev) => Math.max(0, prev - 1));
  };

  const nextPage = () => {
    setCurrentPage((prev) => Math.min(numberOfPages - 1, prev + 1));
  };

  if (pages.length > 6) {
    pages.splice(3, pages.length - 7);
    pages[3] = "...";
  }

  const pageItem = pages.map((page) => {
    if (page === currentPage) {
      return (
        <ActivePage key={page} onClick={() => setCurrentPage(prev => page)}>
          {page + 1}
        </ActivePage>
      );
    }

    if (pages.length > 6 && page === 3) {
      return <PageItem key={page}>{page + 1}</PageItem>;
    }

    return (
      <PageItem key={page} onClick={() => setCurrentPage((prev) => page)}>
        {page + 1}
      </PageItem>
    );
  });

  return (
    <List>
      <PageItem onClick={previousPage}>prev</PageItem>
      {pageItem}
      <PageItem onClick={nextPage}>next</PageItem>
    </List>
  );
};

export default Pagination;

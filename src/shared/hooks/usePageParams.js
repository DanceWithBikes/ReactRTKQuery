import { useSearchParams } from 'react-router-dom';

export const usePageParam = () => {
  const [params, setParams] = useSearchParams();

  const query = params.get('q') || 'stars:>1';
  const page = parseInt(params.get('page') || '1', 10);

  const setSubmittedQuery = (newQuery) => {
    const next = new URLSearchParams(params);
    next.set('q', newQuery);
    next.set('page', '1'); // reset Page to 1 after new Search
    setParams(next);
  };

  const setPage = (newPage) => {
    const next = new URLSearchParams(params);
    next.set('page', String(newPage));
    setParams(next);
  };

  return { query, page, setSubmittedQuery, setPage };
};
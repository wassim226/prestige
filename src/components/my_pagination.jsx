import { Link, useLocation } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';

function MyPagination(props) {
  const {path} = props;
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get('page') || '1', 10);
  return (
    <Pagination
      page={page}
      count={4}
      color="primary"
      renderItem={(item) => (
        <PaginationItem
          component={Link}
          to={`/${path}${item.page === 1 ? '' : `?page=${item.page}`}`}
          {...item}
        />
      )}
    />
  );
}

export default MyPagination;
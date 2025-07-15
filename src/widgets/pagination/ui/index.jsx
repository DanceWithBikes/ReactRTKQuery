import React from 'react';
import './index.less';
import MUIPagination from '@mui/material/Pagination';


export const Pagination = ({ page, setPage, totalCount }) => {
  if (!totalCount) return null;

  const handleChange = (_, val) => {
    setPage(val)
  }

  return (
    <MUIPagination
      className={'pagination'}
      page={page}
      count={Math.ceil(totalCount / 3)}
      onChange={handleChange}
      color='primary'
    />
  )
}
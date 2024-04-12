import {useState} from 'react';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function PageCard(props) {
  const {title, page, desc} = props;
  return (
    <Link to={`detail/${page}`}>
        <div className='flex flex-col justify-start items-center h-[40vh] px-3 my-4 line-clamp-4 text-ellipsis'>
            <Typography variant='h5'>{title}</Typography>
            <Typography variant='body' gutterBottom sx={{marginBottom: "4px"}} >{desc}</Typography>
        </div>
    </Link>
  )
}

export default PageCard
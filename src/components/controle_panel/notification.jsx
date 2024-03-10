import { Typography } from '@mui/material';
import {useState} from 'react'

function Notification(props) {
    const {data, className} = props;
  return (
    <div className={`flex flex-row ${className}`}>
        <div></div>
        <div className={`flex flex-col`}>
            <Typography variant="subtitle1" sx={{fontWeight: '600'}}>{data.title}</Typography>
            <p className={` text-xs font-normal max-w-52 truncate`}>{data.desc}</p>
            <Typography variant="overline">{data.date}</Typography>
        </div>
    </div>
  )
}

export default Notification
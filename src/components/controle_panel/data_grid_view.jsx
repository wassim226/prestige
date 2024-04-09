import { Add } from '@mui/icons-material';
import {Toolbar, Tooltip, IconButton, Typography, Grid, Box, Paper} from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';

function DataGridView(props) {
    const {title, type, data} = props;
  return (
    <div className='flex flex-col w-full h-[85vh]'>
        <Toolbar
          className="flex flex-row justify-between"
          sx={{
            pl: { sm: 2 },
            pr: { xs: 1, sm: 1 },
          }}
        >
            <Typography
              variant="h6"
              id="tableTitle"
              component="div"
            >
              {title}
            </Typography>
            {
                type != "page" &&
                <Tooltip title={`Add ${type}`}>
                    <Link to="detail/new">
                      <IconButton onClick={null}>
                        <Add className='text-secondary' />
                      </IconButton>
                    </Link>
                </Tooltip>
            }
        </Toolbar>
        <Box sx={{ flexGrow: 1, margin:"0 20px" }}>
          <Grid container spacing={2}>
            {
                data.map((val, ind)=>{
                    return (
                    <Grid key={`ele_${ind}`} item xs={3}>
                        <Paper>xs=4</Paper>
                    </Grid>);
                })
            }
          </Grid>
        </Box>
    </div>
  )
}

export default DataGridView;
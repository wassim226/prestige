import { Add } from '@mui/icons-material';
import {Toolbar, Tooltip, IconButton, Typography, Grid, Box, Paper} from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import {ArticlePreview, PageCard, SpaPresentation} from '../../components';
import { default_description, navList } from '../../constantes';
import { Pool3 } from '../../assets';


function DataGridView(props) {
  const {title, type, data, id} = props;

  const ItemCard = (props)=>{
    const {type, values, id} = props;
    const spa = {
      mode:"edit", id:id, price:'50000', image:Pool3, title:"Lorem ipsum dolor sit amet", details:default_description,
    };
    switch(type){
      case "articale":
        return (<Paper className='flex flex-col relative'>
          <ArticlePreview mode={"edit"} id={id} className='swiper-slide' img={Pool3} title={values.title} description={values.extPresentation}/>
          </Paper>);
      case "page":
        return (<Paper className='flex flex-col relative'>
        <PageCard title={"Lorem ipsum dolor sit amet"} desc={default_description} page={values.page}/>
        </Paper>
      );
      case "spa":
        return (<SpaPresentation spa={spa}/>)
    }
  };
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
                      <ItemCard type={type} values={val} id={val.id}/>
                    </Grid>);
                })
            }
          </Grid>
        </Box>
    </div>
  )
}

export default DataGridView;
import {Fragment, useState, useEffect} from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {Skeleton} from '@mui/material';

export default function AsynchronousSelect(props) {
  const [open, setOpen] = useState(false);

  // useEffect(() => {
  //   let active = true;
  // }, []);

  return (
    <Autocomplete
      {...props.autoProps}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      // isOptionEqualToValue={(option, value) => option.title === value.title}
      // getOptionLabel={(option) => option.title}
      value={props.value ?? null}
      // options={options}
      // loading={loading}
      loadingText={
        <Fragment>
            {props.autoProps.loading ? 
            <div className='flex flex-col'>
                <Skeleton animation="wave" />
                <Skeleton animation="wave" />
                <Skeleton animation="wave" />
            </div>
            // <CircularProgress color="inherit" size={20} /> 
            : "Loading..."}
        </Fragment>}
      renderInput={(params) => {
        return (
        <TextField
          {...params}
          {...props.fieldProps}
        />
      )}}
    />
  );
}
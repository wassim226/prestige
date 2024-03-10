import React from 'react';
import {TextField, Autocomplete,InputAdornment } from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';
// import { useTranslation } from 'react-i18next';

function SearchInput(props) {
    const {options} = props;
    // const [_, i18n] = useTranslation("global");
  return (
    <div className={`flex flex-row w-full justify-start`}>
        <TextField size='small' placeholder={`${"search"}...`} className='w-[200px]'
                InputProps={{
                    startAdornment: (
                    <InputAdornment position="start">
                        <SearchOutlined className='text-dimWhite hover:text-primary'/>
                    </InputAdornment>
                    ),
                }}
            />
    </div>
  )
}

export default SearchInput
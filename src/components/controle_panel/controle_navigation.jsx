import {useState} from 'react';
import {Link } from "react-router-dom";
import AdbIcon from '@mui/icons-material/Adb';
import {Typography, Tooltip, IconButton } from '@mui/material';
import MyAccordation from '../accordation';
// import { teams, languages } from '../constantes';
// import { useTranslation } from 'react-i18next';
// import LanguageMenu from './menus/language';
// import { LanguageOutlined } from '@mui/icons-material';

function ControleNavigation() {
//   const [_, i18n] = useTranslation("global");
//   const [anchorLanguages, setAnchorLanguages] = useState(null);
  return (
    <div className='flex flex-col h-full'>
        <div className='flex flex-row py-5 text-white'>
            {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
            <Typography
                variant="h6"
                // noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                // fontFamily: 'monospace',
                fontWeight: 700,
                // letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                }}
            >
                Panneau de controle
            </Typography>
            {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
            <Typography
                variant="h5"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                }}
            > Panneau de controle
            </Typography>
        </div>
        <nav className='  w-[17.5vw]'>
            <ul className='text-dimWhite w-full'>
                <li>
                    <MyAccordation title={<span className='text-dimWhite'>{"Articles"}</span>}
                    content={
                        <ul>
                            <li className='text-dimWhite hover:text-white pb-3'>
                                <Link to="articales">{"blog"}</Link>
                            </li>
                            <li className='text-dimWhite hover:text-white'>
                                <Link to="articales">{"pages"}</Link>
                            </li>
                        </ul>
                    }/>  
                </li>
                <li className='hover:text-white'>
                    <Link to="spas" className='text-dimWhite hover:text-white p-4 text-lg'>{"Spas"}</Link>
                </li>
                <li className='hover:text-white'>
                    <Link to="message" className='text-dimWhite hover:text-white p-4 text-lg'>{"Messages"}</Link>
                </li>
                <li className='hover:text-white'>
                    <Link to="user" className='text-dimWhite hover:text-white p-4 text-lg'>{"Users"}</Link>
                </li>
            </ul>
        </nav>
        {/* <div className='flex flex-row w-full fixed bottom-0 py-5'>
            <Tooltip title={"language"}>
              <IconButton onClick={((event) => {
                setAnchorLanguages(event.currentTarget);
              })}>
                <LanguageOutlined className='text-dimWhite' sx={{fontSize:'32px'}} />
              </IconButton>
            </Tooltip>
            <LanguageMenu anchorLanguages={anchorLanguages} handleCloseLanguagesMenu={() => {setAnchorLanguages(null);}} languages={languages} />
        </div> */}
    </div>
  )
}

export default ControleNavigation;

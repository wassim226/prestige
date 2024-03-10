import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function MyAccordation(props) {
  return (
    <div>
        <Accordion sx={{ width: '100%', boxShadow:'none'}} disableGutters>
            <AccordionSummary
            sx={{backgroundColor:'#182740', boxShadow:'none', width: '100%'}}
            expandIcon={<ExpandMoreIcon className={`text-dimWhite`}/>}
            id="panel1bh-header"
            >
                <Typography sx={{ width: '80%'}} className={``}>
                    {props.title}
                </Typography>
            </AccordionSummary>
            <AccordionDetails className={`bg-secondary`}>
                {props.content}
            </AccordionDetails>
        </Accordion>
    </div>
  )
}

export default MyAccordation
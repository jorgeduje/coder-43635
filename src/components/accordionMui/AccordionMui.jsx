import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AccordionMui = () => {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Este es el primero</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           Esta es la parte que se muestra cuand abrimos
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>titulo 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           este es el segundo acordion
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>este es el tercero</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           aca iria la tercer descripcion
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default AccordionMui
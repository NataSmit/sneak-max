import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';

export default function Questions() {
  return (
    <Box sx={{py: 5, maxWidth: 1152, my: 0, mx: 'auto'}}>
      <Typography variant='h4' component='h1'sx={{color: 'rgba(68, 75, 88, 1)', marginBottom: 4}} >Часто задаваемые вопросы</Typography>
      <Accordion disableGutters>
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Вопрос 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disableGutters>
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Вопрос 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}

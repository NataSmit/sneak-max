import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import Title from "../../ui/Title/Title";

export default function Questions() {
  return (
    <Box sx={{ py: 5, maxWidth: 1152, my: 0, mx: "auto" }}>
      <Title>Часто задаваемые вопросы</Title>
      <Box sx={{ maxWidth: 880, my: 0, mx: "auto" }}>
        <Accordion
          disableGutters
          sx={{
            boxShadow: "none",
            borderTop: "1px solid black",
            borderBottom: "1px solid black",
            "&:first-of-type": { borderRadius: 0 },
            "&::before": { opacity: 0 },
          }}
        >
          <AccordionSummary
            expandIcon={<AddIcon fontSize="large" />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ my: 2 }}
          >
            <Typography
              variant="h6"
              sx={{ color: "rgba(68, 75, 88, 1)", fontWeight: 600 }}
            >
              Вопрос 1
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: "rgba(36, 36, 36, 0.5)" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          disableGutters
          sx={{
            boxShadow: "none",
            borderBottom: "1px solid black",
            "&:last-of-type": { borderRadius: 0 },
            "&::before": { opacity: 0 },
          }}
        >
          <AccordionSummary
            expandIcon={<AddIcon fontSize="large" />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ my: 2 }}
          >
            <Typography
              variant="h6"
              sx={{ color: "rgba(68, 75, 88, 1)", fontWeight: 600 }}
            >
              Вопрос 2
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: "rgba(36, 36, 36, 0.5)" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
}

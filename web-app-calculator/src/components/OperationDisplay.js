import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function OperationDisplay({ h, d }) {
  return (
    <>
      <Typography color="white">Current Calculation: </Typography>
      <Typography color="white">{d}</Typography>
      <Accordion className="accordion">
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Past Calculations: </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {h?.map((operation, index) => (
            <Typography key={index}>{operation}</Typography>
          ))}
        </AccordionDetails>
      </Accordion>
    </>
  );
}

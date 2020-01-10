import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { PrincipaisHabilidades, Frameworks, Infraestrutura } from "./ListaDeHabilidades";

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      width: "100%"
    },
    [theme.breakpoints.up('md')]: {
      width: "60%"
    },
    [theme.breakpoints.up('lg')]: {
      width: "40%"
    },
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
}));

export default () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            <strong>Especializado</strong>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <PrincipaisHabilidades />
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            <strong>Programação</strong>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Frameworks />
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            <strong>Infraestrutura</strong>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Infraestrutura />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};

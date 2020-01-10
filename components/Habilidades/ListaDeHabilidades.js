import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

import { principais, frameworks, infraestrutura } from "./habilidades";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: "inline"
  }
}));

export const PrincipaisHabilidades = () => {
  const classes = useStyles();
  // const date = new Date();
  // const year = date.getFullYear();
  return (
    <List className={classes.root}>
      {principais().map((principal, index) => {
        return (
          <ListItem alignItems="flex-start" key={index}>
            <ListItemAvatar>
              <Avatar alt={principal.titulo} src={principal.imagem} />
            </ListItemAvatar>
            <ListItemText
              primary={
                <>
                  <Typography color="textPrimary">
                    <strong>{principal.titulo}</strong>
                  </Typography>
                </>
              }
              secondary={
                <Typography
                  // component="span"
                  variant="body2"
                  // className={classes.inline}
                  color="textSecondary"
                >
                  {principal.descricao}
                </Typography>
              }
            />
            <Divider variant="inset" />
          </ListItem>
        );
      })}
    </List>
  );
};
export const Frameworks = () => {
  const classes = useStyles();
  // const date = new Date();
  // const year = date.getFullYear();
  return (
    <List className={classes.root}>
      {frameworks().map((framework, index) => {
        return (
          <ListItem alignItems="flex-start" key={index}>
            <ListItemAvatar>
              <Avatar alt={framework.titulo} src={framework.imagem} />
            </ListItemAvatar>
            <ListItemText
              primary={
                <>
                  <Typography color="textPrimary">
                    <strong>{framework.titulo}</strong>
                  </Typography>
                </>
              }
              secondary={
                <Typography
                  // component="span"
                  variant="body2"
                  // className={classes.inline}
                  color="textSecondary"
                >
                  {framework.descricao}
                </Typography>
              }
            />
            <Divider variant="inset" />
          </ListItem>
        );
      })}
    </List>
  );
}
export const Infraestrutura = () => {
  const classes = useStyles();
  // const date = new Date();
  // const year = date.getFullYear();
  return (
    <List className={classes.root}>
      {infraestrutura().map((framework, index) => {
        return (
          <ListItem alignItems="flex-start" key={index}>
            <ListItemAvatar>
              <Avatar alt={framework.titulo} src={framework.imagem} />
            </ListItemAvatar>
            <ListItemText
              primary={
                <>
                  <Typography color="textPrimary">
                    <strong>{framework.titulo}</strong>
                  </Typography>
                </>
              }
              secondary={
                <Typography
                  // component="span"
                  variant="body2"
                  // className={classes.inline}
                  color="textSecondary"
                >
                  {framework.descricao}
                </Typography>
              }
            />
            <Divider variant="inset" />
          </ListItem>
        );
      })}
    </List>
  );
}
// <ListItem alignItems="flex-start">
//   <ListItemAvatar>
//     <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
//   </ListItemAvatar>
//   <ListItemText
//     primary="Summer BBQ"
//     secondary={
//       <React.Fragment>
//         <Typography
//           component="span"
//           variant="body2"
//           className={classes.inline}
//           color="textPrimary"
//         >
//           to Scott, Alex, Jennifer
//         </Typography>
//         {" — Wish I could come, but I'm out of town this…"}
//       </React.Fragment>
//     }
//   />
// </ListItem>
// <Divider variant="inset" component="li" />
// <ListItem alignItems="flex-start">
//   <ListItemAvatar>
//     <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
//   </ListItemAvatar>
//   <ListItemText
//     primary="Oui Oui"
//     secondary={
//       <React.Fragment>
//         <Typography
//           component="span"
//           variant="body2"
//           className={classes.inline}
//           color="textPrimary"
//         >
//           Sandra Adams
//         </Typography>
//         {" — Do you have Paris recommendations? Have you ever…"}
//       </React.Fragment>
//     }
//   />
// </ListItem>

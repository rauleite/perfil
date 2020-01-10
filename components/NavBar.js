import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Slide from "@material-ui/core/Slide";
import Zoom from "@material-ui/core/Zoom";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import { useTheme } from "@material-ui/core";

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func
};

export default function HideAppBar(props) {
  const theme = useTheme();

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar
          color="primary"
          style={{ background: "transparent", boxShadow: "none" }}
        >
          <Toolbar>
            <Typography variant="h6" color="secondary">
              Raul Abreu Leite
            </Typography>
            <div style={{ flexGrow: 1 }}></div>
            <Zoom timeout={transitionDuration} in={true}>
              <Fab
                // size="small"
                target="_blank"
                href="https://www.linkedin.com/in/rauleite/"
                color="secondary"
              >
                <LinkedInIcon fontSize="large" />
              </Fab>
            </Zoom>
            &nbsp;
            <Zoom timeout={transitionDuration} in={true}>
              <Fab
                // size="small"
                target="_blank"
                href="https://www.github.com/rauleite/"
                color="secondary"
              >
                <GitHubIcon fontSize="large" />
              </Fab>
            </Zoom>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <Container>
        <Box my={2}>{props.children}</Box>
      </Container>
    </React.Fragment>
  );
}

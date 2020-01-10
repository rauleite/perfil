import React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Habilidades from "../components/Habilidades";
import MuiLink from "@material-ui/core/Link";
import { Button, useTheme, Zoom } from "@material-ui/core";
import {
  blue,
  green,
  red,
  lightBlue,
  lightGreen,
  deepPurple
} from "@material-ui/core/colors";

import NavBar from "../components/NavBar";

export default function Index() {
  return (
    <>
      <NavBar>
        <Box>
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            // style={{ color: blue.A400 }}
            // style={{ color: "#fff" }}
          >
            Desenvolvedor Javascript
          </Typography>
          <Habilidades />
        </Box>
      </NavBar>
    </>
  );
}

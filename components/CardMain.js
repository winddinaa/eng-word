import React from "react";
import PropTypes from "prop-types";

import { Box, Container } from "@mui/system";

const CardMain = ({ color, width, height, children }) => {
  return (
    <Box
      sx={{
        bgcolor: color,
        width: width,
        height: height,
      }}
    >
      <Container maxWidth="lg">{children}</Container>
    </Box>
  );
};

CardMain.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

CardMain.defaultProps = {
  color: "background.paper",
  width: "100vw",
  height: "100vh",
};

export default CardMain;

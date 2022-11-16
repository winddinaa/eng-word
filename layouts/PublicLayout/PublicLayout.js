import React from "react";

import Navbar from "components/layout/Navbar";

const PublicLayout = (props) => {
  return (
    <>
      {/* <Navbar /> */}
      <main>{props.children}</main>
    </>
  );
};

export default PublicLayout;

import React from "react";
import Container from "../../containers/container";

import FooterLinks from "./components/FooterLinks";
import FooterMenu from "./components/FooterMenu";

interface FooterTypes {}

const Footer = (props: FooterTypes): JSX.Element => {
  return (
    <React.Fragment>
      <Container>
        <footer>
          <FooterLinks />
          <FooterMenu />
        </footer>
      </Container>
    </React.Fragment>
  );
};

export default Footer;

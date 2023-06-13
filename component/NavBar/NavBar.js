import React from "react";

import styled from "styled-components";
import Link from "next/link";

export default function NavBar({ isSilver, children, href }) {
  return (
    <div className="linkContainer">
      <StyledLink
        className="link"
        issilver={isSilver ? "true" : "false"}
        href={href}
      >
        {children}
      </StyledLink>
    </div>
  );
}
const StyledLink = styled(Link)`
  background-color: ${(props) =>
    props.issilver === "true" ? "#4E4E4E" : "#E2DFDF"};
  color: black;
  text-decoration: none;
`;

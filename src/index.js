import React from "react";
import styled from "styled-components";

const Margin = styled.span`
  display: flex;
  height: ${({ margin }) =>
    typeof margin === "string" ? margin : `${margin}px`};
`;

function VerticalMargin(props) {

    return <Margin {...props} />;

}

export { VerticalMargin };
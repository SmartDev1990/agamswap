import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 96 96" {...props}>
      <image width="96" height="96" href="https://www.riceprotocol.org/img/eth.png" />
    </Svg>
  );
};

export default Icon;

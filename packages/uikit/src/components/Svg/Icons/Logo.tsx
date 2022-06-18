import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 198 199" {...props}>
      <image width="198" height="198" href="/images/Home/lunar-Bunny/Bunny@2x.png"/>
    </Svg>
  );
};

export default Icon;

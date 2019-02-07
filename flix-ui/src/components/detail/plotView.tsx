import * as React from "react";
import { PlotWrapper, PlotHead, PlotBody } from "./plot.styles";

interface IPlot {
  value: string;
}

const PlotView: React.FunctionComponent<IPlot> = ({ value }) => (
  <PlotWrapper>
    <PlotBody>{decodeURIComponent(value)}</PlotBody>
  </PlotWrapper>
);

export default PlotView;

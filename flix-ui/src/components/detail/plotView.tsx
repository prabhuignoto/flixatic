import * as React from "react";
import { PlotWrapper, PlotHead, PlotBody } from "./detail.styles";

interface IPlot {
  value: string;
}

const PlotView: React.FunctionComponent<IPlot> = ({value}) => (
  <PlotWrapper>
    <PlotHead>Plot</PlotHead>
    <PlotBody>{decodeURIComponent(value)}</PlotBody>
  </PlotWrapper>
);

export default PlotView;
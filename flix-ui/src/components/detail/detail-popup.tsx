import * as React from "react";
import { IDetailPopup } from "../../types";
import {
  DetailPopupBackdrop,
  DetailPopupContainer,
  DetailPopupContent,
  DetailWrapperOne,
  DetailWrapperTwo,
  FlixTitle,
  CloseButton
} from "./detail.styles";
import ImdbView from "./imdbView";
import PlotView from "./plotView";
import FlixView from "./flixView";
import { ReactComponent as CloseSVG } from "../../assets/close.svg";

export default class extends React.Component<IDetailPopup, {}> {
  constructor(props: IDetailPopup) {
    super(props);
  }

  render() {
    const { imdbInfo, netflixInfo, close } = this.props;
    return (
      <DetailPopupBackdrop>
        <DetailPopupContainer>
          <DetailPopupContent>
            <FlixTitle>{netflixInfo.title}</FlixTitle>
            <DetailWrapperOne>
              <FlixView
                title={netflixInfo.title}
                avgRating={netflixInfo.avgrating}
                image1={netflixInfo.image1}
              />
              <ImdbView values={imdbInfo} />
            </DetailWrapperOne>
            <DetailWrapperTwo>
              <PlotView value={imdbInfo.plot} />
            </DetailWrapperTwo>
          </DetailPopupContent>
          <CloseButton onClick={() => close("")}>
            <CloseSVG />
          </CloseButton>
        </DetailPopupContainer>
      </DetailPopupBackdrop>
    );
  }
}

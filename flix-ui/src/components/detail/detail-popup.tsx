import * as React from "react";
import { IDetailPopup } from "../../types";
import {
  DetailPopupBackdrop,
  DetailPopupContainer,
  DetailPopupContent,
  DetailWrapperOne,
  DetailWrapperTwo,
  CloseButton
} from "./detail.styles";
import ImdbView from "./imdbView";
import PlotView from "./plotView";
import FlixView from "./flixView";
import { ReactComponent as CloseSVG } from "../../assets/close.svg";
import { FlixTitle, FlixStarsWrapper } from "./flix.styles";
import Tab from "../tabs";
import Stars from "../card/stars";

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
            <FlixTitle>
              <span>{netflixInfo.title}</span>
              {netflixInfo.avgrating && (
                <FlixStarsWrapper>
                  <Stars rating={netflixInfo.avgrating} />
                </FlixStarsWrapper>
              )}
            </FlixTitle>
            <DetailWrapperOne>
              <FlixView
                title={netflixInfo.title}
                avgRating={netflixInfo.avgrating}
                image1={netflixInfo.image1}
              />
              <Tab
                items={[
                  {
                    name: "Movie Info",
                    renderView: () => <ImdbView values={imdbInfo} />
                  },
                  {
                    name: "Plot",
                    renderView: () => <PlotView value={imdbInfo.plot} />
                  },
                  {
                    name: "Cast & Crew",
                    renderView: () => <div>Prabhu</div>
                  }
                ]}
              />
            </DetailWrapperOne>
          </DetailPopupContent>
          <CloseButton onClick={() => close("")}>
            <CloseSVG />
          </CloseButton>
        </DetailPopupContainer>
      </DetailPopupBackdrop>
    );
  }
}

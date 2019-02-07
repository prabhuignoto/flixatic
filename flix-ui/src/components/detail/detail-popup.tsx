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
import { FlixTitle } from "./flix.styles";
import Tab from "../tabs";

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
              {/* <ImdbView values={imdbInfo} /> */}
            </DetailWrapperOne>
            {/* <DetailWrapperTwo>
              {imdbInfo.plot && imdbInfo.plot !== "N/A" && (
                <PlotView value={imdbInfo.plot} />
              )}
            </DetailWrapperTwo> */}
          </DetailPopupContent>
          <CloseButton onClick={() => close("")}>
            <CloseSVG />
          </CloseButton>
        </DetailPopupContainer>
      </DetailPopupBackdrop>
    );
  }
}

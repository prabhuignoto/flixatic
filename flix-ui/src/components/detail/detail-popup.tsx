import * as React from "react";
import { IDetailPopup } from "../../types";
import {
  DetailPopupBackdrop,
  DetailPopupContainer,
  DetailPopupContent,
  DetailWrapperOne,
  DetailWrapperTwo,
  CloseButton,
  PosedDetailPopupContainer
} from "./detail.styles";
import ImdbView from "./imdbView";
import PlotView from "./plotView";
import FlixView from "./flixView";
import { ReactComponent as CloseSVG } from "../../assets/close.svg";
import { FlixTitle, FlixStarsWrapper } from "./flix.styles";
import Tab from "../tabs";
import Stars from "../card/stars";
import ImdbFullInfo from "../../containers/ImdbFullInfo";

const DetailPopup: React.FunctionComponent<IDetailPopup> = ({
  imdbInfo,
  netflixInfo,
  close
}) => {
  const PopupRef = React.useRef(null);

  React.useEffect(() => {
    PopupRef.current.focus();
  });

  return (
    <DetailPopupBackdrop
      tabIndex={0}
      ref={PopupRef}
      onKeyUp={(ev: React.KeyboardEvent) => {
        if (ev.which === 27) {
          close("");
        }
      }}
    >
      <PosedDetailPopupContainer pose="open" initialPose={"close"}>
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
            <FlixView image1={netflixInfo.image1} />
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
                  name: "IMDB",
                  renderView: () => <ImdbFullInfo flixId={netflixInfo.netflixid}/>
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
      </PosedDetailPopupContainer>
    </DetailPopupBackdrop>
  );
};

export default DetailPopup;

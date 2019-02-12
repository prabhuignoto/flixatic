import * as React from "react";
import { IDetailPopup } from "../../types";
import {
  DetailPopupBackdrop,
  DetailPopupContainer,
  DetailPopupContent,
  DetailWrapperOne,
  DetailWrapperTwo,
  CloseButton,
  PosedDetailPopupContainer,
  MinimizeButtonWrapper,
  MinimizeButton
} from "./styles/detail.styles";
import ImdbView from "./imdbView";
import PlotView from "./plotView";
import FlixView from "./imageView";
import { ReactComponent as CloseSVG } from "../../assets/close.svg";
import { FlixTitle, FlixStarsWrapper } from "./styles/image.styles";
import Tab from "../tabs";
import Stars from "../card/stars";
import ImdbFullInfo from "../../containers/ImdbFullInfo";
import Cast from "./cast";
import ImageGallery from "../../containers/ImageGallery";
import { ReactComponent as ArrowLeft } from "../../assets/arrow-left.svg";
import { ReactComponent as ArrowRight } from "../../assets/arrow-right.svg";

const DetailPopup: React.FunctionComponent<IDetailPopup> = ({
  imdbInfo,
  netflixInfo,
  cast,
  close
}) => {
  const PopupRef = React.useRef(null);
  const [toggleMinimize, setToggleMinimize] = React.useState(false);

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
            {imdbInfo.rating && (
              <FlixStarsWrapper>
                <Stars rating={imdbInfo.rating} size="large" />
              </FlixStarsWrapper>
            )}
          </FlixTitle>
          <DetailWrapperOne>
            <FlixView
              image1={netflixInfo.image1}
              image2={netflixInfo.image2}
              minimize={toggleMinimize}
            />
            <MinimizeButtonWrapper>
              <MinimizeButton onClick={() => setToggleMinimize(!toggleMinimize)}>
                {!toggleMinimize ? <ArrowLeft /> : <ArrowRight />}
              </MinimizeButton>
            </MinimizeButtonWrapper>
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
                  renderView: () => (
                    <ImdbFullInfo flixId={netflixInfo.netflixid} />
                  )
                },
                {
                  name: "Cast & Crew",
                  renderView: () => <Cast {...cast} />
                },
                {
                  name: "Boxart & Posters",
                  renderView: () => (
                    <ImageGallery flixId={netflixInfo.netflixid} />
                  )
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

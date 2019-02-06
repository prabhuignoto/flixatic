import * as React from "react";
import { Wrapper } from "./cards.style";
import { ICard } from "../../types";
import { LoadingDetailedView } from "../../action-creators";
import FlixCard from "../../containers/FlixCard";

interface ICards {
  items: ICard[];
  openDetailedView: (flixid: string) => void;
  closeDetailedView: (flixid: string) => void;
  loadingDetailedView: (flixid: string) => void;
}
``;
const FlixCards: React.FunctionComponent<ICards> = ({
  items,
  openDetailedView,
  closeDetailedView,
  loadingDetailedView
}) => {
  return (<Wrapper>
    {items.map((item: ICard) => (
      <FlixCard
        {...item}
        key={item.netflixid}
        openDetailedView={openDetailedView}
        closeDetailedView={closeDetailedView}
        loadingDetailedView={loadingDetailedView}
        isLoading={item.isLoading}
        dataLoadFailed={item.dataLoadFailed}
      />
    ))}
  </Wrapper>);
};

export default FlixCards;

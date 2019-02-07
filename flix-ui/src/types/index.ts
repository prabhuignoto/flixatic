export interface ICard {
  netflixid: string;
  title: string;
  image: string;
  synopsis: string;
  type: string;
  imdbid: string;
  released: string;
  runtime: string;
  rating: string;
  openDetailedView: (flixid: string) => void;
  closeDetailedView: (flixid: string) => void;
  loadingDetailedView: (flixid: string) => void;
  isLoading: boolean;
  dataLoadFailed: boolean;
}

export interface DetailedInfo {
  isOpen: boolean;
  flixId: string;
  isFlixLoading: boolean;
  isFlixFailedToLoad: boolean;
}

export interface IStateCard extends ICard {
  isLoading: boolean;
  dataLoadFailed: boolean;
}

export interface IState {
  detailedInfo: DetailedInfo;
  country: {
    id: string;
    value: string;
  };
  cards: IStateCard[];
}

export interface info {
  values: Object;
}

export interface IDetailPopup {
  netflixInfo?: any;
  imdbInfo: any;
  close: (flixId: string) => void;
}

export interface IDropDown {
  value: string;
  id: string;
  handleClick: (value: string, id: string) => void;
}

export interface ITabHead {
  title: string;
  handleClick: (title: string) => void;
  selected: boolean;
}

export interface ITab {
  items: Array<{ name: string; renderView: React.FunctionComponent }>;
}

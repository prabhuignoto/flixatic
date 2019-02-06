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
  dataLoadFailed: boolean
}

export interface DetailedInfo {
  isOpen: boolean;
  flixId: string;
  isFlixLoading: boolean;
  isFlixFailedToLoad: boolean;
}

export interface IStateCard extends ICard{
  isLoading: boolean;
  dataLoadFailed: boolean;
}

export interface IState {
  detailedInfo: DetailedInfo;
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
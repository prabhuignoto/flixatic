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
  base64: string;
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

export interface IFilter {
  type: string;
}

export interface IState {
  detailedInfo: DetailedInfo;
  country: {
    id: string;
    value: string;
  };
  cards: IStateCard[];
  filter: IFilter;
  settings: {
    countries: Array<{ value: string; id: string }>;
    filter: {
      default: {
        name: string;
        value: string;
      };
      types: Array<{
        name: string;
        value: string;
        selected?: boolean;
      }>;
    };
  };
}

export interface info {
  values: Object;
}

export interface IDetailPopup {
  netflixInfo?: any;
  imdbInfo: any;
  cast: {
    creator: string[];
    director: string[];
    actor: string[];
  };
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

export interface IImdbFullInfo {
  poster: string;
  tomatoUserRating: string;
  rated: string;
  tomatoUserReviews: string;
  filmid: string;
  runtime: string;
  top250tv: string;
  imdbid: string;
  metascore: string;
  tomatoRating: string;
  tomatoMeter: string;
  released: string;
  top250: string;
  imdbvotes: string;
  imdbrating: string;
  awards: string;
  genre: string;
  tomatoConsensus: string;
  plot: string;
  type: string;
  localimage: string;
  tomatoFresh: string;
  language: string;
  newid: string;
  tomatoUserMeter: string;
  tomatoRotten: string;
  tomatoReviews: string;
  country: string;
  date: string;
}

export interface IRadioGroupItem {
  name: string;
  value: string;
  selected?: boolean;
}

export interface IRadioGroup {
  items: IRadioGroupItem[];
  handleSelected: (selected: IRadioGroupItem) => void;
}

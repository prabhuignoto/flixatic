import {
  FLIX_DATA_LOAD_FAILED,
  CHANGE_COUNTRY,
  UPDATE_FILTER
} from "./../actions/index";
import { IState } from "./../types/index";
import {
  OPEN_DETAILED_VIEW,
  CLOSE_DETAILED_VIEW,
  LOADING_DETAILED_VIEW,
  LOADED_DETAILED_VIEW,
  FLIX_DATA_LOADED
} from "../actions";

const State: IState = {
  detailedInfo: {
    isOpen: false,
    flixId: "",
    isFlixFailedToLoad: false,
    isFlixLoading: false
  },
  cards: [],
  country: {
    id: "US",
    value: "United States"
  },
  filter: {
    type: ""
  },
  settings: {
    filter: {
      default: {
        name: "All",
        value: "all"
      },
      types: [
        { name: "Movie", value: "movie" },
        { name: "Series", value: "series" },
        { name: "All", value: "" }
      ]
    }
  }
};

export default function(state: IState = State, action: any) {
  switch (action.type) {
    case CLOSE_DETAILED_VIEW:
      return Object.assign({}, state, {
        detailedInfo: {
          isOpen: false,
          flixId: "",
          isFlixLoading: false,
          isFlixFailedToLoad: false
        }
      });
    case LOADING_DETAILED_VIEW:
      return Object.assign({}, state, {
        detailedInfo: {
          isOpen: true,
          flixId: String(action.flixId),
          isFlixLoading: true
        }
      });
    case LOADED_DETAILED_VIEW:
      return Object.assign({}, state, {
        detailedInfo: {
          isOpen: false,
          flixId: String(action.flixId),
          isFlixFailedToLoad: false,
          isFlixLoading: false
        }
      });
    case FLIX_DATA_LOAD_FAILED:
      return Object.assign({}, state, {
        detailedInfo: {
          isOpen: false,
          isFlixFailedToLoad: true,
          isFlixLoading: false
        }
      });
    case UPDATE_FILTER:
      return Object.assign({}, state, {
        filter: action.filter
      });
    case FLIX_DATA_LOADED:
      return Object.assign({}, state, {
        cards: action.data
      });
    case CHANGE_COUNTRY:
      return Object.assign({}, state, {
        country: {
          value: action.country,
          id: action.id
        },
        cards: []
      });
    default:
      return state;
  }
}

import { FLIX_DATA_LOAD_FAILED } from "./../actions/index";
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
  cards: []
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
        cards: state.cards.map(card => {
          return Object.assign({}, card, {
            isFlixLoading: false
          });
        })
      });
    case FLIX_DATA_LOAD_FAILED:
      return Object.assign({}, state, {
        detailedInfo: {
          isOpen: false,
          flixId: "",
          isFlixFailedToLoad: false,
          isFlixLoading: false
        }
      });
    case FLIX_DATA_LOADED:
      return Object.assign({}, state, {
        cards: action.data
      });
    default:
      return state;
  }
}

import {
  OPEN_DETAILED_VIEW,
  CLOSE_DETAILED_VIEW,
  LOADED_DETAILED_VIEW,
  LOADING_DETAILED_VIEW,
  FLIX_DATA_LOADED,
  FLIX_DATA_LOAD_FAILED,
  CHANGE_COUNTRY,
  UPDATE_FILTER,
  UPDATE_GENRE_SELECTION
} from "./../actions/index";
import { IFilter } from "../types";

export const OpenDetailedViewAction = (flixId: string) => ({
  type: OPEN_DETAILED_VIEW,
  flixId
});

export const CloseDetailedViewAction = (flixId: string) => ({
  type: CLOSE_DETAILED_VIEW,
  flixId
});

export const LoadingDetailedView = (flixId: string) => ({
  type: LOADING_DETAILED_VIEW,
  flixId
});

export const LoadedDetailedView = (flixId: string) => ({
  type: LOADED_DETAILED_VIEW,
  flixId
});

export const FlixDataLoaded = (
  data: Array<{ id: string; isLoading: boolean }>
) => ({
  type: FLIX_DATA_LOADED,
  data
});

export const FlixDataLoadFailed = () => ({
  type: FLIX_DATA_LOAD_FAILED
});


export const UpdateCountry = (value: string, id: string)=> ({
  type: CHANGE_COUNTRY,
  country: value,
  id
});

export const UpdateFilter = (filter: {type: string}) => ({
  type: UPDATE_FILTER,
  filter
});

export const UpdateGenreSelection = (selected: string[]) => ({
  type: UPDATE_GENRE_SELECTION,
  genres: selected
})
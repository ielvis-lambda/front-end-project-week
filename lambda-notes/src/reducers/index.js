/*
  Be sure to import in all of the action types from `../actions`
*/

import {
  FETCHING_NOTES,
  FETCHING_NOTES_SUCCESS,
  FETCHING_NOTES_FAILURE,
  CREATE_NOTE,
  ADDING_NOTE_SUCCESS,
  ADDING_NOTE_FAILURE,
  SHOW_NOTE,
  GO_HOME
  // DELETING_SMURF_SUCCESS
} from '../actions/index';

const initialState = {
  notes: [],
  fetchingNotes: false,
  addingNote: false,
  error: null,
  activeNote: ''
};

/*
  You'll only need one note reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_NOTES:
      return {
        ...state,
        fetchingNotes: true
      };

    case FETCHING_NOTES_SUCCESS:
      return {
        ...state,
        fetchingNotes: false,
        notes: action.payload,
        error: null,
        activeNote: null
      };

    case FETCHING_NOTES_FAILURE:
      return {
        ...state,
        fetchingNotes: false,
        error: action.payload,
        activeNote: null
      };

    case CREATE_NOTE:
      return {
        ...state,
        addingNote: true
      };

    case ADDING_NOTE_SUCCESS:
      return {
        ...state,
        addingNote: false,
        error: null
      };

    case ADDING_NOTE_FAILURE:
      return {
        ...state,
        addingNote: false,
        error: action.payload
      };

    case SHOW_NOTE:
      return {
        ...state,
        activeNote: action.payload
      };

    case GO_HOME:
      return {
        ...state,
        activeNote: null
      };

    // case DELETING_SMURF_SUCCESS:
    //   return {
    //     ...state,
    //     smurfs: state.smurfs.filter(smurf => smurf.id !== action.payload)
    //   };

    default:
      return state;
  }
};

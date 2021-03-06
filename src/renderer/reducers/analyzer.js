import { handleActions } from 'redux-actions';
import Debug from 'debug';

import {
  INITIALIZE_DATA,
  RECEIVE_DETECTION_RESULTS,
  FETCHING_RESULTS,
  RECEIVE_TRANSCRIPTION_RESULTS,
  CHECK_FIGURE_NUM
} from '../actions/analyzer';

const debug = Debug('fabnavi:reducer:analyzer');

const initialState = {
  figures: [],
  isFetching: false,
  requestNum: 0
};

const createFiguresInfo = figures => {
  const format = [];
  figures.map(figure => {
    format.push({
      source: figure.figure.file.url,
      original: figure.figure.file.thumb.url,
      detected: null,
      detection: {},
      transcription: {}
    });
  });
  return format;
};

const addDetectionInfo = (state, data, index) => {
  debug('index: ', index);
  const copyFigures = state;
  const original = state[index];
  const copy = Object.assign({}, original);
  copy.detection['detected'] = data.detection.detected;
  copy.detection['unknown'] = data.detection.unknown;
  copyFigures[index] = copy;
  return copyFigures;
};

const addTranscriptionInfo = (state, data, index) => {
  debug('index: ', index);
  const result = data.transcript_result;
  const copyFigures = state;
  const original = state[index];
  const copy = Object.assign({}, original);
  copy.transcription['narration'] = result.narration;
  copy.transcription['words'] = result.keywords;
  copyFigures[index] = copy;
  return copyFigures;
};

export default handleActions(
  {
    [INITIALIZE_DATA]: (state, action) => {
      const{ data } = action.payload;
      debug('inistializing data: ', data);
      const figures = data.content;
      return Object.assign({}, state, {
        figures: createFiguresInfo(figures),
        isFetching: false
      });
    },
    [FETCHING_RESULTS]: (state, action) => {
      return Object.assign({}, state, {
        ...state,
        isFetching: true,
        requestNum: 0
      });
    },
    [RECEIVE_DETECTION_RESULTS]: (state, action) => {
      const{ data } = action.payload;
      return Object.assign({}, state, {
        figures: addDetectionInfo(state.figures, data, state.requestNum),
        isFetching: false,
        requestNum: 0
      });
    },
    [RECEIVE_TRANSCRIPTION_RESULTS]: (state, action) => {
      const{ data } = action.payload;
      return {
        figures: addTranscriptionInfo(state.figures, data, state.requestNum),
        isFetching: false,
        requestNum: 0
      };
    },
    [CHECK_FIGURE_NUM]: (state, action) => {
      const{ index } = action.payload;
      return {
        ...state,
        requestNum: index
      };
    }
  },
  initialState
);

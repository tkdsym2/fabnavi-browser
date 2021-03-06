import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import Debug from 'debug';

import player from './player';
import user from './user';
import manager from './manager';
import modals from './modals';
import analyzer from './analyzer';
import errors from './errors';

const debug = Debug('fabnavi:reducer');

export default combineReducers({
  player,
  user,
  manager,
  modals,
  analyzer,
  errors,
  router: routerReducer
});

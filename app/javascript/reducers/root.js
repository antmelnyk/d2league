import { combineReducers } from 'redux';

import { heroesReducer } from './heroes';
import { championsReducer } from './champions';

const rootReducer = combineReducers({
  heroes: heroesReducer,
  champions: championsReducer
});

export default rootReducer;

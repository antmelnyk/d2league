import { combineReducers } from 'redux';

import { heroesReducer } from './heroes';

const rootReducer = combineReducers({
  heroes: heroesReducer,
});

export default rootReducer;
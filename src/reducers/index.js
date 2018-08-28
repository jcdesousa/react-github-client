import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import repositories from './repositories';

const rootReducer = combineReducers({ repositories, router: routerReducer });

export default rootReducer;

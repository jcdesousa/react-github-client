import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import repositories from './repositories';
import contributors from './contributors';

const rootReducer = combineReducers({ repositories, contributors, router: routerReducer });

export default rootReducer;

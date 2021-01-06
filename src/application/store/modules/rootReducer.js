import { combineReducers } from 'redux';

import user from './user/reducer';
import player from './player/reducer';

export default combineReducers({
    user,
    player,
});

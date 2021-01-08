import { combineReducers } from 'redux';

import app from './app/reducer';
import game from './game/reducer';
import user from './user/reducer';
import player from './player/reducer';

export default combineReducers({
    app,
    game,
    user,
    player,
});

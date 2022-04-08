import { combineReducers } from 'redux';
import artists from './artists';
import albums from './albums';
import logins from './logins';
import registers from './registers';

export default combineReducers({
    artists, albums, logins, registers
});
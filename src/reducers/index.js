import {combineReducers} from 'redux';
import images from './images_reducer';
import weather from './weather_reducer';

const rootReducer = combineReducers({
    images,
    weather
})

export default rootReducer;
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './users/users.reducers';
import taskReducer from './tasks/task.reducer';
import imageReducer from './image/image.reducer';


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user','taskReducer','imageReducer']
};

const rootReducer = combineReducers({
  user: userReducer,
  task:taskReducer,
  image:imageReducer
});

export default persistReducer(persistConfig, rootReducer);
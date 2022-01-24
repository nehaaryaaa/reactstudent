import rootReducer from '../reducers/RootReducer';
import { createStore } from 'redux';

const finalStore = createStore(rootReducer);   //Here Centralized Store is Created
export default finalStore;
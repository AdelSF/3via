import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import data from './data.json';
import { questions, game } from './reducers';
import randomlyAdded from '../Util/randomlyAdded'




const reducers = combineReducers({
    questions,
    game
})

const newData = randomlyAdded(data);

let preLoad = {
    questions: newData,
    game: {
        start: 0,
        endNum: 10,
        result: {},
        score: 0,
        quizNumber: 1
    }
}



const store = createStore(reducers, preLoad, composeWithDevTools (
    applyMiddleware(thunk)
  ))


export default store

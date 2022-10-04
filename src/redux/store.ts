import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
// reducers
import appReducer from 'redux/reducers/appReducer';
import userReducer from 'redux/reducers/userReducer';
// sagas
import appSaga from 'redux/sagas/appSaga';
// reducers
const reducers = combineReducers({
    user: userReducer,
    app: appReducer,
});

//Add Sagas
function* rootSaga() {
    yield all([
        ...appSaga
    ]);
}

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
const store = createStore(
    reducers,
    {},
    applyMiddleware(sagaMiddleware)
)

// then run the saga
sagaMiddleware.run(rootSaga)

export default store;
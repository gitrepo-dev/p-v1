// libs 
import { SagaIterator } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';
// types
import Types from 'redux/types/appTypes';
// services
import {
  getAppService, getMetaUserService,
} from 'services/appServices';
// reducer
import { setAppStates, setApp } from 'redux/reducers/appReducer';
import { setUser, setUserStates } from 'redux/reducers/userReducer';



/***
  * fetching
  * @param {''}
  * @return {'data/err'}
  * 
***/

/***
  * fetching all events
  * @param {''}
  * @return {'data/err'}
  * 
***/
function* fetchingEvents(action: any): SagaIterator {
  const { payload } = action;
  try {
    yield put(setAppStates({
      isLoading: true,
      message: '',
      action: 'fetch',
      success: false
    }));
    const data = yield call(getAppService, payload);
    if (data === 'ERROR') {
      yield put(setApp(data));
      yield put(setAppStates({
        isLoading: false,
        message: 'error',
        action: 'fetch',
        success: data.success
      }));
    } else {
      yield put(setApp(data));
      yield put(setAppStates({
        isLoading: false,
        message: 'success',
        action: 'fetch',
        success: data.success
      }));
    }

  } catch (e) {
    yield put(setAppStates({
      isLoading: false,
      message: '',
      action: 'fetch',
      success: false
    }));
    console.warn('Client side error', e);
  }
}


/***
  * fetching
  * @param {''}
  * @return {'data/err'}
  * 
***/

/***
  * fetching user
  * @param {''}
  * @return {'data/err'}
  * 
***/
function* fetchingProfileById(action: any): SagaIterator {
  const { payload } = action;
  try {
    yield put(setUserStates({
      isLoading: true,
      message: '',
      action: 'fetch',
      success: false
    }));
    const data = yield call(getMetaUserService, payload);
    if (data === 'ERROR') {
      yield put(setUser(data));
      yield put(setAppStates({
        isLoading: false,
        message: 'error',
        action: 'fetch',
        success: data.success
      }));
    } else {
      yield put(setUser(data));
      yield put(setAppStates({
        isLoading: false,
        message: 'success',
        action: 'fetch',
        success: data.success
      }));
    }
  } catch (e) {
    yield put(setAppStates({
      isLoading: false,
      message: '',
      action: 'fetch',
      success: false
    }));
    console.warn('Client side error', e);
  }
}

// exporting all sagas
const APP_SAGAS = [
  takeLatest(Types.GET_APP_DATA, fetchingEvents),
  takeLatest(Types.GET_APP_DATA_BY_ID, fetchingProfileById),
];
export default APP_SAGAS;
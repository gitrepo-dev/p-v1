// libs 
import { eventActionType } from 'interfaces';
import { SagaIterator } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';
// types
import Types from 'redux/types/eventTypes';
// services
import {
   getEventService,
   addEventService
} from 'services/eventServices';
// reducer
import { setEventStates, setEvent } from 'redux/reducers/eventReducer';


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
function* fetchingEvents(): SagaIterator {
    try {
        console.log('fetching')
        // yield put(setEventStates({
        //     isLoading: true,
        //     message: '',
        //     action: 'fetch',
        //     success: false
        // }));
        // const data = yield call(getEventService);
        // if (data.success) {
        //     yield put(setEvent(data));
        //     toast.success(data.data?.length > 0 ? data?.message : 'No events list found.',)
        // } else toast.error(data.message)
        // yield put(setEventStates({
        //     isLoading: false,
        //     message: data.message,
        //     action: 'fetch',
        //     success: data.success
        // }));
    } catch (e) {
        // yield put(setEventStates({
        //     isLoading: false
        // }));
        // toast.error('Network error')
        console.warn('Client side error', e);
    }
}




// exporting all sagas
const EVENT_SAGAS = [
    takeLatest(Types.GET_EVENTS, fetchingEvents),
];
export default EVENT_SAGAS;
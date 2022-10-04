import Types from 'redux/types/appTypes';

/***
 * get all the app data
 * @param {''}
 * @return {''}
 * 
***/
export const onAppData = () => ({
    type: Types.GET_APP_DATA,
    payload: []
});




export const getUserProfileById = (id: number | string) => ({
    type: Types.GET_APP_DATA_BY_ID,
    payload: id
});

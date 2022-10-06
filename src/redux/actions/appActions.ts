import Types from 'redux/types/appTypes';

/***
 * get all the app data
 * @param {''}
 * @return {''}
 * 
***/
export const onAppData = (id:number | string) => ({
    type: Types.GET_APP_DATA,
    payload: id
});




export const getUserProfileById = (id: number | string) => ({
    type: Types.GET_APP_DATA_BY_ID,
    payload: id
});

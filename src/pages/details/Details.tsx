import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import DetailsTiles from "components/detailstiles/DetailsTiles";
import Background from "components/background";
import { getUserProfileById, onAppData } from "redux/actions/appActions";
import { getApp } from "redux/reducers/appReducer";
import { getUser } from "redux/reducers/userReducer";
import { useSearchParams } from 'react-router-dom'

export default function CreateEvent() {

  const dispatch = useDispatch()
  const { defaultStates: { isLoading, message }, data } = useSelector(getApp)
  const { defaultStates: { isLoading: isUserLoading }, data: userData } = useSelector(getUser)

  const [searchParams] = useSearchParams();
  const urlVal = searchParams.get('id')

  useEffect(() => {
    dispatch(onAppData(urlVal ? urlVal : 4))
    dispatch(getUserProfileById(urlVal ? urlVal : 4))
  }, [dispatch, data.length, userData.length, urlVal])

  return (
    <>
      {(message === "ERROR" || data?.length === 0 || userData?.length === 0) && '404 not found.'}
      {(isLoading) ? (<div className='loader-wapper'><div className="lds-facebook"><div></div><div></div><div></div></div></div>) : (<>
        <Background imgUrl={data[0]?.backgroundImage} styles={'bg-img'} />
        <DetailsTiles urlVal={urlVal} data={data[0]} userData={userData[0]} />
      </>)}
    </>
  )
}

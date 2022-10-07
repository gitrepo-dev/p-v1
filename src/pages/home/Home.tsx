import Background from 'components/background'
import HomeAnchorImg from 'components/homeanchorimg'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useSearchParams } from 'react-router-dom'
import { getUserProfileById, onAppData } from 'redux/actions/appActions'
import { getApp } from 'redux/reducers/appReducer'
import { getUser } from 'redux/reducers/userReducer'

export default function Home() {

  const dispatch = useDispatch()
  const { defaultStates: { isLoading, message }, data } = useSelector(getApp)
  const { defaultStates: { isLoading: isUserLoading }, data: userData } = useSelector(getUser)

  const [searchParams] = useSearchParams();
  const urlVal = searchParams.get('id')
  const urlLocation = useLocation()
  
  useEffect(() => {
    // dispatch(onAppData(urlVal ? urlVal : 4))
    // dispatch(getUserProfileById(urlVal ? urlVal : 4))
   // @ts-ignore
   dispatch(getUserProfileById(urlLocation?.pathname !== '/' ? urlLocation?.pathname?.split('/')?.at(-1) : 'rahul'))
   // @ts-ignore
   dispatch(onAppData(urlLocation?.pathname !== '/' ? userData[0]?.ownerMetaUserID : 4))
  }, [dispatch, data.length, userData.length, urlVal])


  return (
    <>
      {(message === "ERROR" || data?.length === 0 || userData?.length === 0) && '404 not found.'}
      {(isLoading) ? (<div className='loader-wapper'><div className="lds-facebook"><div></div><div></div><div></div></div></div>) : (
        <>
          <Background imgUrl={userData[0]?.coverMedia} styles={'bg-img'} />
          <HomeAnchorImg urlVal={urlLocation?.pathname} data={data[0]} userData={userData[0]} />
        </>
      )}
    </>
  )
}


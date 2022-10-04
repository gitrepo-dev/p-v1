import Background from 'components/background'
import HomeAnchorImg from 'components/homeanchorimg'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserProfileById, onAppData } from 'redux/actions/appActions'
import { getApp } from 'redux/reducers/appReducer'
import { getUser } from 'redux/reducers/userReducer'

export default function Home() {

  const dispatch = useDispatch()
  const { defaultStates: { isLoading }, data } = useSelector(getApp)
  const { defaultStates: { isLoading: isUserLoading }, data: userData } = useSelector(getUser)

  useEffect(() => {
    dispatch(onAppData())
    dispatch(getUserProfileById(4))
  }, [dispatch, data?.length, userData?.length])

  return (
    <>
      {(isLoading || isUserLoading) ? (<div className='loader-wapper'><div className="lds-facebook"><div></div><div></div><div></div></div></div>) : (
        <>
          <Background imgUrl={data[0]?.coverMedia} styles={'bg-img'} />
          <HomeAnchorImg data={data[0]} userData={userData[0]} />
        </>
      )}
    </>
  )
}


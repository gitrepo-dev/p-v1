import Background from 'components/background'
import HomeAnchorImg from 'components/homeanchorimg'

export default function Home() {
  return (
    <>
      <Background imgUrl={'https://images.unsplash.com/photo-1664735811531-08725ce378c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80'} styles={'bg-img'} />
      <HomeAnchorImg />
    </>
  )
}


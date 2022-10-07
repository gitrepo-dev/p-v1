import { upArrow } from 'assets'
import { Link } from 'react-router-dom'

export default function HomeAnchorImg({ urlVal, data, userData }: any) {
  return (
    // <Link to={urlVal? `/${urlVal}` : 'details'}>
    <Link to={urlVal !== '/' ? `/details/${urlVal?.split('/').at(-1)}` : '/details'}>
      <div className="home-anchor absolute">
        <div>
          <span className="flex items-center flex-col justify-center mb-5">
            <img src={upArrow} alt="icons" className="mb-1" />
            <img src={upArrow} alt="icons" className="mb-1" />
            <img src={upArrow} alt="icons" />
          </span>
          <div className="img-holder">
            <img src={userData?.metauserProfileLogo} alt="" className="w-full" />
          </div>
        </div>
        <div className="text-white font-bold text-2xl mt-3 capitalize">{data?.metausername}</div>
      </div>
    </Link>
  )
}

import { Link } from "react-router-dom";

export default function DetailsTiles({ urlVal, data, userData }: any) {

  return (
    <div className="relative p-5 md:p-10">
      {/* <Link to={urlVal ? `/?id=${urlVal}` : '/'}></Link> */}
      <Link to={urlVal !== '/details' ? `/${urlVal?.split('/').at(-1)}` : '/'}>
        <div className="home-anchor mb-5">
          <div className="img-holder relative">
            <img src={data?.metauserProfileLogo} alt="" className="w-full" />
          </div>
          <div className="text-white font-bold text-2xl mb-0 mt-4 capitalize">{userData?.metausername}</div>
          <div className="text-white text-lg capitalize">{userData?.bioCaption}</div>
        </div>
      </Link>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-10 lg:grid-cols-4 lg:gap-15">
        <div className="img-tile-holder">
          <a href={`${userData?.caption1}`} className="block" rel="noreferrer">
            <img src={userData?.media1} alt="" className="w-full h-auto rounded-lg" />
          </a>
        </div>
        <div className="img-tile-holder">
          <a href={`${userData?.caption2}`} className="block" rel="noreferrer">
            <img src={userData?.media2} alt="" className="w-full h-auto rounded-lg" />
          </a>
        </div>
        <div className="img-tile-holder">
          <a href={`${userData?.caption3}`} className="block" rel="noreferrer">
            <img src={userData?.media3} alt="" className="w-full h-auto rounded-lg" />
          </a>
        </div>
        <div className="img-tile-holder">
          {/* <img src="https://images.unsplash.com/photo-1664778791465-58e062f36e1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=400&q=60" alt="" className="w-full h-auto rounded-lg" /> */}
        </div>
      </div>
    </div>
  )
}

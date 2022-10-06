import { Link, useNavigate } from "react-router-dom";



export default function DetailsTiles({ urlVal, data, userData }: any) {
  const navigate = useNavigate()
  return (
    <div className="relative p-5 md:p-10">

      <Link to={urlVal ? `/?id=${urlVal}` : '/'}>
        <div className="home-anchor mb-5">
          <div className="img-holder relative">
            <img src={userData?.metauserProfileLogo} alt="" className="w-full" />
          </div>
          <div className="text-white font-bold text-2xl mb-0 mt-4 capitalize">{data?.metausername}</div>
          <div className="text-white text-lg capitalize">{data?.bioCaption}</div>
        </div>
      </Link>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-10 lg:grid-cols-4 lg:gap-15">
        <div className="img-tile-holder">
          <a href={`${data?.caption1}`} className="block" rel="noreferrer">
            <img src={data?.media1} alt="" className="w-full h-auto rounded-lg" />
          </a>
        </div>
        <div className="img-tile-holder">
          <a href={`${data?.caption2}`} className="block" rel="noreferrer">
            <img src={data?.media2} alt="" className="w-full h-auto rounded-lg" />
          </a>
        </div>
        <div className="img-tile-holder">
          <a href={`${data?.caption3}`} className="block" rel="noreferrer">
            <img src={data?.media3} alt="" className="w-full h-auto rounded-lg" />
          </a>
        </div>
        <div className="img-tile-holder">
          {/* <img src="https://images.unsplash.com/photo-1664778791465-58e062f36e1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=400&q=60" alt="" className="w-full h-auto rounded-lg" /> */}
        </div>
      </div>
    </div>
  )
}

import { upArrow } from 'assets'
import { Link } from 'react-router-dom'

export default function HomeAnchorImg() {
  return (
    <Link to="/details">
      <div className="home-anchor absolute">
        <div>
          <span className="flex items-center flex-col justify-center mb-5">
            <img src={upArrow} alt="icons" className="mb-1" />
            <img src={upArrow} alt="icons" className="mb-1" />
            <img src={upArrow} alt="icons" />
          </span>
          <div className="img-holder">
            <img src="https://images.unsplash.com/photo-1559893088-c0787ebfc084?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150&q=80" alt="" className="w-full" />
          </div>
        </div>
        <div className="text-white font-bold text-2xl mt-3">Rahul</div>
      </div>
    </Link>
  )
}

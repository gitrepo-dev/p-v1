import { Link } from "react-router-dom";



export default function DetailsTiles() {
  return (
    <div className="relative p-5 md:p-10">

      <Link to="/">
        <div className="home-anchor mb-5">
          <div className="img-holder relative">
            <img src="https://images.unsplash.com/photo-1559893088-c0787ebfc084?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150&q=80" alt="" className="w-full" />
          </div>
          <div className="text-white font-bold text-2xl mb-0 mt-4">Rahul</div>
          <div className="text-white text-lg">Beta tester</div>
        </div>
      </Link>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-10 lg:grid-cols-4 lg:gap-15">
        <div className="img-tile-holder">
          <img src="https://images.unsplash.com/photo-1664735811531-08725ce378c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=400&q=60" alt="" className="w-full h-auto rounded-lg" />
        </div>
        <div className="img-tile-holder">
          <img src="https://images.unsplash.com/photo-1661956602139-ec64991b8b16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw1Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=400&q=60" alt="" className="w-full h-auto rounded-lg" />
        </div>
        <div className="img-tile-holder">
          <img src="https://images.unsplash.com/photo-1662581871625-7dbd3ac1ca18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=400&q=60" alt="" className="w-full h-auto rounded-lg" />
        </div>
        <div className="img-tile-holder">
          <img src="https://images.unsplash.com/photo-1664778791465-58e062f36e1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=400&q=60" alt="" className="w-full h-auto rounded-lg" />
        </div>
      </div>
    </div>
  )
}

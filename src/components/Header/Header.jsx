import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (


    <header className="p-5">

        <nav className="flex items-center justify-between container mx-auto">
            <div className="h-20 w-20 overflow-hidden">
                <img src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png" alt="" className=" object-cover"/>
            </div>


        <div className="flex items-center gap-5 font-semibold">
            <Link to='/home'>Home</Link>

            <Link to='/home/transactions'>History</Link>

            <button>Log out</button>

        </div>





        </nav>


    </header>


  )
}

export default Header
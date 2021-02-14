import React from 'react'
import './Navlinks.css'
import {Link} from 'react-router-dom'

function Navlinks(){
     return(
          <div className="navlinks">
               <div className="navlinks__outer">
                    <div className="navlinks__inner">
                    <Link>Today's Deals</Link>
                    <Link>Customer Service</Link>
                    <Link>Gift Card</Link>
                    <Link>Registry</Link>
                    <Link>Sell</Link>
                    </div>

               </div>
          </div>
     )
}
export default Navlinks
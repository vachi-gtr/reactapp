import React from 'react'
import './Footer.css'

function Footer() {
     return (
          <div className="footerarea">
               <div className="footerarea__top">
                    <p>Back to Top</p>    
               </div>
               <div className="footerarea__links">
                    <div footerarea__linkarea>
                         <span>test1</span>                         
                    </div>
                    <div footerarea__linkarea>
                         <span>test2</span>                         
                    </div>
                    <div footerarea__linkarea>
                         <span>test3</span>                         
                    </div>
                    <div footerarea__linkarea>
                         <span>test4</span>                         
                    </div>
               </div>
          </div>
     )
}

export default Footer

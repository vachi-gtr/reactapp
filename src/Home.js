import React from 'react'
import Product from './Product'
import './Home.css'

function Home() {
     return (
          <div className = "home">
               <img className="home__image"
                src ="https://www.filmibeat.com/img/2020/05/xkgf-1584096641-jpg-pagespeed-ic-vxhgcv5u3c-1589866951.jpg"
                alt=" "/>

                <div className="home__row">
                     <Product 
                         id="121314"
                         title ="Acer Chromebook Spin 311 Convertible Laptop"
                         price={11.96}
                         rating={4}
                         image="https://images-na.ssl-images-amazon.com/images/I/71c5W9NxN5L._AC_SX425_.jpg"
                    />
                    <Product 
                         id="121314"
                         title ="New Apple iPhone 12 Pro"
                         price={2400.17}
                         rating={5}
                         image="https://m.media-amazon.com/images/I/71cSV-RTBSL._FMwebp__.jpg"
                    />
                    <Product 
                         id="121314"
                         title ="Audemars Piguet Royal Oak Offshore Steel Auto-matic Watch 26703ST.OO.A027CA.01"
                         price={293.95}
                         rating={4}
                         image="https://images-na.ssl-images-amazon.com/images/I/61J8yC77JiL._AC_UX679_.jpg"
                    />
                </div>
                <div className="home__row">
                     <Product 
                         id="121314"
                         title ="Acer Chromebook Spin 311 Convertible Laptop"
                         price={11.96}
                         rating={4}
                         image="https://images-na.ssl-images-amazon.com/images/I/71c5W9NxN5L._AC_SX425_.jpg"
                    />
                    <Product 
                         id="121314"
                         title ="New Apple iPhone 12 Pro"
                         price={2400.17}
                         rating={5}
                         image="https://m.media-amazon.com/images/I/71cSV-RTBSL._FMwebp__.jpg"
                    />
                    <Product 
                         id="121314"
                         title ="Audemars Piguet Royal Oak Offshore Steel Automatic Watch 26703ST.OO.A027CA.01"
                         price={293.95}
                         rating={4}
                         image="https://images-na.ssl-images-amazon.com/images/I/61J8yC77JiL._AC_UX679_.jpg"
                    />
                </div>
                <div className="home__row">
                     <Product 
                         id="121314"
                         title ="Acer Chromebook Spin 311 Convertible Laptop"
                         price={11.96}
                         rating={4}
                         image="https://images-na.ssl-images-amazon.com/images/I/71c5W9NxN5L._AC_SX425_.jpg"
                    />
                    <Product 
                         id="121314"
                         title ="New Apple iPhone 12 Pro"
                         price={2400.17}
                         rating={5}
                         image="https://m.media-amazon.com/images/I/71cSV-RTBSL._FMwebp__.jpg"
                    />
                    <Product 
                         id="121314"
                         title ="Audemars Piguet Royal Oak Offshore Steel Automatic Watch 26703ST.OO.A027CA.01"
                         price={293.95}
                         rating={4}
                         image="https://images-na.ssl-images-amazon.com/images/I/61J8yC77JiL._AC_UX679_.jpg"
                    />
                      <Product 
                         id="121314"
                         title ="Acer Chromebook Spin 311 Convertible Laptop"
                         price={11.96}
                         rating={4}
                         image="https://images-na.ssl-images-amazon.com/images/I/71c5W9NxN5L._AC_SX425_.jpg"
                    />

                </div>
            <h1>Home</h1>   
          </div>
     )
}

export default Home

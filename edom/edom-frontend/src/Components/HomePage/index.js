import React from 'react';
import Product from '../ProductCard';
import './styles.css'

const HomePage = () => {
    return (
        <>
            <div className="rdw">
                <h1>Buy your things</h1> 
            </div>
            <div className="new-class">
                <Product
                    carTitle={'Mango'} 
                    cardText={'Ripe mango'}
                    image={"https://media.istockphoto.com/photos/mango-fruit-picture-id1318935291"}
                />
                <Product
                    carTitle={'Jack-fruit'} 
                    cardText={'Big jack-fruit'}
                    image={"https://thumbs.dreamstime.com/z/fresh-jackfruit-white-dish-half-jack-fruit-leaf-wooden-table-119409772.jpg"}
                />
                <Product
                    carTitle={'Banana'} 
                    cardText={'Bananas'}
                    image={"https://media.istockphoto.com/photos/banana-picture-id636739634?b=1&k=20&m=636739634&s=170667a&w=0&h=_HASEjG8LXbR4zu_eDH4dtS9WC80C9liLVFnKizTqtM="}
                />
            </div>
        </>
    )
}

export default HomePage;
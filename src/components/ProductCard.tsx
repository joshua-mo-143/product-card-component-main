import React from 'react'

type Props = {}

const ProductCard = (props: Props) => {
  return (
    <div className='product-card'>
        <img src="/image-product-desktop.jpg"/>
        <div className="product-text">
        <p className="product-category">
            PERFUME
        </p>
        <h1 className="product-name">Gabrielle Essence Eau de Perfum</h1>
        <p className='product-description'>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
        <div className="product-prices">
            <p className='product-newprice dark-cyan'>$149.99</p>
            <p className='product-oldprice'>$169.99</p>
        </div>
        <button className='cart-add'>
            <img src="/icon-cart.svg" />
            <span>Add to Cart</span>
            </button>
        </div>
    </div>
  )
}

export default ProductCard
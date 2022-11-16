import React from 'react'

type Props = {}

const ProductCard = (props: Props) => {
  return (
    <div className='product-card'>
        <picture>
        <source media="(min-width: 650px)" srcSet="image-product-desktop.jpg" height="100%"
        width="100%" object-fit="cover"/>
        <source media="(min-width: 0px)" srcSet="image-product-mobile.jpg" width="100%" height="100%" object-fit="cover"/>
        <img src="/image-product-mobile.jpg" alt="Product image for Gabrielle Essence Eau de Parfum by Chanel"/>
        </picture>
        <div className="product-text">
        <p className="product-category">
            PERFUME
        </p>
        <h1 className="product-name">Gabrielle Essence Eau de Parfum</h1>
        <p className='product-description'>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
        <div className="product-prices">
            <p className='product-newprice dark-cyan'>$149.99</p>
            <p className='product-oldprice'><del><span className='sr-only'>The previous price was</span></del>$169.99</p>
        </div>
        <button className='cart-add'>
            <img src="/icon-cart.svg" alt="Add product to cart icon" />
            <span>Add to Cart</span>
            </button>
        </div>
    </div>
  )
}

export default ProductCard
import React from 'react'
import '../assets/Style/product_detail.css'
import { Link } from 'react-router-dom'
import ReviewContainer from '../components/singleproductpage/ReviewContainer'

const increment = () => {
  console.log("Increment")
}
const decrement = () => {
  console.log("Decrement")
}
const SingleProductPage = () => {
  return (
    <div className='container product_detail'>
      <section className='product_detail_header'>
        <div className="container">
          <div className="row product_row">
            <div className="col-xl-6 col-lg-6 col-md-12 col-12">
              <div className="product-image-con">
                <div className="img-main-con">
                  <Link to="">
                    <figure className='imgcon'>
                      <img width='100%' src="https://electon5-store.myshopify.com/cdn/shop/products/11.1.jpg?v=1635246957" alt="" />
                    </figure>
                  </Link>
                </div>
                <div className="img-sub-con">

                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-12">
              <div className="product-info-con">
                <div className="prod-title">
                  <h4 className='heading'>Product Title</h4>
                </div>
                <div className="prod-rate-review-count">
                  <p> <b>4.4</b> 21000 rating, 2000 review</p>
                </div>
                <div className="prod-desc">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nostrum tempore eius labore incidunt obcaecati soluta aliquam consequatur, dolorum totam, molestiae repellendus est, aperiam numquam sunt rerum natus! Aliquid iure expedita quis voluptate eos!</p>
                </div>
                <div className="prod-stock">
                  <b>Available : </b><p>instock</p>
                </div>
                <form action="/product/cart" method='post'>
                  <div className="prod-option">
                    <div className="prod-color my-3">
                      <label htmlFor="color" className='pcolor'>Color :</label>
                      <select name="colors" id="colors" className='form-select'>
                        <option value="red">red</option>
                        <option value="blue">blue</option>
                        <option value="green">green</option>
                      </select>
                    </div>
                    <div className="prod-quant my-3">
                      <label htmlFor="quantity">Quantity :</label>
                      <input type="text" className='form-control quantity-box' value='1' onChange={() => { }} />
                      <div className="btn-group">
                        <div className="plus" onClick={() => increment()}>+</div>
                        <div className="minus" onClick={() => decrement()}>-</div>
                      </div>
                    </div>
                  </div>
                  <div className="prod-btn-group">
                    <div className="card-wistlist">
                      <button className='mx-1'>Add Cart</button>
                      <a href="/product/wishlist" className='mx-1'>Add Wishlist</a>
                    </div>
                    <div className="buy-btn my-3 mx-1">
                      <a href="/single_product/buy" className=''>Buy Now</a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="product-spec">
        <div className="container">
          <div className="row spec-con">
            <div className="col-xl-6 col-lg-6 col-md-12 col-12 prod-scp">
              <div className="prod-spec-heading">
                <h3 className='heading'>Description</h3>
              </div>
              <div className="content">
                <div className="row desc-content">
                  <div className="col-lg-4 col-md 12">
                    <div className="content-sub-head">
                      Product Name :
                    </div>
                    <div className="content-sub-head">
                      Model Number :
                    </div>
                    <div className="content-sub-head">
                      Product Category :
                    </div>
                    <div className="content-sub-head">
                      Manufactures :
                    </div>
                  </div>
                  <div className="col-lg-8 col-md 12">
                    <div className="content-sub-head">
                      Product Title
                    </div>
                    <div className="content-sub-head">
                      Product Number
                    </div>
                    <div className="content-sub-head">
                      Product Category
                    </div>
                    <div className="content-sub-head">
                      Product Manufacture
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-12 prod-scp">
              <div className="prod-spec-heading">
                <h3 className='heading'>Specification</h3>
              </div>
              <div className="content">
                <div className="row desc-content">
                  <div className="col-lg-4 col-md 12">
                    <div className="content-sub-head">
                      Product Name :
                    </div>
                    <div className="content-sub-head">
                      Model Number :
                    </div>
                    <div className="content-sub-head">
                      Product Category :
                    </div>
                    <div className="content-sub-head">
                      Manufactures :
                    </div>
                  </div>
                  <div className="col-lg-8 col-md 12">
                    <div className="content-sub-head">
                      Product Title
                    </div>
                    <div className="content-sub-head">
                      Product Number
                    </div>
                    <div className="content-sub-head">
                      Product Category
                    </div>
                    <div className="content-sub-head">
                      Product Manufacture
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ReviewContainer />
    </div>
  )
}

export default SingleProductPage

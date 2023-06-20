import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import Link from 'next/link';

const Cart = () => {
    return (
        <>
            <Navbar />
            
            <PageBanner 
                pageTitle="Cart" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Cart" 
            />  

            <div className="cart-area ptb-100">
                <div className="container">
                    <form>
                        <div className="cart-table table-responsive">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">Product</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Unit Price</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Total</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td className="product-thumbnail">
                                            <Link href="#">
                                                <a>
                                                    <img src="/images/products/product1.jpg" alt="item" />
                                                </a>
                                            </Link>
                                        </td>

                                        <td className="product-name">
                                            <Link href="#">
                                                <a>Note Book Mockup</a>
                                            </Link>
                                        </td>

                                        <td className="product-price">
                                            <span className="unit-amount">$250.00</span>
                                        </td>

                                        <td className="product-quantity">
                                            <div className="input-counter">
                                                <span className="minus-btn"><i className='bx bx-minus'></i></span>
                                                <input type="text" min="1" defaultValue="1" />
                                                <span className="plus-btn"><i className='bx bx-plus'></i></span>
                                            </div>
                                        </td>

                                        <td className="product-subtotal">
                                            <span className="subtotal-amount">$250.00</span>

                                            <a href="#" className="remove"><i className='bx bx-trash'></i></a>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="product-thumbnail">
                                            <Link href="#">
                                                <a>
                                                    <img src="/images/products/product2.jpg" alt="item" />
                                                </a>
                                            </Link>
                                        </td>

                                        <td className="product-name">
                                            <Link href="#">
                                                <a>Motivational Book Cover</a>
                                            </Link>
                                        </td>

                                        <td className="product-price">
                                            <span className="unit-amount">$200.00</span>
                                        </td>

                                        <td className="product-quantity">
                                            <div className="input-counter">
                                                <span className="minus-btn"><i className='bx bx-minus'></i></span>
                                                <input type="text" min="1" defaultValue="1" />
                                                <span className="plus-btn"><i className='bx bx-plus'></i></span>
                                            </div>
                                        </td>

                                        <td className="product-subtotal">
                                            <span className="subtotal-amount">$200.00</span>

                                            <a href="#" className="remove"><i className='bx bx-trash'></i></a>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="product-thumbnail">
                                            <Link href="#">
                                                <a>
                                                    <img src="/images/products/product3.jpg" alt="item" />
                                                </a>
                                            </Link>
                                        </td>

                                        <td className="product-name">
                                            <Link href="#">
                                                <a>Book Cover Softcover</a>
                                            </Link>
                                        </td>

                                        <td className="product-price">
                                            <span className="unit-amount">$200.00</span>
                                        </td>

                                        <td className="product-quantity">
                                            <div className="input-counter">
                                                <span className="minus-btn"><i className='bx bx-minus'></i></span>
                                                <input type="text" min="1" defaultValue="1" />
                                                <span className="plus-btn"><i className='bx bx-plus'></i></span>
                                            </div>
                                        </td>

                                        <td className="product-subtotal">
                                            <span className="subtotal-amount">$200.00</span>

                                            <a href="#" className="remove"><i className='bx bx-trash'></i></a>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="product-thumbnail">
                                            <Link href="#">
                                                <a>
                                                    <img src="/images/products/product4.jpg" alt="item" />
                                                </a>
                                            </Link>
                                        </td>

                                        <td className="product-name">
                                            <Link href="#">
                                                <a>Stop and Take a Second</a>
                                            </Link>
                                        </td>

                                        <td className="product-price">
                                            <span className="unit-amount">$150.00</span>
                                        </td>

                                        <td className="product-quantity">
                                            <div className="input-counter">
                                                <span className="minus-btn"><i className='bx bx-minus'></i></span>
                                                <input type="text" min="1" defaultValue="1" />
                                                <span className="plus-btn"><i className='bx bx-plus'></i></span>
                                            </div>
                                        </td>

                                        <td className="product-subtotal">
                                            <span className="subtotal-amount">$150.00</span>
                                            <a href="#" className="remove"><i className='bx bx-trash'></i></a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="cart-buttons">
                            <div className="row align-items-center">
                                <div className="col-lg-7 col-sm-7 col-md-7">
                                    <div className="shopping-coupon-code">
                                        <input type="text" className="form-control" placeholder="Coupon code" name="coupon-code" id="coupon-code" />
                                        <button type="submit">Apply Coupon</button>
                                    </div>
                                </div>

                                <div className="col-lg-5 col-sm-5 col-md-5 text-right">
                                    <Link href="#">
                                        <a className="default-btn">
                                            <i className="flaticon-history"></i> Update Cart <span></span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="cart-totals">
                            <h3>Cart Totals</h3>

                            <ul>
                                <li>Subtotal <span>$800.00</span></li>
                                <li>Shipping <span>$30.00</span></li>
                                <li>Total <span>$830.00</span></li>
                            </ul>

                            <Link href="#">
                                <a className="default-btn">
                                    <i className="flaticon-shopping-cart"></i> Proceed to Checkout <span></span>
                                </a>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
      
            <Footer />
        </>
    )
}

export default Cart;
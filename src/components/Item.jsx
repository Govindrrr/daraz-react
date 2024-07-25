import React from 'react'
import '../index.css'

function Item() {
    return (
        <>
            <div className="container-fluid bg-item">
                <div className="container d-flex justify-content-center">
                    <div className="row widthh">
                        <div className="col p-0">
                            <div className="row mx-2 bg-white">
                                <div className="col-9 bg-white detail p-0 m-0">
                                    <div className="row">
                                        {/* <!-- image --> */}
                                        <div className="col-5">
                                            <div className="row p-2">
                                                <img src="./img/led.jpg" alt=""/>
                                            </div>
                                            <div className="row">
                                                <div className="col-2 width-55">
                                                    <img src="./img/led.jpg" alt="" className="item-images p-0" width="50px"/>
                                                    </div>
                                                <div className="col-2 width-55">
                                                    <img src="./img/led.jpg" alt="" className="item-images p-0" width="50px"/>
                                                    </div>
                                               
                                                
                                               

                                            </div>
                                        </div>


                                        {/* <!-- detail --> */}
                                        <div className="col-7">
                                            <div className="row">

                                                <div className="describe-item p-2">
                                                    <p className="topi">Powerful LED Flashlight 100000 Lumen
                                                        Tactical Flashlights Rechargeable USB 18650
                                                        Waterproof Zoom Fishing Hunting LED Flashlight
                                                    </p>
                                                </div>
                                                <div className="rating">
                                                    <p className="m-1"> No Ratings</p>
                                                </div>
                                                <div className="rating">
                                                    <p className="m-0"><span className="text-secondary">Brand:</span> No Brand <span
                                                        className="text-secondary">|</span> More light works from no Brand</p>
                                                    <hr className="text-secondary h-length" />
                                                </div>


                                            </div>
                                            <div className="row ">
                                                <p className="item-rs py-0 my-0">Rs.460</p>
                                                <p className="py-0 my-0"><span className="discount text-secondary cut">Rs.1360</span>
                                                    -70%</p>

                                                <hr className="text-secondary mx-2 h-length" />
                                            </div>

                                            {/* <!-- choice --> */}

                                            <div className="row ">

                                            </div>
                                            <div className="row">

                                            </div>
                                            <div className="row">

                                            </div>
                                            <div className="row">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-3 text-secondary">Quantity</div>
                                                        <div className="col-9 d-flex flex-row">
                                                            <button className="incre-btn">-</button>
                                                            <div className="d-flex align-items-center mx-3">44</div>
                                                            <button className="incre-btn">+</button>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-5 p-0 m-2">
                                                            <button className="w-100 p-2 border-none buyNow">Buy Now</button>
                                                        </div>
                                                        <div className="col-5 p-0 m-2">
                                                            <button className="w-100 p-2 border-none addtocard">Add to Cart</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3 service">
                                <div className="row delivery-header mt-3">
                                    <div className="col-10 text-secondary d-tiny">
                                        Delivery
                                    </div>
                                    <div className="col-2 text-secondary">
                                        <a className="text-decoration-none text-secondary" href="#">ⓘ</a>
                                    </div>
                                </div>
                                <div className="row address">
                                    <div className="col-9 address-text"><i className="bi bi-map"></i>
                                        Bagmati, Kathmandu Metro city</div>
                                    <div className="col-3">
                                        <a href="" className="text-decoration-none change">CHANGE</a>
                                    </div>

                                </div>

                                <div className="row my-3">
                                    <div className="col-9">
                                        <div>
                                            <h6 className="line-h">Standard Delivery <span className="small">21 july</span></h6>
                                        </div>
                                        <div className="text-secondary tiny robo"> 5 days</div>

                                    </div>
                                    <div className="col-3">
                                        <h6>Rs.70</h6>
                                    </div>
                                </div>

                                <div className="row my-3">
                                    <div className="robo cash">
                                        Cash on Delivery Available !
                                    </div>
                                </div>
                                <div className="row my-4">
                                    <div className="col bg-gray service">
                                        <div className="row delivery-header mt-3">
                                            <div className="col-10 text-secondary d-tiny">
                                                Service
                                            </div>
                                            <div className="col-2 text-secondary">
                                                <a className="text-decoration-none text-secondary" href="#">ⓘ</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row i-brand my-2">
                                    <div className="col-1">&#10059;</div>
                                    <div className="col-11 ">
                                        <div className="tbrand">100% Authentic from Trusted Brand</div>
                                        <div className="text-secondary tback">or Get 2x your money Back</div>
                                    </div>
                                </div>
                                <div className="row i-brand my-2">
                                    <div className="col-1">&#10059;</div>
                                    <div className="col-11 ">
                                        <div className="tbrand">14 days free and easy return</div>
                                        <div className="text-secondary tback">Change of mind is not applicable</div>
                                    </div>
                                </div>
                                <div className="row i-warrenty my-2">
                                    <div className="col-1">&#10059;</div>
                                    <div className="col-11">
                                        <div className="i-brand">1 Years warrenty</div>
                                    </div>
                                </div>
                                <div className="row w-line">

                                </div>

                                <div className="row">
                                    <div className="col-7">
                                        <div className="d-tiny robo text-secondary">Sold by</div>
                                        <div>Sky Tech</div>
                                    </div>
                                </div>
                            </div>
                            </div>

                           
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Item

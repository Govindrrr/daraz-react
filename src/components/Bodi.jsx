//slider and main
import '../index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
const Bodi = () => {

    return (
        <>
            <div className="container bg-gray">
                <div className="container-fluid">
                    <div className="container-fluid">
                        <div className="row">

                            <div className="container-fluid my-3">
                                <div className="row w-100">
                                    <div className="col-3">
                                        <div className="container-fluid">
                                            <ul className="border-r category bg-white p-2">

                                                <li className="list-unstyled">

                                                    <a className="text-decoration-none text-secondary c-text"
                                                        href="#">Women's
                                                        Fashion</a>

                                                    <ul id="submenu">

                                                        <li className="list-unstyled">
                                                            <a className="text-decoration-none text-secondary c-text"
                                                                href="">Clothing</a>
                                                            <ul id="submenu2">
                                                                <li className="list-unstyled">
                                                                    <div className="container-fluid d-flex">
                                                                        <div className="row w-100">
                                                                            <div className="col d-flex justify-content-between">
                                                                                <div className="text-center">
                                                                                    <img src="./img/shirt.jpg" alt=""className="border-round width-55"/>
                                                                                    <p>jeans</p>
                                                                                </div>

                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="list-unstyled"><a
                                                            className="text-decoration-none text-secondary c-text">
                                                            Traditional
                                                            Clothing</a></li>
                                                        <li className="list-unstyled"><a
                                                            className="text-decoration-none text-secondary c-text">
                                                            Women's
                                                            Bags</a>
                                                        </li>
                                                        <li className="list-unstyled"><a
                                                            className="text-decoration-none text-secondary c-text">
                                                            Shoes</a>
                                                        </li>
                                                        <li className="list-unstyled"><a
                                                            className="text-decoration-none text-secondary c-text">
                                                            Accesories</a></li>
                                                    </ul>
                                                </li>
                                                <li className="list-unstyled"><a
                                                    className="text-decoration-none text-secondary c-text"
                                                    href="#">Health & Beauty</a></li>
                                                <li className="list-unstyled"><a
                                                    className="text-decoration-none text-secondary c-text"
                                                    href="#">Men's Fashion</a></li>
                                                <li className="list-unstyled"><a
                                                    className="text-decoration-none text-secondary c-text"
                                                    href="#">Watches & Accessories</a></li>
                                                <li className="list-unstyled"><a
                                                    className="text-decoration-none text-secondary c-text"
                                                    href="#">Electronic Devices</a></li>
                                                <li className="list-unstyled"><a
                                                    className="text-decoration-none text-secondary c-text" href="#">TV &
                                                    Home Appliances</a></li>
                                                <li className="list-unstyled"><a
                                                    className="text-decoration-none text-secondary c-text"
                                                    href="#">Electronic Accessories</a></li>
                                                <li className="list-unstyled"><a
                                                    className="text-decoration-none text-secondary c-text"
                                                    href="#">Groceries & Pets</a></li>
                                                <li className="list-unstyled"><a
                                                    className="text-decoration-none text-secondary c-text"
                                                    href="#">Babies & Toys</a></li>
                                                <li className="list-unstyled"><a
                                                    className="text-decoration-none text-secondary c-text" href="#">Home
                                                    & Lifestyle</a></li>
                                                <li className="list-unstyled"><a
                                                    className="text-decoration-none text-secondary c-text"
                                                    href="#">Sports & Outdoor</a></li>
                                                <li className="list-unstyled"><a
                                                    className="text-decoration-none text-secondary c-text"
                                                    href="#">Motors, Tools & DIY</a></li>

                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-9 border-r p-0 m-0">
                                        <div id="carouselExampleIndicators" className="carousel slide">
                                            <div className="carousel-indicators">
                                                <button type="button" data-bs-target="#carouselExampleIndicators"
                                                    data-bs-slide-to="0" className="active" aria-current="true"
                                                    aria-label="Slide 1"></button>
                                                <button type="button" data-bs-target="#carouselExampleIndicators"
                                                    data-bs-slide-to="1" aria-label="Slide 2"></button>
                                                <button type="button" data-bs-target="#carouselExampleIndicators"
                                                    data-bs-slide-to="2" aria-label="Slide 3"></button>
                                            </div>
                                            <div className="carousel-inner border-r">
                                                <div className="carousel-item active">
                                                    <img src="./img/slidder2.jpg" className="d-block img-fit" alt="..."
                                                        width="100%" />
                                                </div>
                                            </div>
                                            <button className="carousel-control-prev" type="button"
                                                data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span className="visually-hidden">Previous</span>
                                            </button>
                                            <button className="carousel-control-next" type="button"
                                                data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span className="visually-hidden">Next</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col">
                                        <div className="container">
                                            <div className="row h-100">
                                                <div className="col position-relative">
                                                    <div className="container m-0 p-0 polygon bg-white border-r">

                                                        <div className="row h-100">
                                                            <div className="col-2 line-line">
                                                                <h5 className="h5-color">Limited Usage</h5>
                                                            </div>
                                                            <div className="col-9 px-3 d-flex justify-content-between">
                                                                <div className="collect">
                                                                    <h2 className="off p-2">
                                                                        100% Off
                                                                    </h2>

                                                                    <h5>Min.Spend Rs.600</h5>
                                                                    <h5>Capped at Rs.110</h5>
                                                                    <h5>Valid Till 31 July 2024</h5>
                                                                </div>
                                                                <div className="collect">
                                                                    <h4 className="text-end tc p-1">T&C</h4>
                                                                    <h4 className="cn p-2">Collect Now</h4>
                                                                </div>
                                                            </div>
                                                            <div className="col-1"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

            
                        <div className="row">
                            <div className="col">
                                <div className="container-fluid">
                                    <p className="topi mx-2 my-1">Categories</p>
                                    <div className="row mx-1">
                                        <div className="col">
                                            <div className="row border-b">
                                                <div className="col-6">
                                                    <div className="row">
                                                        <div className="col-3 bg-white b-shadow border-l">
                                                            <div className="text-center">
                                                                <img src="./img/hand.jpg" alt="" width="90" />
                                                                <p className="mt-3">Gyms</p>
                                                            </div>
                                                        </div>
                                                        <div className="col-3 bg-white b-shadow border-l">
                                                            <div className="text-center">
                                                                <img src="./img/hand.jpg" alt="" width="90" />
                                                                <p className="mt-3">Gyms</p>
                                                            </div>
                                                        </div>
                                                        <div className="col-3 bg-white b-shadow border-l">
                                                            <div className="text-center">
                                                                <img src="./img/hand.jpg" alt="" width="90" />
                                                                <p className="mt-3">Gyms</p>
                                                            </div>
                                                        </div>
                                                        <div className="col-3 bg-white b-shadow border-l">
                                                            <div className="text-center">
                                                                <img src="./img/hand.jpg" alt="" width="90" />
                                                                <p className="mt-3">Gyms</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row border-b">
            
                                            </div>

                                        </div>
                                    </div>



          
                                    <div className="row mt-5 widthh">
                                        <div className="col">
                                            <p className="topi m-1">Flesh Sale</p>
                                            <div className="showM bg-white d-flex justify-content-between hrr">
                                                <div className="d-flex">
                                                    <p className="orange-text p-2">On sale Now</p>
                                                </div>
                                                <button className="p-1 m-2 bg-white showmore">SHOP MORE</button>
                                            </div>




                                            <div className="flesh-sale bg-white d-flex justify-content-center h-315">
                                                <div className="row w-100">

                                                       {/*/item1*/}
                                                    <div className="col-2 b-shadow h-300">
                                                        <div className="img my-2 h-60p">
                                                            <img src="./img/earbud.jpg" alt="" width="180px" height="80%" />
                                                        </div>
                                                        <div className="price">
                                                            <p className="price spacing m-0 p-0">Good quality Airbud, best
                                                                for music<br />
                                                                <span className="orange-text">RS.5000</span>
                                                            </p>
                                                            <span
                                                                className="cut text-secondary discount">Rs.6000</span><span
                                                                    className="discount"> -65%</span>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

             
                        <div className="row">

                            <div className="col">
                                <div className="container">
                                    <div className="row my-4">
                                        <div className="col">
                                            <div className="row ">
                                                <span className="topi py-2">Daraz Mall</span>
                                                <div className="col-2 b-shadow p-0 mx-2 width-190">
                                                    <div className="image w-100">
                                                        <img src="./img/mall1..jpg" alt="" width="100%" />
                                                    </div>
                                                    <div className="absolute width-55">
                                                        <img src="./img/ab.png" alt="" width="100%" />
                                                    </div>
                                                    <div className="brand text-center bg-white p-5">
                                                        xxxx
                                                    </div>
                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

               
                        <div className="row">
                            <div className="col">
                                <div className="container">
                                    <div className="row my-3">
                                        <div className="col">
                                            <div className="row ">
                                                <span className="topi py-2">Just For You</span>

                                        {/* item*/}
                                                <div className="col-2 b-shadow p-0 mx-2 mb-3 width-190">
                                                    <div className="image w-100">
                                                        <img src="./img/watch.jpg" alt="" width="100%" />
                                                    </div>

                                                    <div className="bg-white p-3">
                                                        <div className="price">
                                                            <p className="price spacing m-0 p-0">Good quality Airbud, best
                                                                for music<br />
                                                                <span className="orange-text">RS.5000</span>
                                                            </p>
                                                            <span
                                                                className="cut text-secondary discount">Rs.6000</span><span
                                                                    className="discount"> -65%</span>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>



            <div className="container-fluid bg-gray">
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4 text-center m-3">
                        <button className="orange-border p-2 load">LOAD MORE</button>
                    </div>
                    <div className="col-4"></div>
                </div>
            </div>

        </>
    )
}

export default Bodi
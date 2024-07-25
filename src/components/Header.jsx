import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
    return (
       <>
       <div className="full bg-gray">
				<div className="container-fluid-full bg-gray">
					<div className="container-fluid bg-orange">
						<div className="container d-flex justify-content-center">
							<div className="row widthh">
								<nav className="nav1 px-3 container-fluid">
									<div className="row">
										<div className="col-10 p-0">
											<ul className="d-flex justify-content-start align-items-start p-0 m-0">
												<li className="mx-2 list-unstyled"><a className="text-decoration-none h-text"
													href="">Become
													a
													Seller</a></li>
												<li className="mx-2 list-unstyled"><a className="text-decoration-none h-text"
													href="">Recharge &
													Payment</a></li>
												<li className="mx-2 list-unstyled"><a className="text-decoration-none h-text"
													href="">Help
													and support</a></li>
												<li className="mx-2 list-unstyled"><a className="text-decoration-none h-text"
													href="">Daraz
													Logistics Partnar</a></li>
											</ul>
										</div>
										<div className="col-2 d-flex justify-content-end p-0">
											<li className="list-unstyled mx-2"><a className="text-decoration-none h-text nav-h"
												id="color" href=""><span className="daraz-color">Save More On App</span></a>
											</li>
										</div>
									</div>
									<div className="row align-items-center">
										<div className="col-2 p-0">
											<div className="row">
												<div className="col mx-2">
													<h1 className="logo"> Daraz</h1>

												</div>
											</div>
										</div>
										<div className="col-7">
											<div className="row">
												<div className="col bg-white d-flex justify-content-between border-r my-3">
													<input className="bg-white border-r border-none outline p-2" type="text" id=""
														name="search" placeholder="Search in Daraz" />
													<button className="bg-none border-none p-2" id="btn">🔍</button>
												</div>
											</div>
										</div>
										<div className="col-3 d-flex justify-content-end p-0">
											<div className="row">
												<div className="col mx-2">
													<button className="m-2 bg-none border-none text-light f-bold">Sign up</button>
													<button className="m-2 bg-none border-none text-light f-bold">Log in</button>
													<select className="m-2 bg-none border-none text-light f-bold" name="Nepal" id="">
														<option value="Nep">EN</option>
														<option value="Nep">Nepali</option>
														<option value="Eng">English</option>
													</select>
													<button className="my-2 text-light f-bold bg-none border-none">Cart</button>
												</div>
											</div>
										</div>
									</div>

								</nav>
							</div>
						</div>
					</div>
				</div>
			</div>
       </>
    )
}

export default Header

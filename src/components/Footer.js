import React from 'react';
import logo from '../img/logo.png';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer_m position-relative">
		<div className="footer_m1">
			<section id="footer" className="p_4 bg_blue">
				<div className="container-xl">
					<div className="footer_1 row">
						<div className="col-md-8">
							<div className="footer_1l">
								<h4 className="text-white mb-4">About Us</h4>
								<p className="text-light">Connecticut Telugu Community of USA(CTCUS) is a non-profit organization formed in Connecticut USA to bring our Telugu communities abroad and in India closer. CTCUS aims preserving cultural values, supporting educational and social welfare, promoting economic growth, and building a global network of unity and support.  </p>
								<ul className="mb-0 flex_box">
									<li className="d-flex text-light"><a className="me-3" href="tel:+14757462197"><i
												className="fa fa-phone "></i>+1 475 746 2197</a>  </li>
									<li className="d-flex text-light mt-3"><a className="me-3"  href="mailto:support@ctcus.org"><i
												className="fa fa-envelope "></i>support@ctcus.org</a>  </li>
									<li className="d-flex text-light mt-3"><a className="me-3"><i
												className="fa fa-map-marker"></i>497 High Ridge Rd, Stamford CT 06905, USA</a></li>
								</ul>
							</div>
						</div>
						<div className="col-md-4">
							<div className="footer_1l">
								<h4 className="text-white mb-4">Information</h4>
								<div className="row footer_3ism">
									<h6 className="col-md-12 col-6"><i
											className="fa fa-chevron-right me-1 font_13 align-middle"></i> 
											<Link className="text-light a_tag" aria-current="page" to="/">
											Home
											</Link>
											</h6>
									<h6 className="col-md-12 col-6 mt-2"><i
											className="fa fa-chevron-right me-1 font_13 align-middle"></i> 
											<Link className="text-light a_tag" aria-current="page" to="/about">
											About Us
											</Link>
											</h6>
									<h6 className="col-md-12 col-6 mt-2"><i
											className="fa fa-chevron-right me-1 font_13 align-middle"></i>
											<Link className="text-light a_tag" aria-current="page" to="/events">
											Events
											</Link></h6>
									<h6 className="col-md-12 col-6 mt-2"><i
											className="fa fa-chevron-right me-1 font_13 align-middle"></i>
											<Link className="text-light a_tag" aria-current="page" to="/leadership">
											LeaderShip
											</Link>
											</h6>
									<h6 className="col-md-12 col-6 mt-2 mb-0"><i
											className="fa fa-chevron-right me-1 font_13 align-middle"></i> <Link className="text-light a_tag" aria-current="page" to="/contact">
											Contact Us
											</Link></h6>
								</div>
							</div>
						</div>
						
						{/* <div className="col-md-4">
							<div className="footer_1l">
								<h4 className="text-white mb-4">Recent Posts</h4>
								<div className="footer_1li row">
									<div className="col-md-3 col-4">
										<div className="footer_1lil">
											<div className="grid clearfix">
												<figure className="effect-jazz mb-0">
													<a href="#"><img src="img/13.jpg" className="w-100" alt="img25"/></a>
												</figure>
											</div>
										</div>
									</div>
									<div className="col-md-9 col-8">
										<div className="footer_1lir">
											<h6 className="font_13 text-white"><i className="fa fa-calendar col_oran me-1"></i>
												October 26, 2020</h6>
											<h5 className="mb-0 fs-6"><a className="text-light a_tag" href="#">All we’ve
													discovered by now</a></h5>
										</div>
									</div>
								</div>
								<div className="footer_1li row mt-4">
									<div className="col-md-3 col-4">
										<div className="footer_1lil">
											<div className="grid clearfix">
												<figure className="effect-jazz mb-0">
													<a href="#"><img src="img/14.jpg" className="w-100" alt="img25"/></a>
												</figure>
											</div>
										</div>
									</div>
									<div className="col-md-9 col-8">
										<div className="footer_1lir">
											<h6 className="font_13 text-white"><i className="fa fa-calendar col_oran me-1"></i>
												October 28, 2020</h6>
											<h5 className="mb-0 fs-6"><a className="text-light a_tag" href="#">We Who Believe In
													God</a></h5>
										</div>
									</div>
								</div>
								<div className="footer_1li row mt-4">
									<div className="col-md-3 col-4">
										<div className="footer_1lil">
											<div className="grid clearfix">
												<figure className="effect-jazz mb-0">
													<a href="#"><img src="img/15.jpg" className="w-100" alt="img25"/></a>
												</figure>
											</div>
										</div>
									</div>
									<div className="col-md-9 col-8">
										<div className="footer_1lir">
											<h6 className="font_13 text-white"><i className="fa fa-calendar col_oran me-1"></i>
												October 29, 2020</h6>
											<h5 className="mb-0 fs-6"><a className="text-light a_tag" href="#">Expecting new
													issued cases</a></h5>
										</div>
									</div>
								</div>
							</div>
						</div> */}
					</div>
				</div>
			</section>

			<section id="footer_b" className="bg_blue">
				<div className="container-xl">
					<div className="footer_b1 row">
						<div className="col-md-4 item-h-center">
							<div className="footer_b1l ">
								<p className="mb-0 text-light">© 2025 Connecticut Telugu Community. All Rights Reserved | Design by <a
										className=" fw-bold" href="https://myportfolio-f94da.web.app/">Senthilkumar S</a>
								</p>
							</div>
						</div>
						<div className="col-md-4">
							<div className="footer_b1m p-4 bg-white">
								<h3 className="mb-0"><a href="index.html"><img src={logo} alt="abc" className="w-100 footer-logo"  />
								 <br/>
										<span className="fw-normal font_14 text-muted">Connecticut Telugu Community</span>
									</a></h3>
							</div>
						</div>
						<div className="col-md-4 item-h-center" style={{justifyContent: 'flex-end'}}>
							<div className="footer_b1r text-end">
								<ul className="mb-0">
									<li className="d-inline-block"><a className="d-block text-center"  href="https://www.facebook.com/people/Ctcus-Ctcus/pfbid0aDnKM73WrX7DxoAvyh7bBCVacqWD9oJAUCuQEG1eqNWZbSrLXrBPJEj5rE92MUKYl/"><i
												className="fa-brands fa-facebook-f"></i></a></li>
									<li className="d-inline-block ms-2"><a className="d-block text-center" href="https://chat.whatsapp.com/Ks3pkbPUmz1CPw3xprTTFK"> <i
												className="fa-brands fa-whatsapp"></i> </a></li>
									<li className="d-inline-block ms-2"><a className="d-block text-center" href="https://www.instagram.com/ctcusorg/?igsh=dnBzZzY0cWgzcnli#"><i
												className="fa-brands fa-instagram"></i></a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
		{/* <div className="footer_m2 position-absolute w-100">
			<section id="subs" className="p_3">
				<div className="container-xl">
					<div className="subs1 row mx-0 bg-white p-5 px-3 shadow_box">
						<div className="col-md-6">
							<div className="subs1l">
								<h2>Subscribe To Our Newsletter</h2>
								<p className="mt-3 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
									eiusmod tempor incididunt ut labore et dolore</p>
							</div>
						</div>
						<div className="col-md-6">
							<div className="subs1r mt-4">
								<div className="input-group">
									<input type="text" className="form-control font_14" placeholder="Your Email"/>
									<span className="input-group-btn">
										<button className="btn btn-primary bg_oran border-0 rounded-0 p-3 px-4"
											type="button">
											Subscribe </button>
									</span>
								</div>
							</div>
						</div>
					</div>

				</div>
			</section>
		</div> */}
	</div>
  )
}

export default Footer
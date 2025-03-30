import React from 'react';
import logo from '../img/logo.png';

function Header() {
  return (
    <div className="main_1 position-absolute top-0 w-100">
			<section id="top" className="pt-3 pb-3">
				<div className="container-xl">
					<div className="row top_1">
						<div className="col-md-4">
							<div className="top_1l">
								<ul className="mb-0 font_14">
									<li className="d-inline-block"><a className="text-white a_tag" href="#"><i
												className="fa fa-phone me-1 col_oran"></i> +123) 123 4567 890</a></li>
									<li className="d-inline-block ms-3"><a className="text-white a_tag" href="#"><i
												className="fa fa-envelope me-1 col_oran"></i> support@ctcus.org</a></li>
								</ul>
							</div>
						</div>
						<div className="col-md-4">
							<div className="top_1m text-center">
								{/* <ul className="mb-0 font_14">
									<li className="d-inline-block"><a className="text-white a_tag" href="#"> EVENTS</a></li>
									<li className="d-inline-block ms-3"><a className="text-white a_tag" href="#"> SERMONS</a>
									</li>
									<li className="d-inline-block ms-3"><a className="text-white a_tag" href="#"> MINISTRIES</a>
									</li>
								</ul> */}
							</div>
						</div>
						<div className="col-md-4">
							<div className="top_1r text-end">
								<ul className="mb-0 fs-6">
									<li className="d-inline-block"><a className="text-white fw-bold a_tag" target='blank' href="https://www.facebook.com/people/Ctcus-Ctcus/pfbid0aDnKM73WrX7DxoAvyh7bBCVacqWD9oJAUCuQEG1eqNWZbSrLXrBPJEj5rE92MUKYl/"> <i
												className="fa-brands fa-facebook-f"></i> </a></li>
									<li className="d-inline-block ms-2"><a className="text-white fw-bold a_tag" target='blank' href="https://www.instagram.com/ctcusorg/?igsh=dnBzZzY0cWgzcnli#
"> <i
												className="fa-brands fa-instagram"></i> </a></li>
									<li className="d-inline-block ms-2"><a className="text-white fw-bold a_tag" href="https://chat.whatsapp.com/Ks3pkbPUmz1CPw3xprTTFK"> <i
												className="fa-brands fa-whatsapp"></i> </a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section id="header">
				<nav className="navbar navbar-expand-md navbar-light  p-0 bg-white" id="navbar_sticky">
					<div className="container-xl">
						<a className="p-0 navbar-brand fw-bold me-0  text-black" href="index.html">
                            {/* <i
								className="fa-solid fa-om me-1 col_oran"></i> Krishna <br/>
							<span className="fw-normal font_14 text-muted">Mega Temple</span> */}
                            <img src={logo} alt="abc" className="w-100 logo" />
						</a>
						<button className="navbar-toggler" type="button" data-bs-toggle="collapse"
							data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
							aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse" id="navbarSupportedContent">
							<ul className="navbar-nav mb-0 ms-auto">
								<li className="nav-item">
									<a className="nav-link active" aria-current="page" href="index.html">Home</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="about.html">About </a>
								</li>
                                <li className="nav-item">
									<a className="nav-link" href="about.html">Events </a>
								</li>
                                <li className="nav-item">
									<a className="nav-link" href="about.html">Leadership Team</a>
								</li>
                                <li className="nav-item">
									<a className="nav-link" href="about.html">Membership </a>
								</li>
                                <li className="nav-item">
									<a className="nav-link" href="about.html">Contact Us </a>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</section>
		</div>
  )
}

export default Header
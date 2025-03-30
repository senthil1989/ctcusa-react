import React from 'react';
import img3 from '../img/1003.jpg';
import img2 from '../img/1002.jpg';
import img1 from '../img/1001.png';

function Slider() {
  return (
    <div className="main_2">
			<section id="center" className="center_home">
				<div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
					<div className="carousel-indicators">
						<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0"
							className="active" aria-label="Slide 1" aria-current="true"></button>
						<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
							aria-label="Slide 2" className=""></button>
						<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
							aria-label="Slide 3" className=""></button>
					</div>
					<div className="bg_back w-100 h-100 position-absolute center_ht"></div>

					<div className="carousel-inner">
						<div className="carousel-item active">
							<img src={img1} className="d-block w-100" alt="..."/>
							{/* <div className="center_hm1 position-absolute">
								<img src="img/43.png" alt="abc"/>
							</div>
							<div className="carousel-caption carousel-caption1 d-md-block">
								<h1 className="text-white text-uppercase font_50">God give us power to believe</h1>
								<p className="mt-3 text-light">Ac mi duis mollis. Sapiente? Scelerisque quae, penatibus?
									Suscipit className corporis nostra rem quos voluptatibus habitant? Fames, vivamus minim
									nemo enim, gravida lobortis quasi, eum.</p>
								<ul className="mb-0 mt-4">
									<li className="d-inline-block"><a className="button_2" href="#">Buy Now <i
												className="fa fa-arrow-right ms-1"></i></a></li>
									<li className="d-inline-block ms-3"><a className="button_3" href="#">Live Stream <i
												className="fa fa-arrow-right ms-1"></i></a></li>
								</ul>
							</div> */}
						</div>
						<div className="carousel-item">
							<img src={img2} className="d-block w-100" alt="..."/>
							{/* <div className="center_hm1 position-absolute">
								<img src="img/43.png" alt="abc"/>
							</div>

							<div className="carousel-caption carousel-caption2 d-md-block">
								<h1 className="text-white text-uppercase font_50">alias veritatis nostrum iste sed </h1>
								<p className="mt-3 text-light">Ac mi duis mollis. Sapiente? Scelerisque quae, penatibus?
									Suscipit className corporis nostra rem quos voluptatibus habitant? Fames, vivamus minim
									nemo enim, gravida lobortis quasi, eum.</p>
								<ul className="mb-0 mt-4">
									<li className="d-inline-block"><a className="button_2" href="#">Buy Now <i
												className="fa fa-arrow-right ms-1"></i></a></li>
									<li className="d-inline-block ms-3"><a className="button_3" href="#">Live Stream <i
												className="fa fa-arrow-right ms-1"></i></a></li>
								</ul>
							</div> */}
						</div>
						<div className="carousel-item">
							<img src={img3} className="d-block w-100" alt="..."/>
							{/* <div className="center_hm1 position-absolute">
								<img src="img/43.png" alt="abc"/>
							</div>

							<div className="carousel-caption carousel-caption3 d-md-block">
								<h1 className="text-white text-uppercase font_50">Lorem ipsum dolor sit, amet</h1>
								<p className="mt-3 text-light">Ac mi duis mollis. Sapiente? Scelerisque quae, penatibus?
									Suscipit className corporis nostra rem quos voluptatibus habitant? Fames, vivamus minim
									nemo enim, gravida lobortis quasi, eum.</p>
								<ul className="mb-0 mt-4">
									<li className="d-inline-block"><a className="button_2" href="#">Buy Now <i
												className="fa fa-arrow-right ms-1"></i></a></li>
									<li className="d-inline-block ms-3"><a className="button_3" href="#">Live Stream <i
												className="fa fa-arrow-right ms-1"></i></a></li>
								</ul>
							</div> */}
						</div>
					</div>
					<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
						data-bs-slide="prev">
						<span className="carousel-control-prev-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Previous</span>
					</button>
					<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
						data-bs-slide="next">
						<span className="carousel-control-next-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Next</span>
					</button>
				</div>
			</section>
		</div>
  )
}

export default Slider
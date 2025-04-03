import React from "react";
import img1 from "../img/2023_Events/img1.jpg";

function Home() {
  return (
    <>
      <section id="about_h" className="p_4">
        <div className="container-xl">
          <div className="row about_h2 mt-5">
            {/* <div className="col-md-5">
		  <div className="about_h2l text-center float-end">
            <h1 className="d-inline-block bg_blue text-white rounded-circle text-center">25<span className="fs-6">+</span> <br/> <span className="fs-6 fw-normal">Join Our temple</span></h1>
		  </div>
		</div> */}
            <div className="col-md-12">
              <div className="about_h2r">
                <h1 className="mt-3 font_50">
                  Message from the Leadership Team of the Telugu Community
                </h1>
                <p className="mt-3 p-3">
                  Dear Members of the Telugu Community,
                </p>
                <div className="about_h2ri row mt-4">
                  <div className="col-md-6 col-sm-6">
                    <div className="about_h2ril">
                      <div className="about_h2rili row">
                        <div className="col-md-1">
                          <div className="about_h2rilil">
                            <span className="d-inline-block col_oran fs-2">
                              <i className="fa-solid fa-hands-praying"></i>
                            </span>
                          </div>
                        </div>
                        <div className="col-md-11">
                          <div className="about_h2rilir">
                            <h4>Helping Hand</h4>
                            <p className="border-0">
                              Our Telugu community thrives on mutual support and
                              collective growth. We are committed to preserving
                              and promoting our rich traditions, including the
                              Telugu language, arts, festivals, and customs.
                              Through cultural events, educational programs, and
                              social initiatives, we ensure that future
                              generations continue to experience and cherish our
                              heritage.
                              <br />
                              <br />
                              As a community, we actively provide opportunities
                              such as networking events, educational
                              scholarships, and social welfare programs to
                              empower individuals to reach their fullest
                              potential. By working together, we create an
                              environment where everyone feels valued,
                              supported, and encouraged to succeed
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <div className="about_h2ril">
                      <div className="about_h2rili row">
                        <div className="col-md-1">
                          <div className="about_h2rilil">
                            <span className="d-inline-block col_oran fs-2">
                              <i className="fa-solid fa-handshake-angle"></i>
                            </span>
                          </div>
                        </div>
                        <div className="col-md-11">
                          <div className="about_h2rilir">
                            <h4>Open Hearts</h4>
                            <p className="border-0">
                              Beyond strengthening our local bonds, we recognize
                              the importance of fostering global connections
                              among Telugu people worldwide. By uniting across
                              borders, we ensure that the Telugu spirit remains
                              vibrant and inspiring for future generations.
                              <br />
                              <br />
                              Our shared values—family, education, service, and
                              cultural pride—guide our efforts in building a
                              compassionate and inclusive community. Every
                              contribution, participation, and engagement helps
                              reinforce our unity, creating a lasting legacy of
                              kindness, resilience, and strength.
                              <br />
                              <br />
                              Let’s continue to work together, opening our
                              hearts to one another and shaping a brighter
                              future for our community.
                            </p>
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
      </section>
      <section id="minist" className="p_4 bg-light">
        <div className="container-xl">
          <div className="donate_1 row mb-5">
            <div className="col-md-4">
              <div className="donate_1l">
                <h1 className="mb-0 font_50 mt-3">Our Events</h1>
              </div>
            </div>
            <div className="col-md-8">
              <div className="donate_1r text-end">
                <ul className="nav nav-tabs mb-0">
                  <li className="nav-item d-inline-block">
                    <a
                      href="#profile1"
                      data-bs-toggle="tab"
                      aria-expanded="true"
                      className="nav-link active"
                    >
                      <span className="d-md-block"> All</span>
                    </a>
                  </li>

                  <li className="nav-item d-inline-block">
                    <a
                      href="#profile2"
                      data-bs-toggle="tab"
                      aria-expanded="true"
                      className="nav-link"
                    >
                      <span className="d-md-block"> Temple</span>
                    </a>
                  </li>
                  <li className="nav-item d-inline-block">
                    <a
                      href="#profile3"
                      data-bs-toggle="tab"
                      aria-expanded="true"
                      className="nav-link"
                    >
                      <span className="d-md-block"> Campus</span>
                    </a>
                  </li>

                  <li className="nav-item d-inline-block">
                    <a
                      href="#profile4"
                      data-bs-toggle="tab"
                      aria-expanded="true"
                      className="nav-link"
                    >
                      <span className="d-md-block"> Relations</span>
                    </a>
                  </li>

                  <li className="nav-item d-inline-block">
                    <a
                      href="#profile5"
                      data-bs-toggle="tab"
                      aria-expanded="true"
                      className="nav-link"
                    >
                      <span className="d-md-block"> Religion</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="minist_1 row">
            <div className="tab-content">
              <div className="tab-pane active" id="profile1">
                <div className="minist_1m row">
                  <div className="col-md-4">
                    <div className="minist_1i position-relative">
                      <div className="minist_1i1">
                        <div className="grid clearfix">
                          <figure className="effect-jazz mb-0">
                            <a href="#">
                              <img
                                src="img\2023_Events\img1.jpg"
                                className="w-100"
                                alt="img1"
                              />
                            </a>
                          </figure>
                        </div>
                      </div>
                      <div className="minist_1i2 position-absolute top-0 p-3"></div>
                      <div className="minist_1i3  p-3 bg_back position-absolute  w-100">
                        <h4>
                          <a className="text-white a_tag" href="#">
                            Lorem’s Ministry
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="minist_1i position-relative">
                      <div className="minist_1i1">
                        <div className="grid clearfix">
                          <figure className="effect-jazz mb-0">
                            <a href="#">
                              <img
                                src="img\2023_Events\img2.jpg"
                                className="w-100"
                                alt="img25"
                              />
                            </a>
                          </figure>
                        </div>
                      </div>
                      <div className="minist_1i2 position-absolute top-0 p-3"></div>
                      <div className="minist_1i3  p-3 bg_back position-absolute  w-100">
                        <h4>
                          <a className="text-white a_tag" href="#">
                            Ipsum’s Ministry
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="minist_1i position-relative">
                      <div className="minist_1i1">
                        <div className="grid clearfix">
                          <figure className="effect-jazz mb-0">
                            <a href="#">
                              <img
                                src="img\2023_Events\img3.jpg"
                                className="w-100"
                                alt="img25"
                              />
                            </a>
                          </figure>
                        </div>
                      </div>
                      <div className="minist_1i2 position-absolute top-0 p-3"></div>
                      <div className="minist_1i3  p-3 bg_back position-absolute  w-100">
                        <h4>
                          <a className="text-white a_tag" href="#">
                            Dolor’s Ministry
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="minist_1m row mt-4">
                  <div className="col-md-4">
                    <div className="minist_1i position-relative">
                      <div className="minist_1i1">
                        <div className="grid clearfix">
                          <figure className="effect-jazz mb-0">
                            <a href="#">
                              <img
                                src="img\2023_Events\img4.jpg"
                                className="w-100"
                                alt="img25"
                              />
                            </a>
                          </figure>
                        </div>
                      </div>
                      <div className="minist_1i2 position-absolute top-0 p-3"></div>
                      <div className="minist_1i3  p-3 bg_back position-absolute  w-100">
                        <h4>
                          <a className="text-white a_tag" href="#">
                            Web Ministry
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="minist_1i position-relative">
                      <div className="minist_1i1">
                        <div className="grid clearfix">
                          <figure className="effect-jazz mb-0">
                            <a href="#">
                              <img
                                src="img\2023_Events\img5.jpg"
                                className="w-100"
                                alt="img25"
                              />
                            </a>
                          </figure>
                        </div>
                      </div>
                      <div className="minist_1i2 position-absolute top-0 p-3"></div>
                      <div className="minist_1i3  p-3 bg_back position-absolute  w-100">
                        <h4>
                          <a className="text-white a_tag" href="#">
                            Help Ministry
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="minist_1i position-relative">
                      <div className="minist_1i1">
                        <div className="grid clearfix">
                          <figure className="effect-jazz mb-0">
                            <a href="#">
                              <img
                                src="img\2023_Events\img6.jpg"
                                className="w-100"
                                alt="img25"
                              />
                            </a>
                          </figure>
                        </div>
                      </div>
                      <div className="minist_1i2 position-absolute top-0 p-3"></div>
                      <div className="minist_1i3  p-3 bg_back position-absolute  w-100">
                        <h4>
                          <a className="text-white a_tag" href="#">
                            Event Ministry
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="minist_1m row mt-4">
                  <div className="col-md-4">
                    <div className="minist_1i position-relative">
                      <div className="minist_1i1">
                        <div className="grid clearfix">
                          <figure className="effect-jazz mb-0">
                            <a href="#">
                              <img
                                src="img\2023_Events\img7.jpg"
                                className="w-100"
                                alt="img25"
                              />
                            </a>
                          </figure>
                        </div>
                      </div>
                      <div className="minist_1i2 position-absolute top-0 p-3"></div>
                      <div className="minist_1i3  p-3 bg_back position-absolute  w-100">
                        <h4>
                          <a className="text-white a_tag" href="#">
                            Sed’s Ministry
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="minist_1i position-relative">
                      <div className="minist_1i1">
                        <div className="grid clearfix">
                          <figure className="effect-jazz mb-0">
                            <a href="#">
                              <img
                                src="img\2023_Events\img14.jpg"
                                className="w-100"
                                alt="img25"
                              />
                            </a>
                          </figure>
                        </div>
                      </div>
                      <div className="minist_1i2 position-absolute top-0 p-3"></div>
                      <div className="minist_1i3  p-3 bg_back position-absolute  w-100">
                        <h4>
                          <a className="text-white a_tag" href="#">
                            Amet’s Ministry
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="minist_1i position-relative">
                      <div className="minist_1i1">
                        <div className="grid clearfix">
                          <figure className="effect-jazz mb-0">
                            <a href="#">
                              <img
                                src="img\2023_Events\img9.jpg"
                                className="w-100"
                                alt="img25"
                              />
                            </a>
                          </figure>
                        </div>
                      </div>
                      <div className="minist_1i2 position-absolute top-0 p-3"></div>
                      <div className="minist_1i3  p-3 bg_back position-absolute  w-100">
                        <h4>
                          <a className="text-white a_tag" href="#">
                            Temple Ministry
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tab-pane" id="profile2">
                <div className="minist_1m row">
                  <div className="col-md-4">
                    <div className="minist_1i position-relative">
                      <div className="minist_1i1">
                        <div className="grid clearfix">
                          <figure className="effect-jazz mb-0">
                            <a href="#">
                              <img
                                src="img/19.jpg"
                                className="w-100"
                                alt="img25"
                              />
                            </a>
                          </figure>
                        </div>
                      </div>
                      <div className="minist_1i2 position-absolute top-0 p-3"></div>
                      <div className="minist_1i3  p-3 bg_back position-absolute  w-100">
                        <h4>
                          <a className="text-white a_tag" href="#">
                            Sed’s Ministry
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="minist_1i position-relative">
                      <div className="minist_1i1">
                        <div className="grid clearfix">
                          <figure className="effect-jazz mb-0">
                            <a href="#">
                              <img
                                src="img/20.jpg"
                                className="w-100"
                                alt="img25"
                              />
                            </a>
                          </figure>
                        </div>
                      </div>
                      <div className="minist_1i2 position-absolute top-0 p-3"></div>
                      <div className="minist_1i3  p-3 bg_back position-absolute  w-100">
                        <h4>
                          <a className="text-white a_tag" href="#">
                            Amet’s Ministry
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="minist_1i position-relative">
                      <div className="minist_1i1">
                        <div className="grid clearfix">
                          <figure className="effect-jazz mb-0">
                            <a href="#">
                              <img
                                src="img/21.jpg"
                                className="w-100"
                                alt="img25"
                              />
                            </a>
                          </figure>
                        </div>
                      </div>
                      <div className="minist_1i2 position-absolute top-0 p-3"></div>
                      <div className="minist_1i3  p-3 bg_back position-absolute  w-100">
                        <h4>
                          <a className="text-white a_tag" href="#">
                            Temple Ministry
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tab-pane" id="profile3">
                <div className="minist_1m row">
                  <div className="col-md-4">
                    <div className="minist_1i position-relative">
                      <div className="minist_1i1">
                        <div className="grid clearfix">
                          <figure className="effect-jazz mb-0">
                            <a href="#">
                              <img
                                src="img/16.jpg"
                                className="w-100"
                                alt="img25"
                              />
                            </a>
                          </figure>
                        </div>
                      </div>
                      <div className="minist_1i2 position-absolute top-0 p-3"></div>
                      <div className="minist_1i3  p-3 bg_back position-absolute  w-100">
                        <h4>
                          <a className="text-white a_tag" href="#">
                            Web Ministry
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="minist_1i position-relative">
                      <div className="minist_1i1">
                        <div className="grid clearfix">
                          <figure className="effect-jazz mb-0">
                            <a href="#">
                              <img
                                src="img/17.jpg"
                                className="w-100"
                                alt="img25"
                              />
                            </a>
                          </figure>
                        </div>
                      </div>
                      <div className="minist_1i2 position-absolute top-0 p-3"></div>
                      <div className="minist_1i3  p-3 bg_back position-absolute  w-100">
                        <h4>
                          <a className="text-white a_tag" href="#">
                            Help Ministry
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="minist_1i position-relative">
                      <div className="minist_1i1">
                        <div className="grid clearfix">
                          <figure className="effect-jazz mb-0">
                            <a href="#">
                              <img
                                src="img/18.jpg"
                                className="w-100"
                                alt="img25"
                              />
                            </a>
                          </figure>
                        </div>
                      </div>
                      <div className="minist_1i2 position-absolute top-0 p-3"></div>
                      <div className="minist_1i3  p-3 bg_back position-absolute  w-100">
                        <h4>
                          <a className="text-white a_tag" href="#">
                            Event Ministry
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tab-pane" id="profile4">
                <div className="minist_1m row">
                  <div className="col-md-4">
                    <div className="minist_1i position-relative">
                      <div className="minist_1i1">
                        <div className="grid clearfix">
                          <figure className="effect-jazz mb-0">
                            <a href="#">
                              <img
                                src="img/13.jpg"
                                className="w-100"
                                alt="img25"
                              />
                            </a>
                          </figure>
                        </div>
                      </div>
                      <div className="minist_1i2 position-absolute top-0 p-3"></div>
                      <div className="minist_1i3  p-3 bg_back position-absolute  w-100">
                        <h4>
                          <a className="text-white a_tag" href="#">
                            Lorem’s Ministry
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="minist_1i position-relative">
                      <div className="minist_1i1">
                        <div className="grid clearfix">
                          <figure className="effect-jazz mb-0">
                            <a href="#">
                              <img
                                src="img/14.jpg"
                                className="w-100"
                                alt="img25"
                              />
                            </a>
                          </figure>
                        </div>
                      </div>
                      <div className="minist_1i2 position-absolute top-0 p-3"></div>
                      <div className="minist_1i3  p-3 bg_back position-absolute  w-100">
                        <h4>
                          <a className="text-white a_tag" href="#">
                            Ipsum’s Ministry
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="minist_1i position-relative">
                      <div className="minist_1i1">
                        <div className="grid clearfix">
                          <figure className="effect-jazz mb-0">
                            <a href="#">
                              <img
                                src="img/15.jpg"
                                className="w-100"
                                alt="img25"
                              />
                            </a>
                          </figure>
                        </div>
                      </div>
                      <div className="minist_1i2 position-absolute top-0 p-3"></div>
                      <div className="minist_1i3  p-3 bg_back position-absolute  w-100">
                        <h4>
                          <a className="text-white a_tag" href="#">
                            Dolor’s Ministry
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tab-pane" id="profile5">
                <div className="minist_1m row">
                  <div className="col-md-4">
                    <div className="minist_1i position-relative">
                      <div className="minist_1i1">
                        <div className="grid clearfix">
                          <figure className="effect-jazz mb-0">
                            <a href="#">
                              <img
                                src="img/19.jpg"
                                className="w-100"
                                alt="img25"
                              />
                            </a>
                          </figure>
                        </div>
                      </div>
                      <div className="minist_1i2 position-absolute top-0 p-3"></div>
                      <div className="minist_1i3  p-3 bg_back position-absolute  w-100">
                        <h4>
                          <a className="text-white a_tag" href="#">
                            Sed’s Ministry
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="minist_1i position-relative">
                      <div className="minist_1i1">
                        <div className="grid clearfix">
                          <figure className="effect-jazz mb-0">
                            <a href="#">
                              <img
                                src="img/20.jpg"
                                className="w-100"
                                alt="img25"
                              />
                            </a>
                          </figure>
                        </div>
                      </div>
                      <div className="minist_1i2 position-absolute top-0 p-3"></div>
                      <div className="minist_1i3  p-3 bg_back position-absolute  w-100">
                        <h4>
                          <a className="text-white a_tag" href="#">
                            Amet’s Ministry
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="minist_1i position-relative">
                      <div className="minist_1i1">
                        <div className="grid clearfix">
                          <figure className="effect-jazz mb-0">
                            <a href="#">
                              <img
                                src="img/21.jpg"
                                className="w-100"
                                alt="img25"
                              />
                            </a>
                          </figure>
                        </div>
                      </div>
                      <div className="minist_1i2 position-absolute top-0 p-3"></div>
                      <div className="minist_1i3  p-3 bg_back position-absolute  w-100">
                        <h4>
                          <a className="text-white a_tag" href="#">
                            Temple Ministry
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;

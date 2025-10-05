import "./App.css";
import Header from "./components/header";
import heroImage from "./assets/images/hero-img.png";
import serviceicon1 from "./assets/images/s1.png";
import serviceicon2 from "./assets/images/s2.png";
import serviceicon3 from "./assets/images/s3.png";
import serviceicon4 from "./assets/images/s4.png";
import serviceicon5 from "./assets/images/s5.png";
import serviceicon6 from "./assets/images/s6.png";
import appstoreImg from "./assets/images/appstore.png";
import sectionthreeImg from "./assets/images/s3-img.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

function App() {
  return (
    <>
      <main className="hero-section">
        <div className="container">
          <Header />
          <div className="heroslider-wrapper">
            <Swiper
              navigation={{
                nextEl: ".heroslide-next",
                prevEl: ".heroslide-prev",
              }}
              modules={[Navigation]}
              loop={true}
              className="heroslider"
            >
              <SwiperSlide>
                <div className="heroslide">
                  <img className="heroslide-img" src={heroImage} alt="image" />
                  <div className="heroslide-content">
                    <h1>Leading the Way in App Development Innovation</h1>
                    <p>
                      We build Android & iOS Mobile Apps that cater all your
                      business needs and take it on the next level.
                    </p>
                    <button className="heroslide-btn">Get a Free Quote</button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="heroslide">
                  <img className="heroslide-img" src={heroImage} alt="image" />
                  <div className="heroslide-content">
                    <h1>Leading the Way in App Development Innovation</h1>
                    <p>
                      We build Android & iOS Mobile Apps that cater all your
                      business needs and take it on the next level.
                    </p>
                    <button className="heroslide-btn">Get a Free Quote</button>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="heroslider-nav">
              <button className="heroslide-prev">
                <i className="fa-solid fa-arrow-left"></i>
              </button>
              <button className="heroslide-next">
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </main>
      <section className="section-one">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="sec1-heading">
                <span>Appicoders</span> – #<span>1</span>. Mobile App & Web
                Development Company in USA
              </h2>
            </div>
            <div className="col-lg-6">
              <p className="sec1-para">
                Welcome to Appicoders, your trusted partner for expert mobile
                app and web development. With over 10+ years of experience, we
                specialize in designing, developing, and marketing cutting-edge
                solutions for all major mobile platforms, including Android,
                iOS, and Windows.
              </p>
              <button className="sec1-btn">Read more</button>
            </div>
          </div>
        </div>
      </section>
      <section className="section-two">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="sec2-heading">Our Services</h2>
              <p className="sec2-para">Get to know about what we’re good at.</p>
              <ul className="service-grid">
                <li>
                  <img src={serviceicon1} alt="image" />
                  <div>
                    <h4>Custom Mobile Applications</h4>
                    <p>iOS, Android and Wearable Apps</p>
                  </div>
                </li>
                <li>
                  <img src={serviceicon2} alt="image" />
                  <div>
                    <h4>Artificial Intelligence</h4>
                    <p>Innovative AI & ML Solutions</p>
                  </div>
                </li>
                <li>
                  <img src={serviceicon3} alt="image" />
                  <div>
                    <h4>Custom Web Development</h4>
                    <p>Robust Webs, Progressive Web Apps</p>
                  </div>
                </li>
                <li>
                  <img src={serviceicon4} alt="image" />
                  <div>
                    <h4>Blockchain Development</h4>
                    <p>Custom Blockchain Solutions</p>
                  </div>
                </li>
                <li>
                  <img src={serviceicon5} alt="image" />
                  <div>
                    <h4>Augmented Reality</h4>
                    <p>Futuristic AR Apps</p>
                  </div>
                </li>
                <li>
                  <img src={serviceicon6} alt="image" />
                  <div>
                    <h4>MVP Development</h4>
                    <p>For Startups & Entrepreneurs</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="section-three">
        <div className="container">
          <div className="portfolio-slider-wrapper">
            <Swiper
              navigation={{
                nextEl: ".portfolio-slider-next",
                prevEl: ".portfolio-slider-prev",
              }}
              modules={[Navigation]}
              loop={true}
              className="portfolio-slider"
              direction={"vertical"}
              centeredSlides={true}
              slidesPerView={"auto"}
              spaceBetween={30}
            >
              <SwiperSlide className="portfolio-slide">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="portfolio-slide-content">
                      <div className="s3tags-wrapper">
                        <div className="s3tag">iOS Development</div>
                        <div className="s3tag">Android Development</div>
                        <div className="s3tag">UI/UX Design</div>
                      </div>
                      <h2 className="sec3-heading">
                        Caviar - Order Food Delivery
                      </h2>
                      <p className="sec3-para">
                        Get Food delivered from curated lists of local
                        restaurants right at your fingertips with Caviar. Enjoy
                        quality dining at home and make any night a special
                        occasion.
                      </p>
                      <img src={appstoreImg} alt="" />
                      <button className="sec3-btn">View Case Study</button>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex justify-content-center">
                    <img
                      className="portfolio-slider-img"
                      src={sectionthreeImg}
                      alt=""
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="portfolio-slide">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="portfolio-slide-content">
                      <div className="s3tags-wrapper">
                        <div className="s3tag">iOS Development</div>
                        <div className="s3tag">Android Development</div>
                        <div className="s3tag">UI/UX Design</div>
                      </div>
                      <h2 className="sec3-heading">
                        Caviar - Order Food Delivery
                      </h2>
                      <p className="sec3-para">
                        Get Food delivered from curated lists of local
                        restaurants right at your fingertips with Caviar. Enjoy
                        quality dining at home and make any night a special
                        occasion.
                      </p>
                      <img src={appstoreImg} alt="" />
                      <button className="sec3-btn">View Case Study</button>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex justify-content-center">
                    <img
                      className="portfolio-slider-img"
                      src={sectionthreeImg}
                      alt=""
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="portfolio-slide">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="portfolio-slide-content">
                      <div className="s3tags-wrapper">
                        <div className="s3tag">iOS Development</div>
                        <div className="s3tag">Android Development</div>
                        <div className="s3tag">UI/UX Design</div>
                      </div>
                      <h2 className="sec3-heading">
                        Caviar - Order Food Delivery
                      </h2>
                      <p className="sec3-para">
                        Get Food delivered from curated lists of local
                        restaurants right at your fingertips with Caviar. Enjoy
                        quality dining at home and make any night a special
                        occasion.
                      </p>
                      <img src={appstoreImg} alt="" />
                      <button className="sec3-btn">View Case Study</button>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex justify-content-center">
                    <img
                      className="portfolio-slider-img"
                      src={sectionthreeImg}
                      alt=""
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="portfolio-slide">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="portfolio-slide-content">
                      <div className="s3tags-wrapper">
                        <div className="s3tag">iOS Development</div>
                        <div className="s3tag">Android Development</div>
                        <div className="s3tag">UI/UX Design</div>
                      </div>
                      <h2 className="sec3-heading">
                        Caviar - Order Food Delivery
                      </h2>
                      <p className="sec3-para">
                        Get Food delivered from curated lists of local
                        restaurants right at your fingertips with Caviar. Enjoy
                        quality dining at home and make any night a special
                        occasion.
                      </p>
                      <img src={appstoreImg} alt="" />
                      <button className="sec3-btn">View Case Study</button>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex justify-content-center">
                    <img
                      className="portfolio-slider-img"
                      src={sectionthreeImg}
                      alt=""
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="portfolio-slide">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="portfolio-slide-content">
                      <div className="s3tags-wrapper">
                        <div className="s3tag">iOS Development</div>
                        <div className="s3tag">Android Development</div>
                        <div className="s3tag">UI/UX Design</div>
                      </div>
                      <h2 className="sec3-heading">
                        Caviar - Order Food Delivery
                      </h2>
                      <p className="sec3-para">
                        Get Food delivered from curated lists of local
                        restaurants right at your fingertips with Caviar. Enjoy
                        quality dining at home and make any night a special
                        occasion.
                      </p>
                      <img src={appstoreImg} alt="" />
                      <button className="sec3-btn">View Case Study</button>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex justify-content-center">
                    <img
                      className="portfolio-slider-img"
                      src={sectionthreeImg}
                      alt=""
                    />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="portfolio-slider-nav">
              <button className="portfolio-slider-prev">
                <i className="fa-solid fa-arrow-left"></i>
              </button>
              <button className="portfolio-slider-next">
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;

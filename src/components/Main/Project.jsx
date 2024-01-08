import React from 'react';
import '../../pages/Project/ProjectPage.css'
// import { Link } from 'react-router-dom';
// import { ButtomGet } from '../ButtomGet/ButtomGet';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

/* Swiper */
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

/* Img */
const proyectImg = require.context('../../img', true);

const Project = () => {
    return (
        <section className="proyectos" id="proyectos">
            <h2 className="heading">
                <FormattedMessage
                    id='projects'
                    defaultMessage='Projects'
                />
            </h2>
            <div className="proyect-site" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <Swiper
                    spaceBetween={30}
                    loop={true}
                    grabCursor={true}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    className='proyectos-slider mySwiper'
                >
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./Jobify.png`)}
                            alt='proyectos'

                        />
                        <div className="content">
                            <h3>Jobify</h3>
                            <p>
                                Job Recruiting Platform
                            </p>
                            <p className="tecnologias">
                                React
                                <span> -</span> CSS
                                <span> -</span> Redux
                                <span> -</span> Bootstrap
                                <span> -</span> JavaScript
                                <span> -</span> ExpressJS
                                <span> -</span> NodeJS
                                <span> -</span> MongoDB
                            </p>
                            <a href="https://jobify-frontend.onrender.com/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/OmVibhandik/Jobify" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./currencyConvertor.png`)}
                            alt='proyectos'

                        />
                        <div className="content">
                            <h3>Currency Convertor</h3>
                            <p>
                                World Currency Convertor website
                            </p>
                            <p className="tecnologias">
                                HTML5
                                <span> -</span> CSS
                                <span> -</span> JavaScript
                                <span> -</span> React
                                <span> -</span> CSS Tailwind
                            </p>
                            {/* <a href="" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a> */}
                            <a href="https://github.com/OmVibhandik/React_Basics/tree/main/07_currencyConvertor" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./adminDashboard.png`)}
                            alt='proyectos'

                        />
                        <div className="content">
                            <h3>Dashboard</h3>
                            <p>
                                User and Admin Dashboard
                            </p>
                            <p className="tecnologias">
                                React
                                <span> -</span> CSS
                                <span> -</span> Redux
                                <span> -</span> HTML5
                            </p>
                            <a href="https://jobify-frontend.onrender.com/user/dashboard" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/OmVibhandik/Jobify/tree/main/frontend" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="swiper-pagination"></div>
            </div>
            {/* <Link className="custom-btn btn-codigo portafolio-btn" to="/project">
                <FormattedMessage
                    id='btn-more-projects'
                    defaultMessage='More projects'
                />
            </Link> */}
            {/* <div className='portafolio-btn'>
                <Link to="/project">
                    <ButtomGet/>
                </Link>
            </div> */}
        </section>

    )
};
export default React.memo(Project);
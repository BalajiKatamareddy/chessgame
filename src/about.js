import React from "react"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from './images/chairman.jpg';
import image2 from './images/CEO.jpg';
import image from './images/MD.jpg';
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
function About(){

    return(
        <div>
            <h1 id="id3">History of our company</h1>
            <h1 id="id3">This Game is invented by K&M Group of compaines</h1>
            <h2 id="id3">Let's Introduce the Chairman of the Company</h2>
            <img src={image1} width={650} height={700} alt="chairman of the company"/>
            <h1 id="id3">Mr.Katamareddy Maha Lakshmi</h1>
            <h2 id="id3">Completed Graduation in Bachelor of the Arts</h2>
            <hr></hr>
            <h2 id="id3">Let's Introduce the CEO of the Company</h2>
            <img src={image2} width={650} height={700} alt="CEO company"/>
            <h1 id="id3">Mr.Katamareddy Kalyan Chakravathi</h1>
            <h2 id="id3">Completed Graduation in Master of the Arts</h2>
            <hr></hr>
            <h2 id="id3">Let's Introduce the Managing Director of the Company and developer of this Web Application</h2>
            <img src={image} width={650} height={700} alt="MD of the company"/>
            <h1 id="id4">Mr.Katamareddy Venkata Balaji</h1>
            <h2 id="id4">Completed Graduation in Bachelor Technology of Engineering in the department of Computer Science And Engineering</h2>
        </div>
    )
}
export default About
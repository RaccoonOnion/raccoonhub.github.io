import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { 
  FaReact, 
  FaCss3, 
  FaHtml5, 
  FaBootstrap, 
  FaPython,
  FaJava, 
  FaAws, 
  FaGit, 
  FaGithub, 
  FaBitbucket, 
  FaDocker,
  FaLinux,
  FaJira,
  FaKaggle,
} from "react-icons/fa";

const ImageCarousel = () => {
  const settings = {
    speed: 800,
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  const commonIconProps = {
    size: 38,
    color: "white"
  };

  return (
    <div style={{
        width: '100%',
        paddingTop: '20px',
        background: 'black'
    }}>
      <Slider {...settings}>
        <FaReact {...commonIconProps} />
        <FaHtml5 {...commonIconProps} />
        <FaCss3 {...commonIconProps} />
        <FaBootstrap {...commonIconProps} />
        <FaPython {...commonIconProps} />
        <FaJava {...commonIconProps} />
        <FaAws {...commonIconProps} />
        <FaGit {...commonIconProps} />
        <FaGithub {...commonIconProps} />
        <FaBitbucket {...commonIconProps} />
        <FaDocker {...commonIconProps} />
        <FaLinux {...commonIconProps} />
        <FaJira {...commonIconProps} />
        <FaKaggle {...commonIconProps} />
      </Slider>
    </div>
  );
};

export default ImageCarousel;
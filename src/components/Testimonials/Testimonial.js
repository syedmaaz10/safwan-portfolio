import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Working with Safwan on our web development project was an absolute pleasure. They exhibited exceptional technical expertise and a keen eye for detail. From the initial concept discussions to the final product launch, Safwan demonstrated professionalism and dedication at every step. Our website now not only looks stunning but also functions seamlessly, thanks to their expertise. I highly recommend Safwan for anyone seeking top-notch web development services.",
    },
    {
      img: profilePic2,
      review:
        "I had the privilege of hiring Safwan to build our e-commerce store on Shopify, and the results have been nothing short of outstanding. Safwan brought our vision to life with a user-friendly and visually stunning online store. Their in-depth knowledge of Shopify's capabilities and their ability to customize every aspect of the website set them apart. They also provided excellent ongoing support to ensure our store continues to perform optimally. If you're looking for a Shopify expert, look no further than Safwan.",
    },
    {
      img: profilePic3,
      review:
        "I found Safwan on Fiverr when I needed some urgent web development work done, and I couldn't be happier with the results. Safwan delivered the project ahead of schedule, and the quality of their work exceeded my expectations. Their communication was prompt and professional, making the entire process smooth and stress-free. I will definitely be a repeat client and highly recommend Safwan for anyone in need of exceptional web development services.",
    },
    {
      img: profilePic4,
      review:
      "Safwan has been a game-changer for our Amazon business. Their expertise in optimizing product listings and enhancing our overall presence on the platform has led to a significant increase in sales. Safwan is not just knowledgeable but also proactive in identifying opportunities for improvement. Their dedication to our success is evident, and we're grateful for the positive impact they've had on our Amazon sales. We highly recommend Safwan to anyone looking to excel on the Amazon marketplace.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;

// components/CourseCarousel.js
"use client"; // This is required for interactive components like carousels

import React from "react";
import Slider from "react-slick";
import Image from 'next/image';

export default function CourseCarousel({ courses }) {
  // Settings for the carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <section className="w-full max-w-7xl mb-16 shadow-2xl rounded-lg overflow-hidden">
      <Slider {...settings}>
        {/* We will map through the courses to create a slide for each one */}
        {courses.map((course) => (
          <div key={course.title} className="relative h-[450px] text-white">
            <Image
              src={course.thumbnail}
              alt={`Thumbnail for ${course.title}`}
              fill
              style={{ objectFit: 'cover' }}
              className="-z-10"
            />
            <div className="absolute inset-0 bg-black opacity-60 -z-10"></div>
            <div className="relative z-10 h-full flex flex-col justify-center items-center text-center p-8">
              <p className="font-semibold">{course.courseNumber}</p>
              <h2 className="text-5xl font-bold my-4 leading-tight">{course.title}</h2>
              <p className="max-w-2xl">{course.description}</p>
              <a href="#" className="mt-6 inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-blue-700">
                Learn More
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
// components/CourseCarousel.js
"use client";

import React from "react";
import Slider from "react-slick";
import Image from 'next/image';

export default function CourseCarousel({ courses }) {
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
        {courses.map((course) => (
          // This container for each slide is the key change
          <div key={course.title}>
            <div className="grid grid-cols-1 lg:grid-cols-2 bg-white">

              {/* Left Side: Thumbnail Image */}
              <div className="relative h-[450px]">
                <Image
                  src={course.thumbnail}
                  alt={`Thumbnail for ${course.title}`}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>

              {/* Right Side: Course Details */}
              <div className="relative flex flex-col justify-center p-10">
                <p className="font-semibold text-gray-500">{course.courseNumber}</p>
                <h2 className="text-4xl font-bold my-3 leading-tight text-gray-900">{course.title}</h2>
                <p className="text-gray-600 max-w-xl mb-6">{course.description}</p>
                <div className="mt-auto">
                   <a href="#" className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-blue-700">
                    Learn More
                  </a>
                </div>
              </div>

            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
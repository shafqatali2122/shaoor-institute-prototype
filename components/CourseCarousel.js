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
    dotsClass: "slick-dots !bottom-5" // Positions dots nicely
  };

  return (
    <section className="w-full max-w-7xl mb-16 shadow-2xl rounded-lg overflow-hidden">
      <Slider {...settings}>
        {courses.map((course) => (
          <div key={course.title}>
            <div className="grid grid-cols-1 lg:grid-cols-2 bg-white">

              {/* Left Side: Thumbnail Image - Fixed to cover properly */}
              <div className="relative h-[450px]">
                <Image
                  src={course.thumbnail}
                  alt={`Thumbnail for ${course.title}`}
                  fill
                  style={{ objectFit: 'cover' }} // This ensures the image covers the area without distortion
                />
              </div>

              {/* Right Side: Course Details - All details added back */}
              <div className="relative flex flex-col p-10">
                <h2 className="text-4xl font-bold leading-tight text-gray-900">{course.title}</h2>
                <p className="text-gray-600 my-3">{course.description}</p>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 my-3 text-sm text-gray-700">
                  <span className="bg-yellow-100 text-yellow-800 font-bold px-3 py-1 rounded">Top Rated</span>
                  <span className="text-orange-500 font-bold">★ {course.rating}</span>
                  <span>({course.ratingCount} ratings)</span>
                  <span>{course.studentCount} students</span>
                </div>

                <div className="text-sm mb-6">
                  <span>Created by <a href="#" className="text-blue-600 font-semibold underline">{course.creator}</a></span>
                </div>

                <div className="mt-auto">
                   <a href="#" className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-blue-700">
                    View Course
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
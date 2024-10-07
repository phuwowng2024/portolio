import React from 'react';
import './Testimonials.css';
import Image3 from '../../assets/avatar-3.svg'
import Image4 from '../../assets/avatar-4.svg'

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {

	const data = [
		{
			id: 1,
			image: Image4,
			title: "Chau Vu",
			subtitle: "Former President of NSDS Gen 5",
			comment: "Dear An Phương, my first impression of Phương is that of a vibrant, strong, talented girl who is exceptionally professional in her demeanor and work ethics. Throughout Gen 5's activities, An Phương has proven herself to be an outstanding individual. Therefore, I am very confident that An Phương, along with An Trần, will lead the club effectively and continue NSDS's legacy. With her enthusiasm, professionalism, decisiveness, and responsibility, I believe An Phương will excel in her role as the Vice President of this year and help NSDS develop even further! You can do it!”",
		},
		// {
		// 	id: 2,
		// 	image: Image3,
		// 	title: "Thapelo Kekana",
		// 	subtitle: "Frontend Developer @ FNB",
		// 	comment: "I enjoy working with the theme and learn so much. You guys make the process fun and interesting. Good luck! 👍",
		// },
	];

	return (
		<section className="testimonials container section">

			<h2 className="section__title">Testimonials</h2>

			<Swiper className="testimonial__container grid"
				modules={[Pagination]}
				spaceBetween={30}
				slidesPerView={1}
				loop={true}
				grabCursor={true}
				pagination={{ clickable: true }}>
				{data.map(({ id, image, title, subtitle, comment }) => {
					return (
						<SwiperSlide className="testimonial__item" key={id}>
							<div className="thumb">
								<img src={image} alt="" />
							</div>
							<h3 className="testimonial__title">{title}</h3>
							<span className="subtitle">{subtitle}</span>
							<div className="comment">{comment}</div>
						</SwiperSlide>
					)
				})}
			</Swiper>
		</section>
	)
}

export default Testimonials
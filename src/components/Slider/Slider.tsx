import { memo } from "react";

import BookItem from "../ui/BookItem/BookItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { BookByGenre } from "../../interfaces/interfaces";

import "swiper/scss";
import "swiper/scss/navigation";

interface Props {
  books: [BookByGenre[]];
}

const Slider = memo(({ books }: Props) => {
  return (
    <Swiper
      breakpoints={{
        992: {
          slidesPerView: 5,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 4.3,
          spaceBetween: 10,
        },
        576: {
          slidesPerView: 3.3,
          spaceBetween: 10,
        },
        375: {
          slidesPerView: 2.3,
          spaceBetween: 10,
        },
        320: {
          slidesPerView: 1.3,
          spaceBetween: 10,
        },
      }}
      modules={[Navigation]}
      navigation
    >
      {books.map((book: any) => (
        <SwiperSlide key={book[0].id}>
          <BookItem shop={false} book={book[0]} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
});

export default Slider;

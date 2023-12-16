"use client";
import Image from "next/image";
import slidebg from "../assets/slidebg.svg";
import slidebg2 from "../assets/slidebg2.svg";
import catebg1 from "../assets/catebg1.svg";
import catebg2 from "../assets/catebg2.svg";
import catebg3 from "../assets/catebg3.svg";
import { LeftCircleFilled, RightCircleFilled } from "@ant-design/icons";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
// import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

export default function Home() {
  return (
    <main>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade]}
        effect="fade"
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src={slidebg2}
            width={1000}
            height={500}
            alt="Picture of the author"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image
            src={slidebg}
            width={1000}
            height={500}
            alt="Picture of the author"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={slidebg}
            width={1000}
            height={500}
            alt="Picture of the author"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={slidebg2}
            width={1000}
            height={500}
            alt="Picture of the author"
          />
        </SwiperSlide>
      </Swiper>
      <section className="section-collections">
        <h1>Collections</h1>
        <Swiper
          slidesPerView={1}
          centeredSlides={false}
          slidesPerGroupSkip={1}
          grabCursor={true}
          keyboard={{
            enabled: true,
          }}
          breakpoints={{
            769: {
              slidesPerView: 4,
              slidesPerGroup: 4,
            },
          }}
          navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation]}
          className="collections-swiper"
        >
          <SwiperSlide style={{ display: "block" }}>
            <Image
              src={catebg1}
              className="collection-img"
              alt="Picture of the author"
            />
            <span>Category</span>
          </SwiperSlide>
          <SwiperSlide style={{ display: "block" }}>
            {" "}
            <Image
              src={catebg3}
              className="collection-img"
              alt="Picture of the author"
            />
            <span>Category</span>
          </SwiperSlide>
          <SwiperSlide style={{ display: "block" }}>
            <Image
              src={catebg1}
              className="collection-img"
              alt="Picture of the author"
            />
            <span>Category</span>
          </SwiperSlide>
          <SwiperSlide style={{ display: "block" }}>
            <Image
              src={catebg2}
              className="collection-img"
              alt="Picture of the author"
            />
            <span>Category</span>
          </SwiperSlide>
          <SwiperSlide style={{ display: "block" }}>
            <Image
              src={catebg1}
              className="collection-img"
              alt="Picture of the author"
            />
            <span>Category</span>
          </SwiperSlide>
          <SwiperSlide style={{ display: "block" }}>
            {" "}
            <Image
              src={catebg3}
              className="collection-img"
              alt="Picture of the author"
            />
            <span>Category</span>
          </SwiperSlide>
          <SwiperSlide style={{ display: "block" }}>
            <Image
              src={catebg1}
              className="collection-img"
              alt="Picture of the author"
            />
            <span>Category</span>
          </SwiperSlide>
          <SwiperSlide style={{ display: "block" }}>
            <Image
              src={catebg2}
              className="collection-img"
              alt="Picture of the author"
            />
            <span>Category</span>
          </SwiperSlide>
        </Swiper>
        <LeftCircleFilled className="arrow-left" />
        <RightCircleFilled className="arrow-right" />
      </section>
      <section></section>
    </main>
  );
}

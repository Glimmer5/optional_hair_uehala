import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper";
import Image from "next/image";

import "swiper/css";
import "swiper/css/effect-fade"

import AboutImage1 from "../../public/images/aboutImage/aboutimg1.jpeg";
import AboutImage2 from "../../public/images/aboutImage/aboutimg2.jpeg";
import AboutImage3 from "../../public/images/aboutImage/aboutimg3.jpeg";
import AboutImage4 from "../../public/images/aboutImage/aboutimg4.jpeg";
import AboutImage6 from "../../public/images/aboutImage/aboutImage6.jpeg";

const HeroSlider: React.FC = () => {
  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      speed={2000}
    >
      <SwiperSlide>
        <Image loader={({ src }) => src} alt="aboutImage" src={AboutImage1} />
      </SwiperSlide>
      <SwiperSlide>
        <Image loader={({ src }) => src} alt="aboutImage" src={AboutImage2} />
      </SwiperSlide>
      <SwiperSlide>
        <Image loader={({ src }) => src} alt="aboutImage" src={AboutImage3} />
      </SwiperSlide>
      <SwiperSlide>
        <Image loader={({ src }) => src} alt="aboutImage" src={AboutImage4} />
      </SwiperSlide>
      <SwiperSlide>
        <Image loader={({ src }) => src} alt="aboutImage" src={AboutImage6} />
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSlider;

import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Navigation, FreeMode } from "swiper";
import CardItem from "../cardItem";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation"
import "swiper/css/free-mode";

import cutImage from "../../public/images/menuImage/menu-1.jpeg";
import colorImage from "../../public/images/menuImage/menu-2.jpeg";
import permImage from "../../public/images/menuImage/menu-3.jpeg";
import headspaImage from "../../public/images/menuImage/menu-4.jpeg";
import shavingImage from "../../public/images/menuImage/menu-5.jpeg";
import otherImage from "../../public/images/menuImage/menu-6.jpeg";

const MenuSlider: React.FC = () => {
  return (
    <Swiper
      modules={[Scrollbar, Navigation, FreeMode]}
      freeMode={true}
      spaceBetween={10}
      grabCursor={true}
      navigation
      breakpoints={{
        320: { slidesPerView: 1.2 },
        640: { slidesPerView: 2 },
      }}
      scrollbar={{ draggable: true, hide: true }}
    >
      <SwiperSlide>
        <CardItem
          imageSrc={cutImage}
          altName="cutMenu"
          nameTitle="CUT"
          nameA="ハイスタンダードコース"
          nameB="クラシックカットコース"
          nameC="高校生カットコース"
          nameD="高校生エステ無しコース"
          valueA="¥7,150"
          valueB="¥4,950"
          valueC="¥4,400"
          valueD="¥3,850"
          detailA="※シャンプー、ブロー込み。"
        />
      </SwiperSlide>
      <SwiperSlide>
        <CardItem
          imageSrc={colorImage}
          altName="colorMenu"
          nameTitle="COLOR"
          nameA="ベリーショート"
          nameB="ショート"
          nameC="ミディアム"
          nameD="ロング"
          valueA="¥3,800~"
          valueB="¥4,500~"
          valueC="¥5,500~"
          valueD="¥6,500~"
          detailA="※上記はショート料金となります。"
        />
      </SwiperSlide>
      <SwiperSlide>
        <CardItem
          imageSrc={permImage}
          altName="permMenu"
          nameTitle="PREM"
          nameA="ナノミストパーマ"
          nameB="ケアアイロンパーマ"
          nameC="オプショナルクリープ"
          nameD="縮毛矯正"
          valueA="¥5,500~"
          valueB="¥5,500~"
          valueC="¥9,350~"
          valueD="¥11,000~"
          detailA="※上記はショート料金となります。"
        />
      </SwiperSlide>
      <SwiperSlide>
        <CardItem
          imageSrc={otherImage}
          altName="otherMenu"
          nameTitle="OTHER"
          nameA="鼻毛バイバイエステ"
          nameB="イヤースッキリ"
          nameC="北斗のマッサージ"
          nameD="シャイニングクロー"
          valueA="¥770"
          valueB="¥550"
          valueC="¥550"
          valueD="¥550"
          detailA="※詳しくはスタッフまで。"
        />
      </SwiperSlide>
      <SwiperSlide>
        <CardItem
          imageSrc={headspaImage}
          altName="headspaMenu"
          nameTitle="HEAD SPA"
          nameA="クレンジングスパ"
          nameB="育毛ヘッドスパ"
          nameC="育毛オプショナルスパ"
          valueA="¥1,650"
          valueB="¥3,850"
          valueC="¥4,620"
          detailA="※詳しくはスタッフまで。"
        />
      </SwiperSlide>
      <SwiperSlide>
        <CardItem
          imageSrc={shavingImage}
          altName="shavingMenu"
          nameTitle="SHAVING"
          nameA="フェイスケアシェープ"
          nameB="タイムスリップエステ"
          nameC="各種パック"
          valueA="¥2,530"
          valueB="¥1,100"
          valueC="¥1,100"
          detailA="※詳しくはスタッフまで。"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default MenuSlider;

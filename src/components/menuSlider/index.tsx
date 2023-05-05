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
          valueA="¥6,700"
          valueB="¥4,700"
          valueC="¥4,200"
          valueD="¥3,700"
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
          valueA="¥4,000~"
          valueB="¥4,700~"
          valueC="¥5,700~"
          valueD="¥6,700~"
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
          valueA="¥6,000~"
          valueB="¥6,000~"
          valueC="¥8,500~"
          valueD="¥10,000~"
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
          valueA="¥700"
          valueB="¥500"
          valueC="¥500"
          valueD="¥500"
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
          valueA="¥1,500"
          valueB="¥3,500"
          valueC="¥4,200"
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
          valueA="¥2,300"
          valueB="¥1,000"
          valueC="¥1,000"
          detailA="※詳しくはスタッフまで。"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default MenuSlider;

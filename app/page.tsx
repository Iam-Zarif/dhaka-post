import Opinion from "@/components/home/leftBars/Opinion";
import OpinionCard from "@/components/home/rightBars/Opinion";
import TheLatest from "@/components/home/leftBars/TheLatest";
import BusinessAndPolitics from "@/components/home/midSections/BusinessAndPolitics";
import HeroSection from "@/components/home/midSections/HeroSection";
import TitleCarosel from "@/components/home/midSections/TitleCarosel";
import BannerAd from "@/components/home/rightBars/BannerAd";
import LifeStyle from "@/components/home/rightBars/LifeStyle";

export default function Home() {    
  return (
    <>
      <div className="max-w-[86rem] py-20  mx-auto w-full flex gap-8 items-start">
        <div className="max-w-[20rem]  w-full ">
          <TheLatest />
          <Opinion />
        </div>
        <div className="w-full">
          <TitleCarosel />
          <HeroSection />
          <BusinessAndPolitics />
        </div>
        <div className="max-w-[20rem]   w-full">
          <BannerAd />
          <OpinionCard />
          <LifeStyle />
        </div>
      </div>
    </>
  );
}

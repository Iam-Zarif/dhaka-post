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
      <div className="mx-auto w-full max-w-[86rem] px-4  py-14 sm:py-16 lg:py-20">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
          <aside className="w-full lg:max-w-[20rem] lg:order-1 order-2">
            <TheLatest />
            <Opinion />
          </aside>
          <main className="w-full lg:order-2 order-1">
            <TitleCarosel />
            <HeroSection />
            <BusinessAndPolitics />
          </main>
          <aside className="w-full flex flex-col gap-8 lg:max-w-[20rem] lg:order-3 order-3">
            <BannerAd />
            <OpinionCard />
            <LifeStyle />
          </aside>
        </div>
      </div>
    </>
  );
}

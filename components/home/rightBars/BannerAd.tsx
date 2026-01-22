import Image from "next/image";

const BannerAd = () => {
  return (
   
      <Image
        src="https://jnews.io/citynews/wp-content/uploads/sites/47/2018/08/banner-ad-345x345.jpg"
        alt="banner"
        width={400}
        className="w-full"
        height={500}
      ></Image>
 
  );
};

export default BannerAd;

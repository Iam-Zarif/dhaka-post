import Image from "next/image";
import { BsChat } from "react-icons/bs";
import { CiClock2 } from "react-icons/ci";

const HeroSection = () => {
  return (
    <div className="mt-8 relative bg-white">
      <Image
        src="https://jnews.io/citynews/wp-content/uploads/sites/47/2018/06/demo-34-750x375.jpg"
        className="w-full"
        alt="image"
        width={600}
        height={600}
      />

      <div className="bg-white relative min-h-56  ">
        <div className="bg-white w-[94%] left-5 -top-14 absolute mx-auto  px-6 py-3">
          <p className="uppercase text-xs text-neutral-400">politics</p>
          <p className="text-[1.6rem] font-semibold mt-2">
            ‘Election was rigged’ says opposition, police confirm three dead
          </p>
          <div className="flex items-center gap-4 text-xs mt-3">
            <p className="text-neutral-400 italic">
              by{" "}
              <span className="font-semibold text-neutral-800">JOHN DOE</span>{" "}
              <span className="text-neutral-400 italic">and 1 others</span>{" "}
            </p>

            <div className="flex items-center gap-1">
              <CiClock2 className="text-neutral-500 text-md" />
              <p className="text-neutral-500">Febrary 1, 2020</p>
            </div>
            <div className="flex items-center gap-1">
              <BsChat className="text-neutral-500" />
              <p>0</p>
            </div>

          </div>
            <p className="mt-4 text-neutral-600">When we get out of the glass bottle of our ego and when we escape like the squirrels in the...</p>
            <button className="uppercase text-neutral-500 text-xs shadow mt-3 border border-neutral-300 py-1.5 px-4">Read more</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

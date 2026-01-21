import Image from "next/image";
import { memo } from "react";
import { latestItems } from "./latestItems";

const TheLatest = () => {
  return (
    <div className="bg-white p-5 shadow">
      <p className="font-semibold">The Latest</p>

      <div className="relative mt-2 h-0.5 w-full rounded-full bg-neutral-300">
        <div className="absolute left-0 top-0 h-full w-8 rounded-full bg-neutral-700" />
      </div>

      <div className="mt-5 flex flex-col gap-6">
        {latestItems.map((item) => (
          <div key={item.id} className="flex gap-3">
            <Image
              src={item.image}
              alt={item.title}
              width={100}
              height={80}
              className="object-cover"
            />
            <p className="leading-5 font-semibold">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(TheLatest);

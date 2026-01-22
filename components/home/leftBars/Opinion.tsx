import { memo } from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { opinionItems } from "./opinionItems";

const Opinion = () => {
  return (
    <div className="bg-white mt-8 p-5 shadow">
      <p className="font-semibold">Opinion</p>

      <div className="relative mt-2 h-0.5 w-full rounded-full bg-neutral-300">
        <div className="absolute left-0 top-0 h-full w-8 rounded-full bg-neutral-700" />
      </div>


      <div className="mt-5">
        {opinionItems.map((title, index) => (
          <div key={index}>
            <div className="flex items-start gap-1">
              <IoMdArrowDropright className="text-2xl shrink-0" />
              <p className="leading-5 text-sm">{title}</p>
            </div>
            {index !== opinionItems.length - 1 && (
              <div className="my-3 h-px w-full bg-neutral-200" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(Opinion);

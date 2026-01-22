import Image from "next/image";
import { CiClock2 } from "react-icons/ci";
import { memo } from "react";

interface NewsCardProps {
  title: string;
  image: string;
  category: string;
  categoryColor: string;
  categoryPosition?: "top-left" | "bottom-center";
  date: string;
  author?: string;
  description?: string;
  className?: string;
  titleAlign?: "left" | "center" | "right";
  contentAlign?: "start" | "center" | "end"; // new prop for flex alignment
}

const NewsCard = ({
  title,
  image,
  category,
  categoryColor,
  categoryPosition = "bottom-center",
  date,
  author,
  description,
  className = "",
  titleAlign = "center",
  contentAlign = "center", // default center
}: NewsCardProps) => {
  const categoryClasses =
    categoryPosition === "top-left"
      ? `absolute top-5 left-5 px-2 py-px leading-4 uppercase font-semibold text-xs text-white`
      : `absolute bottom-0 left-1/2 -translate-x-1/2 px-2 py-px leading-4 uppercase font-semibold text-xs text-white`;

  const titleClass =
    titleAlign === "center"
      ? "text-center"
      : titleAlign === "left"
        ? "text-left"
        : "text-right";

  const contentAlignClass =
    contentAlign === "center"
      ? "items-center"
      : contentAlign === "start"
        ? "items-start"
        : "items-end";

  return (
    <div className={`w-full bg-white ${className}`}>
      <div className="relative">
        <Image
          src={image}
          alt={title}
          width={800}
          height={800}
          className="w-full"
        />
        <p
          className={categoryClasses}
          style={{ backgroundColor: categoryColor }}
        >
          {category}
        </p>
      </div>

      <div className={`flex flex-col gap-3 py-5 px-4 ${contentAlignClass}`}>
        <p className={`text-lg font-semibold ${titleClass}`}>{title}</p>

        <div className="flex items-center gap-1 text-xs">
          {author && (
            <p className="text-neutral-400 italic">
              by{" "}
              <span className="font-semibold text-neutral-800">{author}</span>
            </p>
          )}
          <div className="flex items-center gap-1">
            <CiClock2 className="text-neutral-500 text-md" />
            <p className="text-neutral-500">{date}</p>
          </div>
        </div>

        {description && (
          <p className="text-neutral-500 pt-serif-regular">{description}</p>
        )}
      </div>
    </div>
  );
};

export default memo(NewsCard);

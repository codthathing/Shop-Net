import Image from "next/image";
import icon_previous from "../../assets/icon-previous.svg";
import icon_next from "../../assets/icon-next.svg";

export default function ProductCarouselControls() {
  return (
    <div className="flex justify-between lg:hidden absolute w-full h-fit top-0 bottom-0 my-auto px-4">
      <div className="bg-white h-8 w-8 grid place-content-center rounded-full cursor-pointer">
        <Image src={icon_previous} className="w-2" alt="" />
      </div>
      <div className="bg-white h-8 w-8 grid place-content-center rounded-full cursor-pointer">
        <Image src={icon_next} className="w-2" alt="" />
      </div>
    </div>
  );
}

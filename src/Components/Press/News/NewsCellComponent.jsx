import { Link } from "react-router";
import { IoIosArrowForward } from "react-icons/io";

const NewsCellComponent = ({ data }) => {
  return (
    <Link
      href={data.link}
      target="_blank"
      rel="noreferrer"
      className="relative w-full flex flex-col md:flex-row md:space-x-8 p-4 xl:pl-0 border border-transparent rounded-[3px] hover:border-gray-200 hover:shadow-md hover:scale-101 transition-all duration-300"
      id={data.title}
    >
      <div
        id={`image-${data.title}`}
        className="flex items-center justify-center"
      >
        <img
          src={data.poster}
          alt={`image-${data.title}`}
          className="w-[250px] object-cover m-4"
        />
      </div>
      <div className="flex md:items-end">
        <div className="flex flex-col p-4 sm:p-8 space-y-2">
          <p className="text-[1.1rem] font-semibold">{data.title}</p>
          <div>
            <p className="">{data.date}</p>
            <p className="">{data.location}</p>
          </div>
          <p className="text-[1.1rem] pb-6">{data.adress}</p>
        </div>
      </div>
      <div className="description-link flex flex-col items-end absolute bottom-4 right-8">
        <div className="flex translate-x-7">
          <p className="text-[0.9rem] pt-0">View Details</p>
          <div className="flex translate-y-[2px]">
            <span>
              <IoIosArrowForward className="ml-2 text-[1.1rem]" />
            </span>
            <span>
              <IoIosArrowForward className="ml-2 text-[1.1rem] -translate-x-[22px]" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NewsCellComponent;

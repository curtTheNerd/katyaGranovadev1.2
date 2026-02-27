const MediaCellComponent = ({ data }) => {
  return (
    <a
      href={data.link}
      target="_blank"
      rel="noreferrer"
      className="w-full flex flex-col md:flex-row md:space-x-8 p-4 xl:pl-0 border border-transparent rounded-[3px] hover:border-gray-200 hover:shadow-md hover:scale-101 transition-all duration-300"
      id={data.title}
    >
      <div
        id={`image-${data.source}`}
        className="flex items-center justify-center"
      >
        <img
          src={data.img}
          alt={`image-${data.source}`}
          className="w-[200px] h-[200px] object-cover aspect-square m-4"
        />
      </div>
      <div className="flex md:items-end">
        <div className="flex flex-col p-4 sm:p-8 space-y-1">
          <p className="text-[1.2rem]">{data.source}</p>
          <div>
            <p className="italic">{data.title}</p>
            <p>
              {data.type} {data.author}
            </p>
          </div>

          <p>{data.language}</p>
        </div>
      </div>
    </a>
  );
};

export default MediaCellComponent;

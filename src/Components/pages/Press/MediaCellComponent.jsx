const MediaCellComponent = ({ data }) => {
  return (
    <a
      href={data.link}
      target="_blank"
      rel="noreferrer"
      className="w-full flex flex-col md:flex-row space-y-8 md:space-x-12 p-4 xl:pl-0 border border-transparent rounded-[3px] hover:border-gray-200 hover:shadow-md hover:scale-101 transition-all duration-300"
      id={data.title}
    >
      <div
        id={`image-${data.source}`}
        className="flex items-center justify-center flex-shrink-0 md:w-[250px] md:h-[250px]"
      >
        <img
          src={data.img}
          alt={`image-${data.source}`}
          className="w-full h-full aspect-square object-cover"
        />
      </div>
      <div className="flex flex-col justify-start md:justify-center flex-grow">
        <div className="flex flex-col space-y-1">
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

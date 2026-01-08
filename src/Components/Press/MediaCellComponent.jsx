const MediaCellComponent = ({ data }) => {
  return (
    <a
      href={data.link}
      target="_blank"
      rel="noreferrer"
      className="w-full max-w-[1200px] flex flex-col md:flex-row md:space-x-8 p-4"
      id={data.title}
    >
      <div
        id={`image-${data.source}`}
        className="flex items-center justify-center"
      >
        <img
          src={data.img}
          alt={`image-${data.source}`}
          className="w-[300px] h-[300px] object-cover aspect-square m-4"
        />
      </div>
      <div className="flex md:items-end">
        <div className="flex flex-col p-4 sm:p-8">
          <p className="text-[1.2rem]">{data.source}</p>
          <p className="italic">{data.title}</p>
          <p>
            {data.type} {data.author}
          </p>
          <p>{data.language}</p>
        </div>
      </div>
    </a>
  );
};

export default MediaCellComponent;

const MediaCellComponent = ({ data }) => {
  return (
    <div className="w-full flex bg-amber-500" id={data.title}>
      <div id={`image-${data.source}`}>
        <img
          src={data.img}
          alt={`image-${data.source}`}
          className="w-[200px] aspect-square"
        />
      </div>
      <div>
        <p>{data.source}</p>
        <p>{data.type}</p>
        <p>{data.title}</p>
        <p>{data.author}</p>
        <p>{data.language}</p>
        <a href={data.link} target="_blank" rel="noreferrer">
          <p>READ</p>
        </a>
      </div>
    </div>
  );
};

export default MediaCellComponent;

import MediaCellComponent from "./MediaCellComponent";

const MediaSectionComponent = ({ object }) => {
  return (
    <div
      id={`MediaSection-${object.year}`}
      className="w-full flex-center flex-col gap-4"
    >
      <h3>{object.year}</h3>
      {object.data.map((element) => (
        <MediaCellComponent key={element.title} data={element} />
      ))}
    </div>
  );
};

export default MediaSectionComponent;

import MediaCellComponent from "./MediaCellComponent";

const MediaSectionComponent = ({ object }) => {
  return (
    <div
      id={`MediaSection-${object.year}`}
      className="w-full max-w-[1200px] xl:pl-0 flex-center flex-col gap-4"
    >
      <h3 className="text-[1.3rem] italic">{object.year}</h3>
      {object.data.map((element) => (
        <MediaCellComponent key={element.title} data={element} />
      ))}
    </div>
  );
};

export default MediaSectionComponent;

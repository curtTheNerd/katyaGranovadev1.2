const DescriptionCard = ({ array }) => {
  return (
    <div
      id={`description-${array[0].title}`}
      className="flex flex-col space-y-4 w-full px-8 md:px-16 lg:px-[10%] pt-4 pb-24"
    >
      <p
        id={`exhibitionTitle-${array[0].title}`}
        className="text-[1.25rem] lg:text-[1.4rem] font-semibold"
      >
        {array[0].descriptionCard.exhibitionTitle}
      </p>
      <p
        id={`exhibitionSubtitle-${array[0].title}`}
        className="text-[1.15rem] italic"
      >
        {array[0].descriptionCard.exhibitionLocation}
      </p>
      <p id={`exhibitionDescription-${array[0].title}`} className="">
        {array[0].descriptionCard.description}
      </p>
    </div>
  );
};

export default DescriptionCard;

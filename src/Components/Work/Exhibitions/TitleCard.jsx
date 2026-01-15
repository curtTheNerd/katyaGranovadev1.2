const TitleCard = ({ array }) => {
  return (
    <div className="h2-standard">
      <h2 className="">{array[0].title}</h2>
      <h3 className="text-[1.1rem] md:text-[1.3rem]">
        {array[0].title_detailled}
      </h3>
    </div>
  );
};

export default TitleCard;

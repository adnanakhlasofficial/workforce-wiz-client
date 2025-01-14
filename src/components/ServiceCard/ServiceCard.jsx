const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-8 rounded-xl">
      <div className="w-20 h-20 mb-4">
        <img src={icon} alt="" />
      </div>
      <div className="space-y-2">
        <h3 className=" font-semibold text-cocoBlack text-xl">{title}</h3>
        <p className="text-iron">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;

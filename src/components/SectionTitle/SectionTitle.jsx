const SectionTitle = ({ title, description }) => {
  return (
    <div className="space-y-2">
      <h2 className="text-3xl font-bold text-center text-cocoBlack">{title}</h2>
      <p className="text-base max-w-2xl text-center mx-auto text-iron">
        {description}
      </p>
    </div>
  );
};

export default SectionTitle;

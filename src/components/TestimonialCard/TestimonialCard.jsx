import PropTypes from "prop-types";

const TestimonialCard = ({ singleTestimonial }) => {
  const { name, image, message } = singleTestimonial;

  return (
    <div className="bg-white min-h-[16rem] rounded-lg bg-base-100 p-4 shadow-xl">
      <figure className="mb-4">
        <img
          src={image}
          alt={name}
          className="mx-auto h-24 w-24 rounded-full object-cover object-center"
        />
      </figure>
      <div className="text-center">
        <h3 className="font-playfair text-lg font-bold">{name}</h3>
        <p className="mx-auto mt-2 max-w-72 font-mulish text-sm text-gray">
          {message}
        </p>
      </div>
    </div>
  );
};

TestimonialCard.propTypes = {
  singleTestimonial: PropTypes.object,
};

export default TestimonialCard;

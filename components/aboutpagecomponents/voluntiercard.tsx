import Image, { StaticImageData } from "next/image";

interface CardProps {
  heading: string;
  text: string;
  image: StaticImageData; // URL or image asset
}

const VoluntierCard = ({ heading, text, image }: CardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
      <Image
        src={image}
        alt={heading}
        width={400}
        height={250}
        className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105 rounded-t-lg"
      />
      <div className="p-5">
        <h2 className="text-lg font-bold text-gray-800 group-hover:text-green-600 transition-colors duration-300">
          {heading}
        </h2>
        <p className="mt-2 text-sm text-gray-600 group-hover:text-gray-800">
          {text}
        </p>
        <div className="mt-4">
          <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
            Recent Volunteer
          </span>
        </div>
      </div>
    </div>
  );
};

export default VoluntierCard;

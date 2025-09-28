import React from "react";

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
  buttonText: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, title, description, buttonText }) => {
  return (
    <div className="flex flex-col h-full bg-white rounded-2xl shadow-md overflow-hidden">
      {/* Image Section */}
      <div className="w-full h-56">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow text-center">
        <h2 className="text-lg font-bold text-gray-800">{title}</h2>
        <p className="text-gray-600 text-sm mt-2 mb-4 flex-grow">{description}</p>
        <button className="bg-pink-200 text-gray-800 px-4 py-2 rounded shadow-sm text-sm font-medium hover:bg-pink-300 transition">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;

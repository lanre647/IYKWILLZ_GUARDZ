function ServiceCard({ title, description, img }) {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-300">
      <div className="overflow-hidden">
        <img 
          src={img} 
          alt={title} 
          className="h-72 w-full object-cover transform hover:scale-110 transition-transform duration-500" 
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold font-serif text-pink-500 mb-4">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
}

export default ServiceCard;

// components/CourseCard.js

// A simple icon component placeholder
const Icon = ({ name }) => (
  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
    name === 'heart' ? 'bg-blue-100 text-blue-500' : 
    name === 'group' ? 'bg-orange-100 text-orange-500' : 
    'bg-purple-100 text-purple-500'}`}>
    {/* Placeholder for actual icons */}
    <span className="text-2xl font-bold">{name.charAt(0).toUpperCase()}</span>
  </div>
);

export default function CourseCard({ icon, title, description, price, originalPrice, details, features, color = 'blue' }) {
  const colorClasses = {
    blue: { bg: 'bg-blue-500', hover: 'hover:bg-blue-600' },
    orange: { bg: 'bg-orange-500', hover: 'hover:bg-orange-600' },
    purple: { bg: 'bg-purple-500', hover: 'hover:bg-purple-600' },
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 flex flex-col">
      <Icon name={icon} />
      <h4 className="text-2xl font-bold text-gray-800">{title}</h4>
      <p className="text-gray-500 mt-1 mb-4">{description}</p>

      <div className="flex space-x-2 mb-6">
        {details.map((detail, index) => (
          <span key={index} className="bg-gray-100 text-gray-700 text-sm font-medium px-3 py-1 rounded-full">{detail}</span>
        ))}
      </div>

      <div className="flex-grow mb-6">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <span className="text-green-500 mr-2">✔</span>
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <span className="text-3xl font-bold text-gray-900">${price}</span>
          <span className="text-lg text-gray-400 line-through ml-2">${originalPrice}</span>
        </div>
        <a href="#" className={`text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-transform transform hover:scale-105 ${colorClasses[color].bg} ${colorClasses[color].hover}`}>
          Enroll Now
        </a>
      </div>
    </div>
  );
}
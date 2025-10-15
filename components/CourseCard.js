// components/CourseCard.js

const Icon = ({ name, color }) => {
  const icons = { heart: '❤️', group: '👥', brain: '🧠' };
  const colors = {
    blue: 'bg-blue-100 text-blue-500',
    orange: 'bg-orange-100 text-orange-500',
    purple: 'bg-purple-100 text-purple-500',
  };
  return (
    <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-4 ${colors[color]}`}>
      <span className="text-3xl">{icons[name]}</span>
    </div>
  );
};

export default function CourseCard({ icon, title, description, price, originalPrice, details, featureTitle, features, color }) {
  const colors = {
    blue: { bg: 'bg-blue-600', hover: 'hover:bg-blue-700' },
    orange: { bg: 'bg-orange-500', hover: 'hover:bg-orange-600' },
    purple: { bg: 'bg-purple-600', hover: 'hover:bg-purple-700' },
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex flex-col h-full">
      <Icon name={icon} color={color} />
      <h4 className="text-2xl font-bold text-gray-900">{title}</h4>
      <p className="text-gray-500 mt-1 mb-4">{description}</p>

      <div className="flex flex-wrap gap-2 mb-6">
        {details.map((detail) => (
          <span key={detail} className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">{detail}</span>
        ))}
      </div>

      <p className="text-gray-800 flex-grow">{/* Placeholder for the longer description if needed */}</p>

      <div className="mt-auto">
        <h5 className="font-bold text-gray-800 mb-2">{featureTitle}</h5>
        <ul className="space-y-2 mb-6">
          {features.map((feature) => (
            <li key={feature} className="flex items-center">
              <span className="text-green-500 mr-2">✔</span>
              <span className="text-gray-600 text-sm">{feature}</span>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-3xl font-bold text-gray-900">${price}</span>
            <span className="text-lg text-gray-400 line-through ml-2">${originalPrice}</span>
          </div>
          <a href="#" className={`text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-transform transform hover:scale-105 ${colors[color].bg} ${colors[color].hover}`}>
            Enroll Now
          </a>
        </div>
      </div>
    </div>
  );
}
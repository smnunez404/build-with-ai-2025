"use client";

const stats = [
  {
    id: 1,
    value: '25+',
    label: 'Eventos realizados',
    icon: '🎯'
  },
  {
    id: 2,
    value: '50+',
    label: 'Talleres y codelabs',
    icon: '💻'
  },
  {
    id: 3,
    value: '1,250+',
    label: 'Miembros de la comunidad',
    icon: '👥'
  },
  {
    id: 4,
    value: '10+',
    label: 'Años de experiencia',
    icon: '🏆'
  },
  {
    id: 5,
    value: '15+',
    label: 'Speakers internacionales',
    icon: '🌎'
  },
  {
    id: 6,
    value: '5+',
    label: 'DevFests organizados',
    icon: '🚀'
  }
];

const ImpactSection = () => {
  return (
    <div className="container-custom mx-auto">
      <h2 className="section-title">Nuestro impacto en la comunidad</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {stats.map((stat) => (
          <div key={stat.id} className="bg-white rounded-xl p-6 shadow-sm text-center hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-2">{stat.icon}</div>
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</h3>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImpactSection; 
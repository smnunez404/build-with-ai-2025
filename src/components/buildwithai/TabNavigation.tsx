"use client";

type TabNavigationProps = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

export default function TabNavigation({ activeTab, setActiveTab }: TabNavigationProps) {
  return (
    <div className="sticky top-0 bg-white shadow-md z-10">
      <div className="container-custom mx-auto py-2">
        <div className="flex overflow-x-auto gap-1 md:gap-6 scrollbar-hide">
          <button 
            onClick={() => setActiveTab('sobre')}
            className={`px-4 py-3 whitespace-nowrap font-medium text-sm transition-colors ${activeTab === 'sobre' ? 'text-primary border-b-2 border-primary' : 'text-gray-500 hover:text-gray-800'}`}
          >
            Sobre el evento
          </button>
          <button 
            onClick={() => setActiveTab('hackathon')}
            className={`px-4 py-3 whitespace-nowrap font-medium text-sm transition-colors ${activeTab === 'hackathon' ? 'text-primary border-b-2 border-primary' : 'text-gray-500 hover:text-gray-800'}`}
          >
            La Hackathon
          </button>
          <button 
            onClick={() => setActiveTab('agenda')}
            className={`px-4 py-3 whitespace-nowrap font-medium text-sm transition-colors ${activeTab === 'agenda' ? 'text-primary border-b-2 border-primary' : 'text-gray-500 hover:text-gray-800'}`}
          >
            Agenda
          </button>
          <button 
            onClick={() => setActiveTab('premios')}
            className={`px-4 py-3 whitespace-nowrap font-medium text-sm transition-colors ${activeTab === 'premios' ? 'text-primary border-b-2 border-primary' : 'text-gray-500 hover:text-gray-800'}`}
          >
            Premios
          </button>
          <button 
            onClick={() => setActiveTab('talleres')}
            className={`px-4 py-3 whitespace-nowrap font-medium text-sm transition-colors ${activeTab === 'talleres' ? 'text-primary border-b-2 border-primary' : 'text-gray-500 hover:text-gray-800'}`}
          >
            Talleres previos
          </button>
          <button 
            onClick={() => setActiveTab('organizadores')}
            className={`px-4 py-3 whitespace-nowrap font-medium text-sm transition-colors ${activeTab === 'organizadores' ? 'text-primary border-b-2 border-primary' : 'text-gray-500 hover:text-gray-800'}`}
          >
            Organizadores
          </button>
          <button 
            onClick={() => setActiveTab('faq')}
            className={`px-4 py-3 whitespace-nowrap font-medium text-sm transition-colors ${activeTab === 'faq' ? 'text-primary border-b-2 border-primary' : 'text-gray-500 hover:text-gray-800'}`}
          >
            FAQ
          </button>
        </div>
      </div>
    </div>
  );
} 
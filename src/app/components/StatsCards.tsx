import { TrendingUp, CheckCircle, Clock, FileText } from 'lucide-react';

export function StatsCards() {
  const stats = [
    {
      label: 'Licitaciones publicadas',
      value: '1,245',
      change: '+12%',
      icon: FileText,
      color: 'blue'
    },
    {
      label: 'Buenas pro otorgadas',
      value: '856',
      change: '+8%',
      icon: CheckCircle,
      color: 'green'
    },
    {
      label: 'Procesos registrados',
      value: '389',
      change: '-3%',
      icon: Clock,
      color: 'yellow'
    },
    {
      label: 'Contratos suscritos',
      value: '742',
      change: '+15%',
      icon: TrendingUp,
      color: 'purple'
    }
  ];

  const colorClasses = {
    blue: 'bg-blue-50 text-blue-600',
    green: 'bg-green-50 text-green-600',
    yellow: 'bg-yellow-50 text-yellow-600',
    purple: 'bg-purple-50 text-purple-600'
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {stats.map((stat, idx) => {
        const Icon = stat.icon;
        return (
          <div key={idx} className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <div className={`p-2 rounded-lg ${colorClasses[stat.color as keyof typeof colorClasses]}`}>
                <Icon size={20} />
              </div>
              <span className={`text-sm font-medium font-['Roboto',sans-serif] ${
                stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.change}
              </span>
            </div>
            <div className="text-2xl font-bold text-gray-800 mb-1 font-['Roboto',sans-serif]">{stat.value}</div>
            <div className="text-sm text-gray-600 font-['Roboto',sans-serif]">{stat.label}</div>
          </div>
        );
      })}
    </div>
  );
}

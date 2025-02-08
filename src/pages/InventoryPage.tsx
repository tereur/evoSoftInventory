import React from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { Inventaire } from '../interfaces/types';
import InventoryForm from '../components/InventoryForm';
import InventoryList from '../components/InventoryList';
import { ClipboardList } from 'lucide-react';

export default function InventoryPage() {
  const [inventaires, setInventaires] = useLocalStorage<Inventaire[]>('inventaires', []);

  const handleSubmit = (newInventaire: Inventaire) => {
    setInventaires(prev => [...prev, newInventaire]);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <ClipboardList className="h-8 w-8 text-indigo-600 mr-3" />
              <h1 className="text-2xl font-bold text-gray-900">
                Gestion des Inventaires
              </h1>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Nouvel Inventaire
              </h2>
              <InventoryForm onSubmit={handleSubmit} />
            </div>

            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Historique des Inventaires
              </h2>
              <InventoryList inventaires={inventaires} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
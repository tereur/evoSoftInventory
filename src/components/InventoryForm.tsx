import React, { useState } from 'react';
import { Inventaire } from '../interfaces/types';
import { magasins, produits } from '../services/inventoryService';

interface InventoryFormProps {
  onSubmit: (inventaire: Inventaire) => void;
  initialData?: Inventaire;
}

export default function InventoryForm({ onSubmit, initialData }: InventoryFormProps) {
  const [date, setDate] = useState(initialData?.date || new Date().toISOString().split('T')[0]);
  const [produitId, setProduitId] = useState(initialData?.produitId || '');
  const [stock, setStock] = useState<Record<string, number>>(
    initialData?.stock || Object.fromEntries(magasins.map(m => [m.id, 0]))
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      date,
      produitId,
      stock
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-md">
      <div>
        <label className="block text-sm font-medium text-gray-700">Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Produit</label>
        <select
          value={produitId}
          onChange={(e) => setProduitId(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          required
        >
          <option value="">Sélectionnez un produit</option>
          {produits.map(produit => (
            <option key={produit.id} value={produit.id}>
              {produit.nom} - {produit.prix}€
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900">Stock par magasin</h3>
        {magasins.map(magasin => (
          <div key={magasin.id} className="flex items-center space-x-4">
            <label className="flex-1 text-sm font-medium text-gray-700">{magasin.nom}</label>
            <input
              type="number"
              min="0"
              value={stock[magasin.id]}
              onChange={(e) => setStock(prev => ({
                ...prev,
                [magasin.id]: parseInt(e.target.value) || 0
              }))}
              className="w-24 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>
        ))}
      </div>

      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Enregistrer l'inventaire
      </button>
    </form>
  );
}
import React from 'react';
import { Inventaire } from '../interfaces/types';
import { getProduitById, getMagasinById } from '../services/inventoryService';

interface InventoryListProps {
  inventaires: Inventaire[];
}

export default function InventoryList({ inventaires }: InventoryListProps) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Produit
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Magasin
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Stock
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {inventaires.flatMap(inv => {
            const produit = getProduitById(inv.produitId);
            return Object.entries(inv.stock).map(([magasinId, stock], index) => {
              const magasin = getMagasinById(magasinId);
              return (
                <tr key={`${inv.date}-${inv.produitId}-${magasinId}`}>
                  {index === 0 && (
                    <td rowSpan={Object.keys(inv.stock).length} className="px-6 py-4 whitespace-nowrap">
                      {new Date(inv.date).toLocaleDateString()}
                    </td>
                  )}
                  {index === 0 && (
                    <td rowSpan={Object.keys(inv.stock).length} className="px-6 py-4 whitespace-nowrap">
                      {produit?.nom}
                    </td>
                  )}
                  <td className="px-6 py-4 whitespace-nowrap">{magasin?.nom}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{stock}</td>
                </tr>
              );
            });
          })}
        </tbody>
      </table>
    </div>
  );
}
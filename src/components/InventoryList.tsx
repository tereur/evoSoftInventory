import React, { useState } from 'react';
import { Inventaire } from '../interfaces/types';
import { getProduitById, getMagasinById } from '../services/inventoryService';
import { Edit2, Trash } from 'lucide-react'; 
import EditForm from './EditForm';  
import Modal from './Modal';

interface InventoryListProps {
  inventaires: Inventaire[];
  onEdit: (inventaire: Inventaire) => void;
  onDelete: (inventaire: Inventaire) => void;
}

export default function InventoryList({ inventaires, onEdit, onDelete }: InventoryListProps) {
  const [editingInventaire, setEditingInventaire] = useState<Inventaire | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEdit = (inventaire: Inventaire) => {
    setEditingInventaire(inventaire);
    setIsModalOpen(true);
  };

  const handleCancelEdit = () => {
    setIsModalOpen(false);
    setEditingInventaire(null);
  };

  const handleSubmitEdit = (updatedInventaire: Inventaire) => {
    onEdit(updatedInventaire);
    setIsModalOpen(false);
    setEditingInventaire(null);
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Produit</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Magasin</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
            <th className="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {inventaires.flatMap((inv) => {
            const produit = getProduitById(inv.produitId);
            return Object.entries(inv.stock).map(([magasinId, stock], index) => {
              const magasin = getMagasinById(magasinId);
              return (
                <tr key={`${inv.date}-${inv.produitId}-${magasinId}`}>
                  {index === 0 && (
                    <td rowSpan={Object.keys(inv.stock).length} className="px-6 py-4 whitespace-nowrap">
                      {new Date(inv.date).toLocaleString()}
                    </td>
                  )}
                  {index === 0 && (
                    <td rowSpan={Object.keys(inv.stock).length} className="px-6 py-4 whitespace-nowrap">
                      {produit?.nom}
                    </td>
                  )}
                  <td className="px-6 py-4 whitespace-nowrap">{magasin?.nom}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{stock}</td>
                  {index === 0 && (
                    <td rowSpan={Object.keys(inv.stock).length} className="px-6 py-4 whitespace-nowrap">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleEdit(inv)}
                          className="text-blue-600 hover:text-blue-900"
                        >
                          <Edit2 className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => onDelete(inv)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <Trash className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  )}
                </tr>
              );
            });
          })}
        </tbody>
      </table>

      <Modal isOpen={isModalOpen} onClose={handleCancelEdit}>
        {editingInventaire && (
          <EditForm
            inventaire={editingInventaire}
            onSubmit={handleSubmitEdit}
            onCancel={handleCancelEdit}
          />
        )}
      </Modal>
    </div>
  );
}

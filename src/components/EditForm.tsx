import React, { useState } from 'react';
import { Inventaire } from '../interfaces/types';
import { getMagasinById } from '../services/inventoryService';

interface EditFormProps {
  inventaire: Inventaire;
  onSubmit: (updatedInventaire: Inventaire) => void;
  onCancel: () => void;
}

const EditForm: React.FC<EditFormProps> = ({ inventaire, onSubmit, onCancel }) => {
  const [updatedStock, setUpdatedStock] = useState(inventaire.stock);

  const handleChange = (magasinId: string, value: number) => {
    setUpdatedStock({ ...updatedStock, [magasinId]: value });
  };

  const handleSubmit = () => {
    onSubmit({ ...inventaire, stock: updatedStock });
  };

  return (
    <div className="p-4 bg-gray-50 rounded-lg">
      <h3 className="text-lg font-medium text-gray-900">Modifier l'inventaire</h3>
      <div className="space-y-4 mt-4">
        {Object.entries(updatedStock).map(([magasinId, stock], index) => {
          const magasin = getMagasinById(magasinId);
          return (
            <div key={magasinId} className="flex items-center space-x-2">
              <span>{magasin?.nom}</span>
              <input
                type="number"
                value={stock}
                onChange={(e) => handleChange(magasinId, Number(e.target.value))}
                className="border p-2 rounded-md"
              />
            </div>
          );
        })}
      </div>
      <div className="mt-4 flex space-x-2">
        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Enregistrer
        </button>
        <button
          onClick={onCancel}
          className="bg-gray-500 text-white px-4 py-2 rounded-md"
        >
          Annuler
        </button>
      </div>
    </div>
  );
};

export default EditForm;

import { Inventaire } from '../interfaces/types';
import { getProduitById, getMagasinById } from '../services/inventoryService';

export const exportToCSV = (inventaires: Inventaire[]) => {
  const headers = ['Date', 'Produit', 'Magasin', 'Stock'];
  const rows = inventaires.flatMap(inv => {
    const produit = getProduitById(inv.produitId);
    return Object.entries(inv.stock).map(([magasinId, stock]) => {
      const magasin = getMagasinById(magasinId);
      return [
        inv.date,
        produit?.nom || '',
        magasin?.nom || '',
        stock
      ].join(',');
    });
  });

  const csv = [headers.join(','), ...rows].join('\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  
  link.setAttribute('href', url);
  link.setAttribute('download', `inventaire_${new Date().toISOString().split('T')[0]}.csv`);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
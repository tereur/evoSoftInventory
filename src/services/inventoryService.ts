import { magasins, produits } from '../data/data';
import { Inventaire } from '../interfaces/types';


export const getInventairesByDate = (inventaires: Inventaire[], date: string) => {
  return inventaires.filter(inv => inv.date === date);
};

export const getProduitById = (id: string) => {
  return produits.find(p => p.id === id);
};

export const getMagasinById = (id: string) => {
  return magasins.find(m => m.id === id);
};

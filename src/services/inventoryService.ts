import { Magasin, Produit, Inventaire } from '../interfaces/types';

export const magasins: Magasin[] = [
  {
    id: '1',
    nom: 'Centre Commercial Paris',
    adresse: '123 Avenue des Champs-Élysées, Paris'
  },
  {
    id: '2',
    nom: 'Galerie Lyon',
    adresse: '456 Rue de la République, Lyon'
  },
  {
    id: '3',
    nom: 'Boutique Marseille',
    adresse: '789 Promenade du Vieux-Port, Marseille'
  }
];

export const produits: Produit[] = [
  {
    id: '1',
    nom: 'Ordinateur Portable Pro',
    prix: 1299.99
  },
  {
    id: '2',
    nom: 'Smartphone Ultra',
    prix: 899.99
  },
  {
    id: '3',
    nom: 'Tablette Air',
    prix: 599.99
  },
  {
    id: '4',
    nom: 'Écouteurs Sans Fil',
    prix: 199.99
  }
];

export const getInventairesByDate = (inventaires: Inventaire[], date: string) => {
  return inventaires.filter(inv => inv.date === date);
};

export const getProduitById = (id: string) => {
  return produits.find(p => p.id === id);
};

export const getMagasinById = (id: string) => {
  return magasins.find(m => m.id === id);
};
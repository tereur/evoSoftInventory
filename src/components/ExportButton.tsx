import React from 'react';
import { Download } from 'lucide-react';
import { Inventaire } from '../interfaces/types';
import { exportToCSV } from '../utils/csvExport';

interface ExportButtonProps {
  inventaires: Inventaire[];
}

export default function ExportButton({ inventaires }: ExportButtonProps) {
  return (
    <button
      onClick={() => exportToCSV(inventaires)}
      className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
    >
      <Download className="mr-2 h-4 w-4" />
      Exporter en CSV
    </button>
  );
}
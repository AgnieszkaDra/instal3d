import { useContext } from 'react';
import { SubmenuContext } from '../context/SubmenuContext';

export const useSubmenuContext = () => {
  const context = useContext(SubmenuContext);
  if (!context) throw new Error('useSubmenuToggle must be used within SubmenuProvider');
  return context;
};
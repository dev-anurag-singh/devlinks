import { useContext } from 'react';
import { LinksContext } from './LinksContext';

export function useLinkForm() {
  const context = useContext(LinksContext);
  return context;
}

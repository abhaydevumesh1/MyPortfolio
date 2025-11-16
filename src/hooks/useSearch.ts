
import { useState } from 'react';

export const useSearch = <T>(items: T[], key: keyof T) => {
  const [query, setQuery] = useState('');
  const filtered = items.filter(item =>
    String(item[key]).toLowerCase().includes(query.toLowerCase())
  );
  return { query, setQuery, filtered };
};
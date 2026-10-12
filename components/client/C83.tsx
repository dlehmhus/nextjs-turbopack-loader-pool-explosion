'use client';

import { useState } from 'react';

import { value83 } from '../../lib/u83';

export function C83() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value83(String(n))}</button>;
}

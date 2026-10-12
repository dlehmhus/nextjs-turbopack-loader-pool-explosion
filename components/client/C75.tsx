'use client';

import { useState } from 'react';

import { value75 } from '../../lib/u75';

export function C75() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value75(String(n))}</button>;
}

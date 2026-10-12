'use client';

import { useState } from 'react';

import { value79 } from '../../lib/u79';

export function C79() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value79(String(n))}</button>;
}

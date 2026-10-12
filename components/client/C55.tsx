'use client';

import { useState } from 'react';

import { value55 } from '../../lib/u55';

export function C55() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value55(String(n))}</button>;
}

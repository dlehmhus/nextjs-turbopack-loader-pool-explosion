'use client';

import { useState } from 'react';

import { value77 } from '../../lib/u77';

export function C77() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value77(String(n))}</button>;
}

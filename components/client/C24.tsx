'use client';

import { useState } from 'react';

import { value24 } from '../../lib/u24';

export function C24() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value24(String(n))}</button>;
}

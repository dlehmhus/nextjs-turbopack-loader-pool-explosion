'use client';

import { useState } from 'react';

import { value45 } from '../../lib/u45';

export function C45() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value45(String(n))}</button>;
}

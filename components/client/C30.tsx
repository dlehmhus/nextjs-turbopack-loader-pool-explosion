'use client';

import { useState } from 'react';

import { value30 } from '../../lib/u30';

export function C30() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value30(String(n))}</button>;
}

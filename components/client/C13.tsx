'use client';

import { useState } from 'react';

import { value13 } from '../../lib/u13';

export function C13() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value13(String(n))}</button>;
}

'use client';

import { useState } from 'react';

import { value0 } from '../../lib/u0';

export function C0() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value0(String(n))}</button>;
}

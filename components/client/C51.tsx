'use client';

import { useState } from 'react';

import { value51 } from '../../lib/u51';

export function C51() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value51(String(n))}</button>;
}

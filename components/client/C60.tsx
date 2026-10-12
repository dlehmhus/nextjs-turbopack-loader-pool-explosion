'use client';

import { useState } from 'react';

import { value60 } from '../../lib/u60';

export function C60() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value60(String(n))}</button>;
}

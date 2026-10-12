'use client';

import { useState } from 'react';

import { value10 } from '../../lib/u10';

export function C10() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value10(String(n))}</button>;
}

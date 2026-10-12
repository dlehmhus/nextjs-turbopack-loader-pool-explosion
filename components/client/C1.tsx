'use client';

import { useState } from 'react';

import { value1 } from '../../lib/u1';

export function C1() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value1(String(n))}</button>;
}

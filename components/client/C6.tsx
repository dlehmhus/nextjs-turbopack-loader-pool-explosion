'use client';

import { useState } from 'react';

import { value6 } from '../../lib/u6';

export function C6() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value6(String(n))}</button>;
}

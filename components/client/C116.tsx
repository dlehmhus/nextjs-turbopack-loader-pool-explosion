'use client';

import { useState } from 'react';

import { value116 } from '../../lib/u116';

export function C116() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value116(String(n))}</button>;
}

'use client';

import { useState } from 'react';

import { value53 } from '../../lib/u53';

export function C53() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value53(String(n))}</button>;
}

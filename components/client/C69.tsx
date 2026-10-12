'use client';

import { useState } from 'react';

import { value69 } from '../../lib/u69';

export function C69() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value69(String(n))}</button>;
}

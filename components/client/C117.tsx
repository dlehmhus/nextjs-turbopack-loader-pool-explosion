'use client';

import { useState } from 'react';

import { value117 } from '../../lib/u117';

export function C117() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value117(String(n))}</button>;
}

'use client';

import { useState } from 'react';

import { value2 } from '../../lib/u2';

export function C2() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value2(String(n))}</button>;
}

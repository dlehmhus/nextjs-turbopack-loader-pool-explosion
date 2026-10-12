'use client';

import { useState } from 'react';

import { value113 } from '../../lib/u113';

export function C113() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value113(String(n))}</button>;
}

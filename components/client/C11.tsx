'use client';

import { useState } from 'react';

import { value11 } from '../../lib/u11';

export function C11() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value11(String(n))}</button>;
}

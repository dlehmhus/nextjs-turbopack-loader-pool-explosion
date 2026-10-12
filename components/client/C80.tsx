'use client';

import { useState } from 'react';

import { value80 } from '../../lib/u80';

export function C80() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value80(String(n))}</button>;
}

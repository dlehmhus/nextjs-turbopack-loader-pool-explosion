'use client';

import { useState } from 'react';

import { value23 } from '../../lib/u23';

export function C23() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value23(String(n))}</button>;
}

'use client';

import { useState } from 'react';

import { value94 } from '../../lib/u94';

export function C94() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value94(String(n))}</button>;
}

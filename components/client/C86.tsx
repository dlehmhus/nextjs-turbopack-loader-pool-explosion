'use client';

import { useState } from 'react';

import { value86 } from '../../lib/u86';

export function C86() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value86(String(n))}</button>;
}

'use client';

import { useState } from 'react';

import { value63 } from '../../lib/u63';

export function C63() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value63(String(n))}</button>;
}

'use client';

import { useState } from 'react';

import { value99 } from '../../lib/u99';

export function C99() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value99(String(n))}</button>;
}

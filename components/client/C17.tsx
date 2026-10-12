'use client';

import { useState } from 'react';

import { value17 } from '../../lib/u17';

export function C17() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value17(String(n))}</button>;
}

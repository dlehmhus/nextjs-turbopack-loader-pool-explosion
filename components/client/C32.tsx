'use client';

import { useState } from 'react';

import { value32 } from '../../lib/u32';

export function C32() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value32(String(n))}</button>;
}

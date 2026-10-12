'use client';

import { useState } from 'react';

import { value64 } from '../../lib/u64';

export function C64() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value64(String(n))}</button>;
}

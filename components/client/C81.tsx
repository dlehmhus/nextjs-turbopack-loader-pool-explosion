'use client';

import { useState } from 'react';

import { value81 } from '../../lib/u81';

export function C81() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value81(String(n))}</button>;
}

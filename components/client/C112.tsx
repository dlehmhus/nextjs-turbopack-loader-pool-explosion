'use client';

import { useState } from 'react';

import { value112 } from '../../lib/u112';

export function C112() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value112(String(n))}</button>;
}

'use client';

import { useState } from 'react';

import { value95 } from '../../lib/u95';

export function C95() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value95(String(n))}</button>;
}

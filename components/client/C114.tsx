'use client';

import { useState } from 'react';

import { value114 } from '../../lib/u114';

export function C114() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value114(String(n))}</button>;
}

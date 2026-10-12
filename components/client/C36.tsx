'use client';

import { useState } from 'react';

import { value36 } from '../../lib/u36';

export function C36() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value36(String(n))}</button>;
}

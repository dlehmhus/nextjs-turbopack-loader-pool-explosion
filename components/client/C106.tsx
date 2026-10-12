'use client';

import { useState } from 'react';

import { value106 } from '../../lib/u106';

export function C106() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value106(String(n))}</button>;
}

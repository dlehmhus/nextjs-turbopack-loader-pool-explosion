'use client';

import { useState } from 'react';

import { value109 } from '../../lib/u109';

export function C109() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value109(String(n))}</button>;
}

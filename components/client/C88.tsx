'use client';

import { useState } from 'react';

import { value88 } from '../../lib/u88';

export function C88() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value88(String(n))}</button>;
}

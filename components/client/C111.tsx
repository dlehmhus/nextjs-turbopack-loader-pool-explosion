'use client';

import { useState } from 'react';

import { value111 } from '../../lib/u111';

export function C111() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value111(String(n))}</button>;
}

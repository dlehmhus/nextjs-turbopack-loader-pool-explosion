'use client';

import { useState } from 'react';

import { value98 } from '../../lib/u98';

export function C98() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value98(String(n))}</button>;
}

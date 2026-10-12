'use client';

import { useState } from 'react';

import { value96 } from '../../lib/u96';

export function C96() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value96(String(n))}</button>;
}

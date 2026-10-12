'use client';

import { useState } from 'react';

import { value104 } from '../../lib/u104';

export function C104() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value104(String(n))}</button>;
}

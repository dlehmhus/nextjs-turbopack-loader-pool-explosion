'use client';

import { useState } from 'react';

import { value15 } from '../../lib/u15';

export function C15() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value15(String(n))}</button>;
}

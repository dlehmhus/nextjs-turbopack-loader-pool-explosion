'use client';

import { useState } from 'react';

import { value20 } from '../../lib/u20';

export function C20() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value20(String(n))}</button>;
}

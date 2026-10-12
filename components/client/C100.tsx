'use client';

import { useState } from 'react';

import { value100 } from '../../lib/u100';

export function C100() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value100(String(n))}</button>;
}

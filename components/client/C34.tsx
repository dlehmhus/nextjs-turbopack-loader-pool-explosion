'use client';

import { useState } from 'react';

import { value34 } from '../../lib/u34';

export function C34() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value34(String(n))}</button>;
}

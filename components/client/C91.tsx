'use client';

import { useState } from 'react';

import { value91 } from '../../lib/u91';

export function C91() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value91(String(n))}</button>;
}

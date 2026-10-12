'use client';

import { useState } from 'react';

import { value50 } from '../../lib/u50';

export function C50() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value50(String(n))}</button>;
}

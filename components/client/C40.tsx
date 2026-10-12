'use client';

import { useState } from 'react';

import { value40 } from '../../lib/u40';

export function C40() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value40(String(n))}</button>;
}

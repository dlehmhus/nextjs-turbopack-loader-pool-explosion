'use client';

import { useState } from 'react';

import { value61 } from '../../lib/u61';

export function C61() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value61(String(n))}</button>;
}

'use client';

import { useState } from 'react';

import { value115 } from '../../lib/u115';

export function C115() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value115(String(n))}</button>;
}

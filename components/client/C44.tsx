'use client';

import { useState } from 'react';

import { value44 } from '../../lib/u44';

export function C44() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value44(String(n))}</button>;
}

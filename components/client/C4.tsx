'use client';

import { useState } from 'react';

import { value4 } from '../../lib/u4';

export function C4() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value4(String(n))}</button>;
}

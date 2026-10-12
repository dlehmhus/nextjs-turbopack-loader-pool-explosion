'use client';

import { useState } from 'react';

import { value58 } from '../../lib/u58';

export function C58() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value58(String(n))}</button>;
}

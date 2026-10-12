'use client';

import { useState } from 'react';

import { value62 } from '../../lib/u62';

export function C62() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value62(String(n))}</button>;
}

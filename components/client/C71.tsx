'use client';

import { useState } from 'react';

import { value71 } from '../../lib/u71';

export function C71() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value71(String(n))}</button>;
}

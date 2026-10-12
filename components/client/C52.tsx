'use client';

import { useState } from 'react';

import { value52 } from '../../lib/u52';

export function C52() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value52(String(n))}</button>;
}

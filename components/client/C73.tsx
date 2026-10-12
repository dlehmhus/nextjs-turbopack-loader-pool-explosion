'use client';

import { useState } from 'react';

import { value73 } from '../../lib/u73';

export function C73() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value73(String(n))}</button>;
}

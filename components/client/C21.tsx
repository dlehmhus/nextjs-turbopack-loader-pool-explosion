'use client';

import { useState } from 'react';

import { value21 } from '../../lib/u21';

export function C21() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value21(String(n))}</button>;
}

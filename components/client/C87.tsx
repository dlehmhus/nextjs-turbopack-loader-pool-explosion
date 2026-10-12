'use client';

import { useState } from 'react';

import { value87 } from '../../lib/u87';

export function C87() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value87(String(n))}</button>;
}

'use client';

import { useState } from 'react';

import { value47 } from '../../lib/u47';

export function C47() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value47(String(n))}</button>;
}

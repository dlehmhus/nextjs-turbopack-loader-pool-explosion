'use client';

import { useState } from 'react';

import { value28 } from '../../lib/u28';

export function C28() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value28(String(n))}</button>;
}

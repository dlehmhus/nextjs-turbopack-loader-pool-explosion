'use client';

import { useState } from 'react';

import { value97 } from '../../lib/u97';

export function C97() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value97(String(n))}</button>;
}

'use client';

import { useState } from 'react';

import { value92 } from '../../lib/u92';

export function C92() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value92(String(n))}</button>;
}

'use client';

import { useState } from 'react';

import { value29 } from '../../lib/u29';

export function C29() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value29(String(n))}</button>;
}

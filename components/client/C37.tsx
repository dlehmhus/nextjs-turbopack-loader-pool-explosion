'use client';

import { useState } from 'react';

import { value37 } from '../../lib/u37';

export function C37() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value37(String(n))}</button>;
}

'use client';

import { useState } from 'react';

import { value46 } from '../../lib/u46';

export function C46() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value46(String(n))}</button>;
}

'use client';

import { useState } from 'react';

import { value74 } from '../../lib/u74';

export function C74() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value74(String(n))}</button>;
}

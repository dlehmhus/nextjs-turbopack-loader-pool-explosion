'use client';

import { useState } from 'react';

import { value85 } from '../../lib/u85';

export function C85() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value85(String(n))}</button>;
}

'use client';

import { useState } from 'react';

import { value93 } from '../../lib/u93';

export function C93() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value93(String(n))}</button>;
}

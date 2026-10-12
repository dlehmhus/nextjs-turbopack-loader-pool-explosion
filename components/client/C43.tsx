'use client';

import { useState } from 'react';

import { value43 } from '../../lib/u43';

export function C43() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value43(String(n))}</button>;
}

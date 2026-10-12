'use client';

import { useState } from 'react';

import { value42 } from '../../lib/u42';

export function C42() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value42(String(n))}</button>;
}

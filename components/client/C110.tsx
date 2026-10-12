'use client';

import { useState } from 'react';

import { value110 } from '../../lib/u110';

export function C110() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value110(String(n))}</button>;
}

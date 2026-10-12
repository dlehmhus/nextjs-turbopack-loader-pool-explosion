'use client';

import { useState } from 'react';

import { value22 } from '../../lib/u22';

export function C22() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value22(String(n))}</button>;
}

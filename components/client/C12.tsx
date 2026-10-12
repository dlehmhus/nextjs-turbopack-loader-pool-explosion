'use client';

import { useState } from 'react';

import { value12 } from '../../lib/u12';

export function C12() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value12(String(n))}</button>;
}

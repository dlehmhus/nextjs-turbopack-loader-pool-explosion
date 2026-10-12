'use client';

import { useState } from 'react';

import { value89 } from '../../lib/u89';

export function C89() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value89(String(n))}</button>;
}

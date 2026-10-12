'use client';

import { useState } from 'react';

import { value101 } from '../../lib/u101';

export function C101() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value101(String(n))}</button>;
}

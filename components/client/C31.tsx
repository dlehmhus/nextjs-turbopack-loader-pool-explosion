'use client';

import { useState } from 'react';

import { value31 } from '../../lib/u31';

export function C31() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value31(String(n))}</button>;
}

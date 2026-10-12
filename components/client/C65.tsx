'use client';

import { useState } from 'react';

import { value65 } from '../../lib/u65';

export function C65() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value65(String(n))}</button>;
}

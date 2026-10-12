'use client';

import { useState } from 'react';

import { value16 } from '../../lib/u16';

export function C16() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value16(String(n))}</button>;
}

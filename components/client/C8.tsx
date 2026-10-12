'use client';

import { useState } from 'react';

import { value8 } from '../../lib/u8';

export function C8() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value8(String(n))}</button>;
}

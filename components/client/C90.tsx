'use client';

import { useState } from 'react';

import { value90 } from '../../lib/u90';

export function C90() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value90(String(n))}</button>;
}

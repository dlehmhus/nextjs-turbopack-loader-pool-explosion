'use client';

import { useState } from 'react';

import { value103 } from '../../lib/u103';

export function C103() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value103(String(n))}</button>;
}

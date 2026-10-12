'use client';

import { useState } from 'react';

import { value68 } from '../../lib/u68';

export function C68() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value68(String(n))}</button>;
}

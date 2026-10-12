'use client';

import { useState } from 'react';

import { value67 } from '../../lib/u67';

export function C67() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value67(String(n))}</button>;
}

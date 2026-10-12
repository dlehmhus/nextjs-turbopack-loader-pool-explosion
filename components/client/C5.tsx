'use client';

import { useState } from 'react';

import { value5 } from '../../lib/u5';

export function C5() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value5(String(n))}</button>;
}

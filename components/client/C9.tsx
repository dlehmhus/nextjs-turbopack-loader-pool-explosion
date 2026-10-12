'use client';

import { useState } from 'react';

import { value9 } from '../../lib/u9';

export function C9() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value9(String(n))}</button>;
}

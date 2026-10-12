'use client';

import { useState } from 'react';

import { value108 } from '../../lib/u108';

export function C108() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value108(String(n))}</button>;
}

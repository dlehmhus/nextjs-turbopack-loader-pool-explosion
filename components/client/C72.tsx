'use client';

import { useState } from 'react';

import { value72 } from '../../lib/u72';

export function C72() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value72(String(n))}</button>;
}

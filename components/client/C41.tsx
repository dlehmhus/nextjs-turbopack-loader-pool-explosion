'use client';

import { useState } from 'react';

import { value41 } from '../../lib/u41';

export function C41() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value41(String(n))}</button>;
}

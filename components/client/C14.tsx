'use client';

import { useState } from 'react';

import { value14 } from '../../lib/u14';

export function C14() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value14(String(n))}</button>;
}

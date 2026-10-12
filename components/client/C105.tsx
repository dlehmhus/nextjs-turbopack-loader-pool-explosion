'use client';

import { useState } from 'react';

import { value105 } from '../../lib/u105';

export function C105() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value105(String(n))}</button>;
}

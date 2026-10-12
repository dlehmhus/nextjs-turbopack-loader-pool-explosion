'use client';

import { useState } from 'react';

import { value48 } from '../../lib/u48';

export function C48() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value48(String(n))}</button>;
}

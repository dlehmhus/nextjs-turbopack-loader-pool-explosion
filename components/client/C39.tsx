'use client';

import { useState } from 'react';

import { value39 } from '../../lib/u39';

export function C39() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value39(String(n))}</button>;
}

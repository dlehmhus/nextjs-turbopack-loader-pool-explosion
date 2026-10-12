'use client';

import { useState } from 'react';

import { value25 } from '../../lib/u25';

export function C25() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value25(String(n))}</button>;
}

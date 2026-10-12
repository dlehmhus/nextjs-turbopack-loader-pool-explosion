'use client';

import { useState } from 'react';

import { value26 } from '../../lib/u26';

export function C26() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value26(String(n))}</button>;
}

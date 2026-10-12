'use client';

import { useState } from 'react';

import { value84 } from '../../lib/u84';

export function C84() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value84(String(n))}</button>;
}

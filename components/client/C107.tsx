'use client';

import { useState } from 'react';

import { value107 } from '../../lib/u107';

export function C107() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value107(String(n))}</button>;
}

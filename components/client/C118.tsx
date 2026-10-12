'use client';

import { useState } from 'react';

import { value118 } from '../../lib/u118';

export function C118() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value118(String(n))}</button>;
}

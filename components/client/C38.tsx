'use client';

import { useState } from 'react';

import { value38 } from '../../lib/u38';

export function C38() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value38(String(n))}</button>;
}

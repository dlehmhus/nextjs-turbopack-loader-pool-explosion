'use client';

import { useState } from 'react';

import { value7 } from '../../lib/u7';

export function C7() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value7(String(n))}</button>;
}

'use client';

import { useState } from 'react';

import { value56 } from '../../lib/u56';

export function C56() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value56(String(n))}</button>;
}

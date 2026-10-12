'use client';

import { useState } from 'react';

import { value66 } from '../../lib/u66';

export function C66() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value66(String(n))}</button>;
}

'use client';

import { useState } from 'react';

import { value82 } from '../../lib/u82';

export function C82() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value82(String(n))}</button>;
}

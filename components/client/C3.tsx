'use client';

import { useState } from 'react';

import { value3 } from '../../lib/u3';

export function C3() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value3(String(n))}</button>;
}

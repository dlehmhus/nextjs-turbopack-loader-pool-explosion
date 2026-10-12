'use client';

import { useState } from 'react';

import { value54 } from '../../lib/u54';

export function C54() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value54(String(n))}</button>;
}

'use client';

import { useState } from 'react';

import { value35 } from '../../lib/u35';

export function C35() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value35(String(n))}</button>;
}

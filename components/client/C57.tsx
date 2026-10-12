'use client';

import { useState } from 'react';

import { value57 } from '../../lib/u57';

export function C57() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value57(String(n))}</button>;
}

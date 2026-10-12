'use client';

import { useState } from 'react';

import { value119 } from '../../lib/u119';

export function C119() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value119(String(n))}</button>;
}

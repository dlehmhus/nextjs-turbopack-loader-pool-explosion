'use client';

import { useState } from 'react';

import { value27 } from '../../lib/u27';

export function C27() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value27(String(n))}</button>;
}

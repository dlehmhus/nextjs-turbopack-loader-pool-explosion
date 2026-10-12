'use client';

import { useState } from 'react';

import { value102 } from '../../lib/u102';

export function C102() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value102(String(n))}</button>;
}

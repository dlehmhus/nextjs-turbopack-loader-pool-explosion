'use client';

import { useState } from 'react';

import { value76 } from '../../lib/u76';

export function C76() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value76(String(n))}</button>;
}

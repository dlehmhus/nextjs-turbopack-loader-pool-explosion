'use client';

import { useState } from 'react';

import { value33 } from '../../lib/u33';

export function C33() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value33(String(n))}</button>;
}

'use client';

import { useState } from 'react';

import { value78 } from '../../lib/u78';

export function C78() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value78(String(n))}</button>;
}

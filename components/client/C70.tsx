'use client';

import { useState } from 'react';

import { value70 } from '../../lib/u70';

export function C70() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value70(String(n))}</button>;
}

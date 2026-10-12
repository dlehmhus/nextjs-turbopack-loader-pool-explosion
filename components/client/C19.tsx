'use client';

import { useState } from 'react';

import { value19 } from '../../lib/u19';

export function C19() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value19(String(n))}</button>;
}

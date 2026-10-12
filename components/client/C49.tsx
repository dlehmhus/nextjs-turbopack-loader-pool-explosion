'use client';

import { useState } from 'react';

import { value49 } from '../../lib/u49';

export function C49() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value49(String(n))}</button>;
}

'use client';

import { useState } from 'react';

import { value18 } from '../../lib/u18';

export function C18() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(n + 1)}>{value18(String(n))}</button>;
}

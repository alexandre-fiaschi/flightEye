import { useMemo } from 'react';
import { useRouter } from 'next/navigation';

export function usePathname() {
  const { pathname } = useRouter();

  return useMemo(() => pathname, [pathname]);
}

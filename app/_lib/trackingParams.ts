const KEY = 'fk_tracking';

export interface TrackingParams {
  s1?: string;
  s2?: string;
}

export function captureParams(): void {
  if (typeof window === 'undefined') return;
  const url = new URLSearchParams(window.location.search);
  const s1 = url.get('s1') ?? undefined;
  const s2 = url.get('s2') ?? undefined;
  if (s1 || s2) {
    sessionStorage.setItem(KEY, JSON.stringify({ s1, s2 }));
  }
}

export function getParams(): TrackingParams {
  if (typeof window === 'undefined') return {};
  try {
    return JSON.parse(sessionStorage.getItem(KEY) ?? '{}');
  } catch {
    return {};
  }
}

export function buildQueryString(base: URLSearchParams = new URLSearchParams()): string {
  const { s1, s2 } = getParams();
  if (s1) base.set('s1', s1);
  if (s2) base.set('s2', s2);
  const str = base.toString();
  return str ? `?${str}` : '';
}

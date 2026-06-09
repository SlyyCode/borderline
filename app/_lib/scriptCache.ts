import { REGISTER_SCRIPT_ID, LOGIN_SCRIPT_ID } from './scripts';
import { getParams } from './trackingParams';

const SESSION_T = Date.now();

function buildSrc(id: string): string {
  const { s1, s2 } = getParams();
  const params = new URLSearchParams({ id, source: '00298', _t: String(SESSION_T) });
  if (s1) params.set('s1', s1);
  if (s2) params.set('s2', s2);
  return `https://c.opfourpro.net/8/js/script.js?${params.toString()}`;
}

// Computed once per session, after tracking params have been captured
let _registerSrc: string | null = null;
let _loginSrc: string | null = null;

export function getRegisterScriptSrc(): string {
  if (!_registerSrc) _registerSrc = buildSrc(REGISTER_SCRIPT_ID);
  return _registerSrc;
}

export function getLoginScriptSrc(): string {
  if (!_loginSrc) _loginSrc = buildSrc(LOGIN_SCRIPT_ID);
  return _loginSrc;
}

type State = 'idle' | 'loading' | 'loaded';

interface Entry {
  offerBox: HTMLDivElement;
  state: State;
  pendingCallbacks: (() => void)[];
}

const store: Partial<Record<'register' | 'login', Entry>> = {};

function getEntry(key: 'register' | 'login'): Entry {
  if (!store[key]) {
    const offerBox = document.createElement('div');
    offerBox.id = 'offer-box';
    const selector = document.createElement('div');
    selector.id = 'selector';
    offerBox.appendChild(selector);
    store[key] = { offerBox, state: 'idle', pendingCallbacks: [] };
  }
  return store[key]!;
}

export function attachForm(
  key: 'register' | 'login',
  src: string,
  mountEl: HTMLElement,
  onLoaded: () => void,
  applyStyles: () => void,
): () => void {
  const entry = getEntry(key);
  mountEl.appendChild(entry.offerBox);

  let observer: MutationObserver | null = null;
  try {
    observer = new MutationObserver(applyStyles);
    observer.observe(document.body, { childList: true, subtree: true });
  } catch { /* ignore */ }

  const detach = () => {
    observer?.disconnect();
    if (entry.offerBox.parentNode) entry.offerBox.parentNode.removeChild(entry.offerBox);
  };

  if (entry.state === 'loaded') {
    onLoaded();
    applyStyles();
    return detach;
  }

  if (entry.state === 'loading') {
    entry.pendingCallbacks.push(onLoaded);
    return () => {
      detach();
      entry.pendingCallbacks = entry.pendingCallbacks.filter(fn => fn !== onLoaded);
    };
  }

  entry.state = 'loading';
  entry.pendingCallbacks.push(onLoaded);

  const notify = () => {
    entry.state = 'loaded';
    entry.pendingCallbacks.forEach(fn => fn());
    entry.pendingCallbacks = [];
  };

  const script = document.createElement('script');
  script.src = src;
  script.async = true;
  script.onload = () => {
    let attempts = 0;
    const poll = () => {
      if (entry.offerBox.querySelector('.ptprelinker--box')) {
        notify();
      } else if (attempts++ < 30) {
        setTimeout(poll, 200);
      } else {
        notify();
      }
    };
    setTimeout(poll, 150);
  };
  script.onerror = () => notify();
  document.body.appendChild(script);

  return detach;
}

let preloaded = false;
export function preloadScripts() {
  if (preloaded || typeof document === 'undefined') return;
  preloaded = true;
  [getRegisterScriptSrc(), getLoginScriptSrc()].forEach(href => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'script';
    link.href = href;
    document.head.appendChild(link);
  });
}

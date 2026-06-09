'use client';

import { useEffect, useRef, useState } from 'react';
import { getRegisterScriptSrc, attachForm } from '@/app/_lib/scriptCache';

const formStyles = `
  .ptprelinker--box {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    margin: 0 auto !important;
    width: 100% !important;
    max-width: 100% !important;
    background: transparent !important;
  }
  .ptprelinker-content,
  .ptprelinker-content-inner,
  .ptprelinker-content-content {
    width: 100% !important;
    max-width: 100% !important;
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    background: transparent !important;
  }
  .ptprelinker-register-form,
  .ptprelinker-register-form form {
    width: 100% !important;
    max-width: 100% !important;
    margin: 0 auto !important;
    background-color: transparent !important;
  }
  .ptprelinker-input,
  #offer-box .ptprelinker-input,
  input.ptprelinker-input {
    width: 100% !important;
    background-color: #141210 !important;
    border: 1.5px solid #2d2820 !important;
    border-radius: 12px !important;
    padding: 13px 16px !important;
    color: #fff8f0 !important;
    font-size: 14px !important;
    transition: all 0.25s ease !important;
    margin-bottom: 10px !important;
    outline: none !important;
  }
  .ptprelinker-input:focus {
    border-color: #f97316 !important;
    background-color: #0d0b09 !important;
    box-shadow: 0 0 0 3px rgba(249,115,22,0.18) !important;
  }
  .ptprelinker-input::placeholder { color: #3a2e28 !important; }
  .ptprelinker-input-group { width: 100% !important; margin-bottom: 4px !important; }
  .ptprelinker-button,
  .ptprelinker-button-success,
  #offer-box input[type="submit"],
  #offer-box button,
  .ptprelinker--box button,
  .ptprelinker--box input[type="submit"],
  .ptprelinker-register-form button,
  .ptprelinker-register-form input[type="submit"] {
    width: 100% !important;
    background: linear-gradient(135deg, #f97316 0%, #fb923c 100%) !important;
    background-color: #f97316 !important;
    border: none !important;
    border-radius: 12px !important;
    padding: 14px 24px !important;
    color: #fff !important;
    font-weight: 700 !important;
    font-size: 15px !important;
    cursor: pointer !important;
    transition: all 0.25s ease !important;
    margin-top: 6px !important;
    box-shadow: 0 4px 20px rgba(249,115,22,0.45) !important;
    letter-spacing: 0.01em !important;
  }
  .ptprelinker-button:hover,
  #offer-box input[type="submit"]:hover,
  #offer-box button:hover {
    opacity: 0.88 !important;
    transform: translateY(-1px) !important;
    box-shadow: 0 6px 28px rgba(249,115,22,0.55) !important;
  }
  .ptprelinker-checkbox {
    display: flex !important;
    align-items: flex-start !important;
    margin-bottom: 14px !important;
    width: 100% !important;
  }
  .ptprelinker-input-checkbox {
    width: 16px !important;
    height: 16px !important;
    min-width: 16px !important;
    margin-right: 9px !important;
    margin-top: 2px !important;
    accent-color: #f97316 !important;
    flex-shrink: 0 !important;
  }
  .ptprelinker-label-checkbox {
    color: #5c5248 !important;
    font-size: 12px !important;
    line-height: 1.6 !important;
  }
  .ptprelinker-cgu-link { color: #fb923c !important; font-weight: 600 !important; }
  .ptprelinker-label:empty { display: none !important; }
  .cgu-couple, .ptprelinker-checkbox.cgu-couple { display: none !important; }
  .error-register { color: #ef4444 !important; font-size: 12px !important; text-align: center !important; margin: 6px 0 !important; }
`;

function buildCustomSelect(select: HTMLSelectElement) {
  if (select.dataset.replaced) return;
  select.dataset.replaced = '1';
  const wrapper = document.createElement('div');
  wrapper.style.cssText = 'position:relative;width:100%;margin-bottom:10px;';
  const label = document.createElement('span');
  label.textContent = select.options[0]?.text ?? '';
  label.style.cssText = 'color:#3a2e28;';
  const chevronEl = document.createElement('span');
  chevronEl.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3a2e28" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>';
  chevronEl.style.cssText = 'position:absolute;right:14px;top:50%;transform:translateY(-50%);display:flex;align-items:center;pointer-events:none;';
  const display = document.createElement('div');
  display.dataset.customSelect = '1';
  display.style.cssText = 'position:relative;width:100%;background:#141210;border:1.5px solid #2d2820;border-radius:12px;padding:13px 44px 13px 16px;font-size:14px;line-height:1.5;cursor:pointer;box-sizing:border-box;user-select:none;transition:all 0.25s ease;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:#fff8f0;';
  display.appendChild(label);
  display.appendChild(chevronEl);
  const dropdown = document.createElement('div');
  dropdown.style.cssText = 'position:absolute;top:calc(100% + 4px);left:0;right:0;background:#141210;border:1.5px solid #2d2820;border-radius:12px;overflow:hidden;z-index:9999;display:none;box-shadow:0 8px 32px rgba(249,115,22,0.25);';
  Array.from(select.options).forEach(opt => {
    if (opt.disabled) return;
    const item = document.createElement('div');
    item.style.cssText = 'padding:11px 16px;cursor:pointer;font-size:14px;color:#fff8f0;transition:background 0.15s;';
    item.textContent = opt.text.trim();
    item.addEventListener('mouseenter', () => { item.style.background = '#2d2820'; });
    item.addEventListener('mouseleave', () => { item.style.background = ''; });
    item.addEventListener('click', () => {
      select.value = opt.value;
      select.dispatchEvent(new Event('change', { bubbles: true }));
      label.textContent = opt.text.trim();
      label.style.color = '#fff8f0';
      dropdown.style.display = 'none';
      isOpen = false;
      display.style.borderColor = '#2d2820';
      display.style.boxShadow = '';
      display.style.background = '#141210';
    });
    dropdown.appendChild(item);
  });
  let isOpen = false;
  display.addEventListener('click', () => {
    isOpen = !isOpen;
    dropdown.style.display = isOpen ? 'block' : 'none';
    display.style.borderColor = isOpen ? '#f97316' : '#2d2820';
    display.style.boxShadow = isOpen ? '0 0 0 3px rgba(249,115,22,0.18)' : '';
    display.style.background = isOpen ? '#0d0b09' : '#141210';
  });
  const closeOnOutside = (e: MouseEvent) => {
    if (!wrapper.contains(e.target as Node) && isOpen) {
      isOpen = false;
      dropdown.style.display = 'none';
      display.style.borderColor = '#2d2820';
      display.style.boxShadow = '';
      display.style.background = '#141210';
    }
  };
  document.addEventListener('click', closeOnOutside, true);
  select.style.cssText = 'display:none!important;';
  wrapper.appendChild(display);
  wrapper.appendChild(dropdown);
  select.parentNode?.insertBefore(wrapper, select);
  wrapper.appendChild(select);
}

function applyFormStyles() {
  document.querySelectorAll<HTMLElement>('#offer-box input[type="submit"], #offer-box button[type="submit"], .ptprelinker-button, .ptprelinker-button-success').forEach(el => {
    el.style.setProperty('background', 'linear-gradient(135deg, #f97316 0%, #fb923c 100%)', 'important');
    el.style.setProperty('background-color', '#f97316', 'important');
  });
  document.querySelectorAll<HTMLSelectElement>('#offer-box .ptprelinker-select').forEach(buildCustomSelect);
  const inputEl = document.querySelector<HTMLElement>('#offer-box .ptprelinker-input');
  if (inputEl) {
    const h = inputEl.offsetHeight;
    if (h > 0) {
      document.querySelectorAll<HTMLElement>('[data-custom-select]').forEach(el => {
        el.style.height = `${h}px`;
        el.style.padding = `0 44px 0 16px`;
        el.style.lineHeight = `${h - 4}px`;
      });
    }
  }
}

export default function RegisterForm() {
  const [isLoaded, setIsLoaded] = useState(false);
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const styleId = 'register-form-styles';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.textContent = formStyles;
      document.head.appendChild(style);
    }
    return () => { document.getElementById(styleId)?.remove(); };
  }, []);

  useEffect(() => {
    if (!mountRef.current) return;
    return attachForm('register', getRegisterScriptSrc(), mountRef.current, () => setIsLoaded(true), applyFormStyles);
  }, []);

  return (
    <div className="relative overflow-hidden" style={{ minHeight: 'calc(100vh - 76px)' }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(249,115,22,0.22) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 90% 60%, rgba(251,146,60,0.12) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-4 pointer-events-none"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(249,115,22,0.06) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(249,115,22,0.06) 40px)",
        }}
      />

      <div className="relative flex flex-col items-center px-4 py-6 md:py-16">
        <div
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4 md:mb-7"
          style={{ backgroundColor: "rgba(249,115,22,0.12)", border: "1px solid rgba(249,115,22,0.4)", color: "var(--color-primary-light)" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
          Nouveau contenu tous les jours
        </div>

        <h1 className="text-3xl md:text-5xl font-extrabold text-center leading-tight mb-4 md:mb-5">
          <span style={{ color: "var(--color-text-base)" }}>Rejoins la communauté</span>{" "}
          <span className="gradient-text">#1 en France</span>
        </h1>

        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 mb-6 px-2">
          {([
            { d: "M15 10l4.553-2.069A1 1 0 0121 8.882v6.236a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z", label: "Photos HD" },
            { d: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.86 9.86 0 01-4-.8L3 20l1.3-3.9A7.96 7.96 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z", label: "Messages" },
            { d: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z", label: "Rencontres" },
          ] as { d: string; label: string }[]).map((f, i) => (
            <div key={f.label} className="flex items-center gap-x-3">
              {i > 0 && <span className="w-px h-3 flex-shrink-0" style={{ backgroundColor: "var(--color-border)" }} />}
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "var(--color-primary-light)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={f.d} />
                </svg>
                <span className="text-xs font-medium" style={{ color: "var(--color-text-muted)" }}>{f.label}</span>
              </span>
            </div>
          ))}
        </div>

        <div
          className="w-full max-w-md rounded-2xl"
          style={{
            backgroundColor: "var(--color-bg-card)",
            border: "1px solid var(--color-border-bright)",
            boxShadow: "0 0 40px rgba(249,115,22,0.15), 0 0 80px rgba(249,115,22,0.06)",
          }}
        >
          <div className="px-5 pt-5 pb-2 md:px-8 md:pt-7">
            <h2 className="text-xl font-extrabold mb-4" style={{ color: "var(--color-text-base)" }}>S'inscrire</h2>
            <div className="h-px mb-4" style={{ backgroundColor: "var(--color-border)" }} />
          </div>

          <div className="px-5 pb-5 md:px-8 md:pb-6">
            <div className="relative min-h-[180px]">
              {!isLoaded && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full border-4 animate-spin"
                    style={{ borderColor: 'var(--color-border)', borderTopColor: 'var(--color-primary)' }}
                  />
                  <p className="text-xs" style={{ color: 'var(--color-text-faint)' }}>Chargement...</p>
                </div>
              )}
              <div className={!isLoaded ? 'invisible' : ''} ref={mountRef} />
            </div>

            <div className="mt-4 pt-4 border-t flex items-center justify-between gap-2 flex-wrap" style={{ borderColor: 'var(--color-border)' }}>
              <div className="flex items-center gap-1.5">
                <svg className="w-3 h-3" style={{ color: "#4ade80" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="text-xs font-medium" style={{ color: "#4ade80" }}>Paiement sécurisé</span>
              </div>
              <div className="flex items-center gap-1">
                <svg width="34" height="22" viewBox="0 0 44 28" fill="none"><rect width="44" height="28" rx="4" fill="#1A1F71"/><text x="22" y="20" textAnchor="middle" fill="white" fontSize="13" fontWeight="700" fontStyle="italic" fontFamily="Arial, sans-serif">VISA</text></svg>
                <svg width="34" height="22" viewBox="0 0 44 28" fill="none"><rect width="44" height="28" rx="4" fill="#252525"/><circle cx="17" cy="14" r="8" fill="#EB001B"/><circle cx="27" cy="14" r="8" fill="#F79E1B" fillOpacity="0.95"/><path d="M22 6.8a8 8 0 0 1 0 14.4 8 8 0 0 1 0-14.4z" fill="#FF5F00"/></svg>
                <svg width="44" height="22" viewBox="0 0 52 28" fill="none"><rect width="52" height="28" rx="4" fill="#000"/><path d="M13.8 8.2c.6-.8 1-1.8.9-2.9-.9.1-2 .6-2.6 1.4-.6.7-1 1.7-.9 2.8 1 .1 2-.5 2.6-1.3z" fill="white"/><path d="M14.7 9.8c-1.4-.1-2.6.8-3.2.8-.7 0-1.7-.8-2.9-.7-1.5 0-2.8.9-3.6 2.2-1.5 2.6-.4 6.5 1.1 8.6.7 1.1 1.6 2.2 2.7 2.2 1.1-.1 1.5-.7 2.7-.7 1.3 0 1.6.7 2.8.7 1.1 0 1.9-1.1 2.6-2.1.5-.7.7-1 .7-1s-2.2-.9-2.2-3.4c0-2.1 1.7-3.2 1.7-3.2-.9-1.4-2.4-2.4-2.4-2.4z" fill="white"/><text x="36" y="19" textAnchor="middle" fill="white" fontSize="10" fontWeight="500" fontFamily="-apple-system, BlinkMacSystemFont, sans-serif">Pay</text></svg>
                <svg width="44" height="22" viewBox="0 0 52 28" fill="none"><rect width="52" height="28" rx="4" fill="white"/><text x="14" y="20" textAnchor="middle" fill="#4285F4" fontSize="14" fontWeight="700" fontFamily="Arial, sans-serif">G</text><text x="34" y="19" textAnchor="middle" fill="#3C4043" fontSize="10" fontWeight="500" fontFamily="Arial, sans-serif">Pay</text></svg>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-5 text-sm" style={{ color: 'var(--color-text-faint)' }}>
          Déjà membre ?{' '}
          <a href="/login" className="font-semibold transition-colors hover:underline" style={{ color: 'var(--color-primary-light)' }}>
            Se connecter
          </a>
        </p>

      </div>
    </div>
  );
}

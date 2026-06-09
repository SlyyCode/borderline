'use client';

import { useEffect, useRef, useState } from 'react';
import { getLoginScriptSrc, attachForm } from '@/app/_lib/scriptCache';

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
  .ptprelinker-register-form form,
  .ptprelinker-login-form,
  .ptprelinker-login-form .ptprelinker-main-form,
  .ptprelinker-login-form .ptprelinker-forgotten-form {
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
  .error-login { color: #ef4444 !important; font-size: 12px !important; text-align: center !important; margin: 6px 0 !important; }
  .ptprelinker-legend-form { display: none !important; }
  .ptprelinker-forgotten-link {
    display: block !important;
    text-align: center !important;
    color: #fb923c !important;
    font-size: 12px !important;
    font-weight: 600 !important;
    margin-top: 10px !important;
    cursor: pointer !important;
    text-decoration: none !important;
    transition: color 0.2s !important;
  }
  .ptprelinker-forgotten-link:hover { color: #f97316 !important; }
  .form-forgotten {
    position: relative !important;
    margin-top: 18px !important;
    padding-top: 18px !important;
    border-top: 1px solid #2d2820 !important;
  }
  .form-forgotten.show { display: flex !important; flex-direction: column !important; }
  .form-forgotten:not(.show) { display: none !important; }
  .form-forgotten .ptprelinker-input-group {
    display: block !important;
    width: 100% !important;
    position: static !important;
    padding: 0 !important;
    margin: 0 0 10px 0 !important;
  }
  .form-forgotten .ptprelinker-buttons { display: block !important; width: 100% !important; }
  .ptprelinker-forgotten-label {
    display: block !important;
    color: #a39585 !important;
    font-size: 13px !important;
    font-weight: 600 !important;
    margin-bottom: 14px !important;
    text-align: center !important;
    line-height: 1.6 !important;
  }
  .ptprelinker-forgotten-success {
    display: block !important;
    color: #10b981 !important;
    background: rgba(16,185,129,0.1) !important;
    border: 1px solid rgba(16,185,129,0.3) !important;
    border-radius: 10px !important;
    padding: 9px 12px !important;
    font-size: 12px !important;
    font-weight: 500 !important;
    text-align: center !important;
    margin-bottom: 10px !important;
  }
  .ptprelinker-forgotten-fail {
    display: block !important;
    color: #ef4444 !important;
    font-size: 12px !important;
    text-align: center !important;
    margin-bottom: 8px !important;
  }
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

export default function LoginForm() {
  const [isLoaded, setIsLoaded] = useState(false);
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const styleId = 'login-form-styles';
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
    return attachForm('login', getLoginScriptSrc(), mountRef.current, () => setIsLoaded(true), applyFormStyles);
  }, []);

  return (
    <div className="relative overflow-hidden" style={{ minHeight: 'calc(100vh - 76px)' }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(249,115,22,0.2) 0%, transparent 70%)",
        }}
      />

      <div className="relative flex flex-col items-center justify-center px-4 py-16" style={{ minHeight: 'calc(100vh - 76px)' }}>
        <div
          className="w-full max-w-sm rounded-2xl"
          style={{
            backgroundColor: "var(--color-bg-card)",
            border: "1px solid var(--color-border-bright)",
            boxShadow: "0 0 40px rgba(249,115,22,0.12), 0 0 80px rgba(249,115,22,0.05)",
          }}
        >
          <div className="px-6 pt-7 pb-6 md:px-8 md:pt-8">
            <h1 className="text-2xl font-extrabold mb-1" style={{ color: "var(--color-text-base)" }}>
              Bon retour <span className="gradient-text">parmi nous</span>
            </h1>
            <p className="text-sm mb-6" style={{ color: "var(--color-text-muted)" }}>
              Connecte-toi pour accéder à ton contenu exclusif.
            </p>

            <div className="relative">
              {!isLoaded && (
                <div className="flex flex-col items-center justify-center py-10 gap-3">
                  <div
                    className="w-9 h-9 rounded-full border-4 animate-spin"
                    style={{ borderColor: 'var(--color-border)', borderTopColor: 'var(--color-primary)' }}
                  />
                  <p className="text-xs" style={{ color: 'var(--color-text-faint)' }}>Chargement...</p>
                </div>
              )}
              <div className={!isLoaded ? 'invisible' : ''} ref={mountRef} />
            </div>

            <p className="mt-5 text-center text-sm" style={{ color: 'var(--color-text-faint)' }}>
              Pas encore membre ?{' '}
              <a href="/register" className="font-semibold transition-colors hover:underline" style={{ color: 'var(--color-primary-light)' }}>
                S&apos;inscrire
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

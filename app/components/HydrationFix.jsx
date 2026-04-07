'use client';

import React from 'react';

export default function HydrationFix() {
  return (
    <script
      id="hydration-fix"
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            function removeCzAttribute() {
              if (document.body.hasAttribute('cz-shortcut-listen')) {
                document.body.removeAttribute('cz-shortcut-listen');
              }
            }

            // Pehle se agar attribute hai to remove kar do
            removeCzAttribute();

            // MutationObserver se future mein add hone se bhi rok do
            const observer = new MutationObserver((mutations) => {
              mutations.forEach((mutation) => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'cz-shortcut-listen') {
                  removeCzAttribute();
                }
              });
            });

            observer.observe(document.body, { 
              attributes: true, 
              attributeFilter: ['cz-shortcut-listen'] 
            });

            // Cleanup on unmount (optional)
            window.addEventListener('beforeunload', () => observer.disconnect());
          })();
        `,
      }}
    />
  );
}
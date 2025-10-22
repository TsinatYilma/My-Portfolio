'use client';
// components/Smoother.tsx
'use client';

export default function Smoother() {
  if (typeof window === 'undefined') return null;

  const content = document.querySelector("#content");
  if (content) {
    const smoother = ScrollSmoother.create({
      content,
      smooth: 3,
      effects: true,
    });
    smoother.effects("img", { speed: "auto" });
  }

  return null;
}


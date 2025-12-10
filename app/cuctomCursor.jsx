// CustomCursor.js
"use client";
import { useEffect } from "react";

export default function CustomCursor() {
  useEffect(() => {
    const cursor = document.querySelector(".custom-cursor");

    const moveCursor = (e) => {
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    };

    document.addEventListener("mousemove", moveCursor);

    document.querySelectorAll("[data-cursor-text]").forEach((el) => {
      el.addEventListener("mouseenter", () => {
        if (cursor) {
          cursor.textContent = el.getAttribute("data-cursor-text");
          cursor.classList.add("active");
        }
      });
      el.addEventListener("mouseleave", () => {
        if (cursor) {
          cursor.textContent = "";
          cursor.classList.remove("active");
        }
      });
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return <div className="custom-cursor "></div>;
}

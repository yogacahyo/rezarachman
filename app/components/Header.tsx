"use client";

import React from "react";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        padding: "1rem",
        display: "flex",
        gap: "1rem",
        zIndex: 1000,
      }}
    >
      <button
        onClick={() => setLanguage(language === "id" ? "en" : "id")}
        style={{
          background: "var(--secondary)",
          color: "var(--foreground)",
          border: "1px solid var(--border)",
          padding: "0.5rem 1rem",
          borderRadius: "20px",
          cursor: "pointer",
          fontWeight: "bold",
          transition: "all 0.3s ease",
        }}
        aria-label="Toggle Language"
      >
        {language.toUpperCase()}
      </button>

      <button
        onClick={toggleTheme}
        style={{
          background: "var(--secondary)",
          color: "var(--foreground)",
          border: "1px solid var(--border)",
          padding: "0.5rem 1rem",
          borderRadius: "50%",
          cursor: "pointer",
          transition: "all 0.3s ease",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "40px",
          height: "40px",
        }}
        aria-label="Toggle Theme"
      >
        {theme === "dark" ? "☀️" : "🌙"}
      </button>
    </header>
  );
}

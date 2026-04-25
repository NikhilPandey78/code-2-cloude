"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import styles from "./GlobalSearch.module.css";
import { commandCards } from "@/app/commands/data";

export default function GlobalSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  const filteredResults = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return commandCards.filter(
      (card) =>
        card.title.toLowerCase().includes(q) ||
        card.description.toLowerCase().includes(q) ||
        card.command.toLowerCase().includes(q) ||
        card.slug.toLowerCase().includes(q)
    );
  }, [query]);

  const getHref = (slug: string) => {
    const routeMap: { [key: string]: string } = {
      git: "/git-cheatsheet",
      Linux: "/linux-cheatsheet",
      npm: "/npm-cheatsheet",
      Docker: "/docker-cheatsheet",
      pm2: "/pm2-cheatsheet",
      SQL: "/sql-cheatsheet",
      PostgreSQL: "/postgresql-cheatsheet",
      WordPress: "/wordpress-cheatsheet",
      PHP: "/php-cheatsheet",
      Python: "/python-cheatsheet",
      "C++": "/cpp-cheatsheet",
      "ci-cd": "/ci-cd-cheatsheet",
      Kubernetes: "/kubernetes-cheatsheet",
      DevOps: "/devops-cheatsheet",
    };
    return routeMap[slug] || `/commands/${slug}`;
  };

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen(true);
        inputRef.current?.focus();
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
      if (isOpen) {
        if (e.key === "ArrowDown") {
          e.preventDefault();
          setSelectedIndex((prev) =>
            prev < filteredResults.length - 1 ? prev + 1 : prev
          );
        }
        if (e.key === "ArrowUp") {
          e.preventDefault();
          setSelectedIndex((prev) => (prev > 0 ? prev - 1 : 0));
        }
        if (e.key === "Enter" && filteredResults[selectedIndex]) {
          const result = filteredResults[selectedIndex];
          window.location.href = getHref(result.slug);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, selectedIndex, filteredResults]);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={styles.searchTrigger}
        title="Search (Ctrl+K)"
      >
        <span className={styles.searchIcon}>🔍</span>
        <span className={styles.searchPlaceholder}>Search...</span>
        <kbd className={styles.shortcutHint}>
          <span>⌘</span>K
        </kbd>
      </button>

      {isOpen && (
        <div className={styles.overlay} onClick={() => setIsOpen(false)}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.searchHeader}>
              <div className={styles.searchInputWrapper}>
                <span className={styles.searchIconLarge}>🔍</span>
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search commands, languages, tools..."
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setSelectedIndex(0);
                  }}
                  className={styles.searchInputLarge}
                  autoFocus
                />
                {query && (
                  <button
                    onClick={() => setQuery("")}
                    className={styles.clearBtn}
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>

            <div className={styles.resultsContainer} ref={resultsRef}>
              {query && filteredResults.length === 0 ? (
                <div className={styles.noResults}>
                  <div className={styles.noResultsIcon}>🔎</div>
                  <p>No results found for "{query}"</p>
                  <small>Try searching for: npm, Docker, Python, etc.</small>
                </div>
              ) : query ? (
                <>
                  <div className={styles.resultsInfo}>
                    Found {filteredResults.length} result
                    {filteredResults.length !== 1 ? "s" : ""}
                  </div>
                  <div className={styles.resultsList}>
                    {filteredResults.slice(0, 10).map((result, idx) => (
                      <Link
                        key={result.slug}
                        href={getHref(result.slug)}
                        className={`${styles.resultItem} ${
                          idx === selectedIndex ? styles.active : ""
                        }`}
                      >
                        <div className={styles.resultContent}>
                          <div className={styles.resultTitle}>
                            {result.title}
                          </div>
                          <div className={styles.resultDesc}>
                            {result.description}
                          </div>
                          {result.command && (
                            <code className={styles.resultCmd}>
                              {result.command.substring(0, 80)}
                              {result.command.length > 80 ? "..." : ""}
                            </code>
                          )}
                        </div>
                        <div className={styles.resultArrow}>→</div>
                      </Link>
                    ))}
                  </div>
                  {filteredResults.length > 10 && (
                    <div className={styles.moreResults}>
                      +{filteredResults.length - 10} more results
                    </div>
                  )}
                </>
              ) : (
                <div className={styles.suggestedSection}>
                  <div className={styles.suggestedTitle}>Popular Commands</div>
                  <div className={styles.suggestedGrid}>
                    {commandCards.slice(0, 6).map((result, idx) => (
                      <Link
                        key={result.slug}
                        href={getHref(result.slug)}
                        className={styles.suggestedItem}
                      >
                        <div className={styles.suggestedTitle2}>
                          {result.title}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className={styles.footer}>
              <div className={styles.footerItem}>
                <kbd>↑↓</kbd>
                <span>Navigate</span>
              </div>
              <div className={styles.footerItem}>
                <kbd>Enter</kbd>
                <span>Select</span>
              </div>
              <div className={styles.footerItem}>
                <kbd>Esc</kbd>
                <span>Close</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

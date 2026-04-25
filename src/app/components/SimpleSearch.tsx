"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import Link from "next/link";
import styles from "./SimpleSearch.module.css";
import { commandCards } from "@/app/commands/data";

export default function SimpleSearch() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return commandCards.filter(
      (card) =>
        card.title.toLowerCase().includes(q) ||
        card.description.toLowerCase().includes(q) ||
        card.command.toLowerCase().includes(q)
    );
  }, [query]);

  const getHref = (slug: string) => {
    const routes: { [key: string]: string } = {
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
    return routes[slug] || `/commands/${slug}`;
  };

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={styles.searchWrapper} ref={searchRef}>
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className={styles.searchIcon}
          title="Search"
          aria-label="Search commands"
        >
          🔍
        </button>
      ) : (
        <div className={styles.searchBar}>
          <span className={styles.icon}>🔍</span>
          <input
            ref={inputRef}
            type="text"
            placeholder="Search commands & tools..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onBlur={() => {
              if (!query) setIsOpen(false);
            }}
            className={styles.input}
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className={styles.clearBtn}
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>
      )}

      {isOpen && query && (
        <div className={styles.results}>
          {results.length > 0 ? (
            <>
              <div className={styles.resultCount}>
                {results.length} result{results.length !== 1 ? "s" : ""}
              </div>
              <div className={styles.resultList}>
                {results.slice(0, 8).map((result) => (
                  <Link
                    key={result.slug}
                    href={getHref(result.slug)}
                    className={styles.resultItem}
                    onClick={() => {
                      setQuery("");
                      setIsOpen(false);
                    }}
                  >
                    <div className={styles.resultTitle}>{result.title}</div>
                    <div className={styles.resultDesc}>{result.description}</div>
                  </Link>
                ))}
              </div>
              {results.length > 8 && (
                <div className={styles.resultMore}>
                  +{results.length - 8} more
                </div>
              )}
            </>
          ) : (
            <div className={styles.noResults}>
              No results for "{query}"
            </div>
          )}
        </div>
      )}
    </div>
  );
}

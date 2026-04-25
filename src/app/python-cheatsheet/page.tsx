import type { Metadata } from "next";
import styles from "./page.module.css";

const sections = [
  {
    title: "Basic Syntax",
    commands: [
      { label: "Print output:", command: "print('Hello') or print 'Hello'" },
      { label: "Print with newline:", command: "print('Hello\\n') or print 'Hello' + '\\n'" },
      { label: "Comments:", command: "# single or // double slash or \"\"\"multiline\"\"\"" },
      { label: "Variable assignment:", command: "name = 'value'" },
      { label: "Multiple assignment:", command: "a, b, c = 1, 2, 3" },
      { label: "String interpolation:", command: "f'Hello {name}' or f\"Hello {name}\"" },
    ],
  },
  {
    title: "Data Types",
    commands: [
      { label: "String:", command: "'single' or \"double\" or '''multiline'''" },
      { label: "Integer:", command: "num = 42" },
      { label: "Float:", command: "pi = 3.14" },
      { label: "Boolean:", command: "is_true = True or False" },
      { label: "List:", command: "numbers = [1, 2, 3, 4, 5]" },
      { label: "Tuple:", command: "pair = (1, 2)" },
      { label: "Dictionary:", command: "user = {'name': 'John', 'age': 30}" },
      { label: "Set:", command: "unique = {1, 2, 3}" },
      { label: "Check type:", command: "type(variable) or isinstance(variable, str)" },
    ],
  },
  {
    title: "String Methods",
    commands: [
      { label: "Length:", command: "len(string)" },
      { label: "Uppercase:", command: "string.upper()" },
      { label: "Lowercase:", command: "string.lower()" },
      { label: "Title case:", command: "string.title()" },
      { label: "Strip whitespace:", command: "string.strip()" },
      { label: "Replace:", command: "string.replace('old', 'new')" },
      { label: "Split:", command: "string.split(',')" },
      { label: "Join:", command: "','.join(['a', 'b', 'c'])" },
      { label: "Find substring:", command: "string.find('text')" },
      { label: "Starts with:", command: "string.startswith('hello')" },
      { label: "Ends with:", command: "string.endswith('.txt')" },
    ],
  },
  {
    title: "List Methods",
    commands: [
      { label: "Add item:", command: "list.append(item)" },
      { label: "Insert at index:", command: "list.insert(0, 'first')" },
      { label: "Remove item:", command: "list.remove(item)" },
      { label: "Pop item:", command: "list.pop() or list.pop(0)" },
      { label: "Clear list:", command: "list.clear()" },
      { label: "Sort list:", command: "list.sort() or sorted(list)" },
      { label: "Reverse:", command: "list.reverse()" },
      { label: "Count item:", command: "list.count(item)" },
      { label: "Index of item:", command: "list.index(item)" },
      { label: "List slicing:", command: "list[1:3] or list[::2]" },
    ],
  },
  {
    title: "Dictionary Methods",
    commands: [
      { label: "Get value:", command: "dict['key'] or dict.get('key', default)" },
      { label: "Set value:", command: "dict['key'] = value" },
      { label: "Get keys:", command: "dict.keys()" },
      { label: "Get values:", command: "dict.values()" },
      { label: "Get items:", command: "dict.items()" },
      { label: "Check key exists:", command: "'key' in dict" },
      { label: "Delete key:", command: "del dict['key'] or dict.pop('key')" },
      { label: "Clear dict:", command: "dict.clear()" },
      { label: "Update dict:", command: "dict.update({'key': 'value'})" },
    ],
  },
  {
    title: "Control Structures",
    commands: [
      { label: "If statement:", command: "if condition: ... elif ...: ... else: ..." },
      { label: "For loop:", command: "for i in range(10): ..." },
      { label: "While loop:", command: "while condition: ..." },
      { label: "Break:", command: "break" },
      { label: "Continue:", command: "continue" },
      { label: "List comprehension:", command: "[x * 2 for x in range(10)]" },
      { label: "Dict comprehension:", command: "{k: v for k, v in dict.items()}" },
      { label: "Conditional expression:", command: "value_if_true if condition else value_if_false" },
    ],
  },
  {
    title: "Functions",
    commands: [
      { label: "Define function:", command: "def function_name(param1, param2='default'): return result" },
      { label: "Default arguments:", command: "def func(a, b=10): ..." },
      { label: "Variable arguments:", command: "def func(*args, **kwargs): ..." },
      { label: "Lambda function:", command: "lambda x: x * 2" },
      { label: "Docstring:", command: "'''Function description'''" },
      { label: "Type hints:", command: "def func(name: str, age: int) -> str:" },
    ],
  },
  {
    title: "Object Oriented Python",
    commands: [
      { label: "Define class:", command: "class MyClass: pass" },
      { label: "Constructor:", command: "def __init__(self, name): self.name = name" },
      { label: "Instance method:", command: "def method(self): ..." },
      { label: "Class method:", command: "@classmethod def method(cls): ..." },
      { label: "Static method:", command: "@staticmethod def method(): ..." },
      { label: "Inheritance:", command: "class Child(Parent): ..." },
      { label: "Property:", command: "@property def attr(self): return self._attr" },
      { label: "Setter:", command: "@attr.setter def attr(self, value): ..." },
      { label: "String representation:", command: "def __str__(self): ..." },
    ],
  },
  {
    title: "File Operations",
    commands: [
      { label: "Open file:", command: "f = open('file.txt', 'r') # r, w, a, x" },
      { label: "With statement:", command: "with open('file.txt') as f: data = f.read()" },
      { label: "Read all:", command: "f.read()" },
      { label: "Read lines:", command: "f.readlines() or [line for line in f]" },
      { label: "Write line:", command: "f.write('content')" },
      { label: "Write lines:", command: "f.writelines(['line1', 'line2'])" },
      { label: "Close file:", command: "f.close()" },
      { label: "File exists:", command: "import os; os.path.exists('file.txt')" },
      { label: "Current directory:", command: "import os; os.getcwd()" },
    ],
  },
  {
    title: "Exception Handling",
    commands: [
      { label: "Try-except:", command: "try: ... except Exception as e: ..." },
      { label: "Multiple exceptions:", command: "except (ValueError, TypeError): ..." },
      { label: "Else clause:", command: "try: ... except: ... else: ..." },
      { label: "Finally clause:", command: "try: ... finally: ..." },
      { label: "Raise exception:", command: "raise ValueError('message')" },
      { label: "Custom exception:", command: "class MyError(Exception): pass" },
    ],
  },
  {
    title: "Modules & Imports",
    commands: [
      { label: "Import module:", command: "import math" },
      { label: "Import from module:", command: "from math import pi, sqrt" },
      { label: "Import as alias:", command: "import numpy as np or from math import pi as PI" },
      { label: "Import all:", command: "from module import *" },
      { label: "Standard modules:", command: "math, os, sys, json, datetime, re, random" },
      { label: "Check module path:", command: "import module; print(module.__file__)" },
    ],
  },
  {
    title: "Built-in Functions",
    commands: [
      { label: "Print:", command: "print('text', end='', sep=',')" },
      { label: "Length:", command: "len(object)" },
      { label: "Range:", command: "range(10) or range(1, 10, 2)" },
      { label: "Enumerate:", command: "for i, item in enumerate(list): ..." },
      { label: "Zip:", command: "for a, b in zip(list1, list2): ..." },
      { label: "Map:", command: "map(function, iterable)" },
      { label: "Filter:", command: "filter(function, iterable)" },
      { label: "Sum:", command: "sum(list)" },
      { label: "Max/Min:", command: "max(list) or min(list)" },
      { label: "Sorted:", command: "sorted(list, reverse=True)" },
      { label: "Any/All:", command: "any(list) or all(list)" },
    ],
  },
  {
    title: "Regular Expressions",
    commands: [
      { label: "Import re:", command: "import re" },
      { label: "Search pattern:", command: "re.search(r'pattern', string)" },
      { label: "Find all matches:", command: "re.findall(r'pattern', string)" },
      { label: "Replace:", command: "re.sub(r'pattern', 'replacement', string)" },
      { label: "Split by pattern:", command: "re.split(r'[,;]', string)" },
      { label: "Compile pattern:", command: "pattern = re.compile(r'pattern')" },
      { label: "Email validation:", command: "re.match(r'^[^@]+@[^@]+\\.[^@]+$', email)" },
    ],
  },
  {
    title: "Working with JSON",
    commands: [
      { label: "Import json:", command: "import json" },
      { label: "Load JSON:", command: "data = json.load(file)" },
      { label: "Dump to file:", command: "json.dump(data, file)" },
      { label: "Parse JSON string:", command: "json.loads(json_string)" },
      { label: "Convert to JSON:", command: "json.dumps(data, indent=2)" },
    ],
  },
  {
    title: "Date & Time",
    commands: [
      { label: "Import datetime:", command: "from datetime import datetime, timedelta" },
      { label: "Current date/time:", command: "now = datetime.now()" },
      { label: "Create datetime:", command: "d = datetime(2023, 1, 15, 10, 30)" },
      { label: "Format date:", command: "now.strftime('%Y-%m-%d %H:%M:%S')" },
      { label: "Add time:", command: "future = now + timedelta(days=5)" },
      { label: "Time difference:", command: "delta = date2 - date1" },
    ],
  },
] as const;

export const metadata: Metadata = {
  title: "Python Cheat Sheet | Code2Cloud",
  description: "A comprehensive Python cheat sheet covering syntax, data structures, functions, OOP, file I/O, and modules.",
};

export default function PythonCheatSheetPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {sections.map((section) => (
          <section key={section.title} className={styles.section}>
            <h2 className={styles.sectionTitle}>{section.title}</h2>
            <div className={styles.sectionGrid}>
              {section.commands.map((item) => (
                <article key={`${section.title}-${item.command}`} className={styles.card}>
                  <h3>{item.label}</h3>
                  <code>{item.command}</code>
                </article>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

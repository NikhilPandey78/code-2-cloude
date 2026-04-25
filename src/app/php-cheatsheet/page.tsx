import type { Metadata } from "next";
import styles from "./page.module.css";

const sections = [
  {
    title: "Syntax Basics",
    commands: [
      { label: "Echo output:", command: "<?php echo 'Hello World'; ?>" },
      { label: "Variable assignment:", command: "$variable = 'value';" },
      { label: "String concatenation:", command: "$str = 'Hello' . ' ' . 'World';" },
      { label: "Array declaration:", command: "$array = array('key' => 'value', 1, 2, 3);" },
      { label: "Array shorthand:", command: "$array = ['key' => 'value', 'item1', 'item2'];" },
      { label: "Comments:", command: "// single line, /* multi line */" },
    ],
  },
  {
    title: "Data Types & Variables",
    commands: [
      { label: "String:", command: "$str = 'Hello' or \"Hello\";" },
      { label: "Integer:", command: "$num = 42;" },
      { label: "Float:", command: "$float = 3.14;" },
      { label: "Boolean:", command: "$bool = true or false;" },
      { label: "Array:", command: "$arr = [1, 2, 3];" },
      { label: "Check type:", command: "gettype($variable); is_string($var);" },
      { label: "Cast type:", command: "(int)$str, (float)$str, (array)$obj;" },
    ],
  },
  {
    title: "Operators",
    commands: [
      { label: "Arithmetic:", command: "+ - * / % **" },
      { label: "Comparison:", command: "== === != !== < > <= >=" },
      { label: "Logical:", command: "&& (and), || (or), ! (not)" },
      { label: "Assignment:", command: "= += -= *= /= %= .=" },
      { label: "String:", command: ". (concat), .= (append)" },
      { label: "Spaceship:", command: "$a <=> $b (returns -1, 0, or 1)" },
      { label: "Null coalesce:", command: "$x ?? 'default'" },
    ],
  },
  {
    title: "Control Structures",
    commands: [
      { label: "If statement:", command: "if ($condition) { ... } elseif (...) { ... } else { ... }" },
      { label: "Switch:", command: "switch ($var) { case 'value': ...; break; default: ...; }" },
      { label: "While loop:", command: "while ($condition) { ... }" },
      { label: "Do-while:", command: "do { ... } while ($condition);" },
      { label: "For loop:", command: "for ($i = 0; $i < 10; $i++) { ... }" },
      { label: "Foreach loop:", command: "foreach ($array as $key => $value) { ... }" },
    ],
  },
  {
    title: "String Functions",
    commands: [
      { label: "String length:", command: "strlen($str);" },
      { label: "Trim:", command: "trim($str); ltrim($str); rtrim($str);" },
      { label: "Case conversion:", command: "strtoupper($str); strtolower($str); ucfirst($str);" },
      { label: "Find substring:", command: "strpos($str, 'search'); strstr($str, 'search');" },
      { label: "Replace:", command: "str_replace('old', 'new', $str);" },
      { label: "Split string:", command: "explode(',', 'a,b,c');" },
      { label: "Join array:", command: "implode(',', $array);" },
      { label: "Substring:", command: "substr($str, 0, 5);" },
    ],
  },
  {
    title: "Array Functions",
    commands: [
      { label: "Count items:", command: "count($array);" },
      { label: "Add item:", command: "$array[] = 'item'; array_push($array, 'item');" },
      { label: "Remove item:", command: "array_pop($array); array_shift($array);" },
      { label: "Merge arrays:", command: "array_merge($array1, $array2);" },
      { label: "Sort array:", command: "sort($array); rsort($array); asort($array);" },
      { label: "Search item:", command: "in_array('item', $array); array_search('item', $array);" },
      { label: "Get keys:", command: "array_keys($array);" },
      { label: "Get values:", command: "array_values($array);" },
      { label: "Filter array:", command: "array_filter($array, function($item) { return $item > 5; });" },
      { label: "Map array:", command: "array_map(function($item) { return $item * 2; }, $array);" },
    ],
  },
  {
    title: "Functions",
    commands: [
      { label: "Define function:", command: "function myFunc($param = 'default') { return $param; }" },
      { label: "Call function:", command: "myFunc('value');" },
      { label: "Variable function:", command: "$func = 'myFunc'; $func();" },
      { label: "Anonymous function:", command: "$func = function($x) { return $x * 2; };" },
      { label: "Arrow function:", command: "fn($x) => $x * 2;" },
      { label: "Function exists:", command: "function_exists('myFunc');" },
      { label: "Call user function:", command: "call_user_func('myFunc', $arg);" },
    ],
  },
  {
    title: "Object Oriented PHP",
    commands: [
      { label: "Define class:", command: "class MyClass { public $prop = 'value'; }" },
      { label: "Constructor:", command: "public function __construct() { }" },
      { label: "Destructor:", command: "public function __destruct() { }" },
      { label: "Methods:", command: "public function myMethod() { return 'hello'; }" },
      { label: "Static method:", command: "public static function staticMethod() { }" },
      { label: "Call static:", command: "MyClass::staticMethod();" },
      { label: "Inheritance:", command: "class Child extends Parent { }" },
      { label: "Interface:", command: "interface Printable { public function toString(); }" },
      { label: "Implement interface:", command: "class Document implements Printable { }" },
      { label: "Traits:", command: "trait Logger { public function log() { } } class App { use Logger; }" },
    ],
  },
  {
    title: "File Operations",
    commands: [
      { label: "File get contents:", command: "file_get_contents('file.txt');" },
      { label: "File put contents:", command: "file_put_contents('file.txt', 'content');" },
      { label: "Read file lines:", command: "file('file.txt');" },
      { label: "Open file:", command: "fopen('file.txt', 'r'); // r, w, a, x" },
      { label: "Read line:", command: "fgets($handle);" },
      { label: "Write line:", command: "fwrite($handle, 'content');" },
      { label: "Close file:", command: "fclose($handle);" },
      { label: "File exists:", command: "file_exists('file.txt');" },
      { label: "Is file:", command: "is_file('file.txt');" },
      { label: "Is directory:", command: "is_dir('path');" },
    ],
  },
  {
    title: "Error Handling",
    commands: [
      { label: "Try-catch:", command: "try { ... } catch (Exception $e) { echo $e->getMessage(); }" },
      { label: "Finally block:", command: "try { ... } finally { ... }" },
      { label: "Throw exception:", command: "throw new Exception('Error message');" },
      { label: "Error reporting:", command: "error_reporting(E_ALL); ini_set('display_errors', 1);" },
      { label: "Custom error:", command: "set_error_handler(function($errno, $errstr) { });" },
      { label: "Trigger error:", command: "trigger_error('Warning', E_USER_WARNING);" },
    ],
  },
  {
    title: "Database (MySQLi)",
    commands: [
      { label: "Connect:", command: "$mysqli = new mysqli('localhost', 'user', 'password', 'database');" },
      { label: "Query:", command: "$result = $mysqli->query('SELECT * FROM users');" },
      { label: "Get row:", command: "$row = $result->fetch_assoc();" },
      { label: "Get all rows:", command: "while ($row = $result->fetch_assoc()) { }" },
      { label: "Insert:", command: "$mysqli->query(\"INSERT INTO users VALUES ('name', 'email')\");" },
      { label: "Prepared statement:", command: "$stmt = $mysqli->prepare('SELECT * FROM users WHERE id = ?'); $stmt->bind_param('i', $id); $stmt->execute();" },
      { label: "Close connection:", command: "$mysqli->close();" },
    ],
  },
  {
    title: "Regular Expressions",
    commands: [
      { label: "Match pattern:", command: "preg_match('/pattern/', $str);" },
      { label: "Match all:", command: "preg_match_all('/pattern/', $str, $matches);" },
      { label: "Replace:", command: "preg_replace('/old/', 'new', $str);" },
      { label: "Split by pattern:", command: "preg_split('/[,;]/', $str);" },
      { label: "Email validation:", command: "preg_match('/^[^@]+@[^@]+\\.[^@]+$/', $email);" },
    ],
  },
  {
    title: "Session & Cookies",
    commands: [
      { label: "Start session:", command: "session_start();" },
      { label: "Set session:", command: "$_SESSION['key'] = 'value';" },
      { label: "Get session:", command: "echo $_SESSION['key'];" },
      { label: "Destroy session:", command: "session_destroy();" },
      { label: "Set cookie:", command: "setcookie('name', 'value', time() + 3600);" },
      { label: "Get cookie:", command: "$_COOKIE['name'];" },
      { label: "Delete cookie:", command: "setcookie('name', '', time() - 3600);" },
    ],
  },
] as const;

export const metadata: Metadata = {
  title: "PHP Cheat Sheet | Code2Cloud",
  description: "A comprehensive PHP cheat sheet covering syntax, arrays, functions, OOP, file operations, and database handling.",
};

export default function PHPCheatSheetPage() {
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

import type { Metadata } from "next";
import styles from "./page.module.css";

const sections = [
  {
    title: "Basic Syntax",
    commands: [
      { label: "Include header:", command: "#include <iostream>" },
      { label: "Namespace:", command: "using namespace std;" },
      { label: "Main function:", command: "int main() { ... return 0; }" },
      { label: "Comment:", command: "// single line or /* multi line */" },
      { label: "Variable declaration:", command: "int x = 5;" },
      { label: "Constant:", command: "const int MAX = 100;" },
    ],
  },
  {
    title: "Data Types",
    commands: [
      { label: "Integer:", command: "int, short, long, long long" },
      { label: "Float:", command: "float, double, long double" },
      { label: "Character:", command: "char c = 'A';" },
      { label: "Boolean:", command: "bool flag = true;" },
      { label: "String:", command: "#include <string>; string name = \"John\";" },
      { label: "Size of type:", command: "sizeof(int)" },
      { label: "Type casting:", command: "(int)3.14 or static_cast<int>(3.14)" },
    ],
  },
  {
    title: "Operators",
    commands: [
      { label: "Arithmetic:", command: "+ - * / % ++ --" },
      { label: "Comparison:", command: "== != < > <= >=" },
      { label: "Logical:", command: "&& (AND), || (OR), ! (NOT)" },
      { label: "Bitwise:", command: "& | ^ ~ << >>" },
      { label: "Assignment:", command: "= += -= *= /= %= &= |= ^=" },
      { label: "Ternary:", command: "condition ? true_value : false_value" },
      { label: "Pointer:", command: "* (dereference), & (address), -> (member access)" },
    ],
  },
  {
    title: "Input & Output",
    commands: [
      { label: "Print to console:", command: "cout << \"Hello World\" << endl;" },
      { label: "Print variables:", command: "cout << \"Value: \" << x << endl;" },
      { label: "Read from console:", command: "cin >> x;" },
      { label: "Read string with spaces:", command: "getline(cin, str);" },
      { label: "File output:", command: "ofstream file(\"out.txt\"); file << \"text\";" },
      { label: "File input:", command: "ifstream file(\"in.txt\"); getline(file, line);" },
    ],
  },
  {
    title: "Control Structures",
    commands: [
      { label: "If statement:", command: "if (condition) { ... } else if (...) { ... } else { ... }" },
      { label: "Switch:", command: "switch (var) { case 1: ...; break; default: ... }" },
      { label: "While loop:", command: "while (condition) { ... }" },
      { label: "Do-while:", command: "do { ... } while (condition);" },
      { label: "For loop:", command: "for (int i = 0; i < 10; i++) { ... }" },
      { label: "Range-based for:", command: "for (auto item : container) { ... }" },
      { label: "Break:", command: "break;" },
      { label: "Continue:", command: "continue;" },
    ],
  },
  {
    title: "Functions",
    commands: [
      { label: "Function declaration:", command: "int add(int a, int b);" },
      { label: "Function definition:", command: "int add(int a, int b) { return a + b; }" },
      { label: "Default parameters:", command: "void func(int x = 10) { ... }" },
      { label: "Function overloading:", command: "int func(int x) { ... } int func(double x) { ... }" },
      { label: "Pass by reference:", command: "void swap(int &a, int &b)" },
      { label: "Pass by pointer:", command: "void change(int *ptr) { *ptr = 5; }" },
      { label: "Inline function:", command: "inline int square(int x) { return x * x; }" },
      { label: "Recursive function:", command: "int factorial(int n) { return n <= 1 ? 1 : n * factorial(n-1); }" },
    ],
  },
  {
    title: "Arrays & Vectors",
    commands: [
      { label: "Array declaration:", command: "int arr[5];" },
      { label: "Array initialization:", command: "int arr[] = {1, 2, 3, 4, 5};" },
      { label: "Multi-dimensional:", command: "int matrix[3][3];" },
      { label: "Access element:", command: "arr[0] or *(arr + 0)" },
      { label: "Vector:", command: "#include <vector>; vector<int> vec;" },
      { label: "Vector push:", command: "vec.push_back(10);" },
      { label: "Vector size:", command: "vec.size()" },
      { label: "Vector access:", command: "vec[0] or vec.at(0)" },
      { label: "Vector pop:", command: "vec.pop_back();" },
    ],
  },
  {
    title: "Pointers & References",
    commands: [
      { label: "Pointer declaration:", command: "int *ptr;" },
      { label: "Address of variable:", command: "ptr = &variable;" },
      { label: "Dereference pointer:", command: "*ptr" },
      { label: "Pointer to array:", command: "int *arr_ptr = arr;" },
      { label: "Null pointer:", command: "int *ptr = nullptr;" },
      { label: "Reference:", command: "int &ref = variable;" },
      { label: "Pointer to pointer:", command: "int **ptr_ptr = &ptr;" },
      { label: "Const pointer:", command: "int * const ptr = &x;" },
      { label: "Pointer to const:", command: "const int *ptr = &x;" },
    ],
  },
  {
    title: "Strings",
    commands: [
      { label: "C-string:", command: "char str[] = \"Hello\";" },
      { label: "String object:", command: "string str = \"Hello\";" },
      { label: "String length:", command: "str.length() or str.size()" },
      { label: "Concatenate:", command: "str1 + str2 or str.append(str2)" },
      { label: "Substring:", command: "str.substr(0, 5)" },
      { label: "Find:", command: "str.find(\"needle\")" },
      { label: "Replace:", command: "str.replace(0, 5, \"new\")" },
      { label: "Compare:", command: "str1 == str2 or str.compare(other)" },
      { label: "Character access:", command: "str[0] or str.at(0)" },
    ],
  },
  {
    title: "Classes & Objects",
    commands: [
      { label: "Class definition:", command: "class MyClass { private: int x; public: void method(); };" },
      { label: "Constructor:", command: "MyClass() { ... }" },
      { label: "Destructor:", command: "~MyClass() { ... }" },
      { label: "Member function:", command: "void MyClass::method() { ... }" },
      { label: "Create object:", command: "MyClass obj; or MyClass *obj = new MyClass();" },
      { label: "Access member:", command: "obj.member or obj->member" },
      { label: "Delete object:", command: "delete obj;" },
      { label: "This pointer:", command: "this->member = value;" },
      { label: "Const method:", command: "void display() const { ... }" },
      { label: "Static member:", command: "static int count;" },
    ],
  },
  {
    title: "Inheritance & Polymorphism",
    commands: [
      { label: "Inheritance:", command: "class Child : public Parent { ... };" },
      { label: "Virtual function:", command: "virtual void display() { ... }" },
      { label: "Override:", command: "void display() override { ... }" },
      { label: "Pure virtual:", command: "virtual void func() = 0;" },
      { label: "Abstract class:", command: "class Abstract { virtual void pure() = 0; };" },
      { label: "Protected access:", command: "protected: int member;" },
      { label: "Virtual destructor:", command: "virtual ~MyClass() { ... }" },
    ],
  },
  {
    title: "Standard Library Containers",
    commands: [
      { label: "Vector:", command: "#include <vector>; vector<int> vec;" },
      { label: "Map:", command: "#include <map>; map<string, int> m;" },
      { label: "Set:", command: "#include <set>; set<int> s;" },
      { label: "Queue:", command: "#include <queue>; queue<int> q;" },
      { label: "Stack:", command: "#include <stack>; stack<int> st;" },
      { label: "List:", command: "#include <list>; list<int> lst;" },
      { label: "Dequeue:", command: "#include <deque>; deque<int> dq;" },
    ],
  },
  {
    title: "Exception Handling",
    commands: [
      { label: "Try-catch:", command: "try { ... } catch (exception &e) { cout << e.what(); }" },
      { label: "Multiple catch:", command: "catch (invalid_argument &e) { ... } catch (...) { ... }" },
      { label: "Throw exception:", command: "throw runtime_error(\"message\");" },
      { label: "Custom exception:", command: "class MyException : public exception { };" },
      { label: "Standard exceptions:", command: "exception, runtime_error, invalid_argument, out_of_range" },
    ],
  },
  {
    title: "Algorithms & Utility",
    commands: [
      { label: "Sort:", command: "#include <algorithm>; sort(arr.begin(), arr.end());" },
      { label: "Find:", command: "find(arr.begin(), arr.end(), value)" },
      { label: "Count:", command: "count(arr.begin(), arr.end(), value)" },
      { label: "Min element:", command: "min_element(arr.begin(), arr.end())" },
      { label: "Max element:", command: "max_element(arr.begin(), arr.end())" },
      { label: "Reverse:", command: "reverse(arr.begin(), arr.end())" },
      { label: "Copy:", command: "copy(src.begin(), src.end(), dest.begin())" },
      { label: "Pair:", command: "pair<int, string> p = {1, \"one\"};" },
      { label: "Tuple:", command: "#include <tuple>; tuple<int, string> t = {1, \"one\"};" },
    ],
  },
] as const;

export const metadata: Metadata = {
  title: "C++ Cheat Sheet | Code2Cloud",
  description: "A comprehensive C++ cheat sheet covering syntax, data types, pointers, classes, inheritance, and STL.",
};

export default function CppCheatSheetPage() {
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

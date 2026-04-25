import type { Metadata } from "next";
import styles from "./page.module.css";

const sections = [
  {
    title: "Database Operations",
    commands: [
      { label: "Create a database:", command: "CREATE DATABASE db_name;" },
      { label: "Drop a database:", command: "DROP DATABASE db_name;" },
      { label: "Select database:", command: "USE db_name;" },
      { label: "Show all databases:", command: "SHOW DATABASES;" },
      { label: "Backup database:", command: "mysqldump -u user -p db_name > backup.sql" },
      { label: "Restore database:", command: "mysql -u user -p db_name < backup.sql" },
    ],
  },
  {
    title: "Table Operations",
    commands: [
      { label: "Create table:", command: "CREATE TABLE users (id INT PRIMARY KEY, name VARCHAR(100));" },
      { label: "Drop table:", command: "DROP TABLE users;" },
      { label: "Show tables:", command: "SHOW TABLES;" },
      { label: "Show table structure:", command: "DESCRIBE users;" },
      { label: "Alter table (add column):", command: "ALTER TABLE users ADD COLUMN email VARCHAR(100);" },
      { label: "Alter table (drop column):", command: "ALTER TABLE users DROP COLUMN email;" },
    ],
  },
  {
    title: "SELECT Queries",
    commands: [
      { label: "Select all columns:", command: "SELECT * FROM users;" },
      { label: "Select specific columns:", command: "SELECT name, email FROM users;" },
      { label: "Select with WHERE clause:", command: "SELECT * FROM users WHERE age > 18;" },
      { label: "Select with ORDER BY:", command: "SELECT * FROM users ORDER BY name ASC;" },
      { label: "Select with LIMIT:", command: "SELECT * FROM users LIMIT 10;" },
      { label: "Select DISTINCT:", command: "SELECT DISTINCT country FROM users;" },
    ],
  },
  {
    title: "INSERT & UPDATE",
    commands: [
      { label: "Insert single row:", command: "INSERT INTO users (name, email) VALUES ('John', 'john@example.com');" },
      { label: "Insert multiple rows:", command: "INSERT INTO users VALUES (1, 'Alice'), (2, 'Bob');" },
      { label: "Update row:", command: "UPDATE users SET email='new@example.com' WHERE id=1;" },
      { label: "Update multiple columns:", command: "UPDATE users SET name='Jane', age=25 WHERE id=1;" },
      { label: "Update with condition:", command: "UPDATE users SET status='active' WHERE age >= 18;" },
    ],
  },
  {
    title: "DELETE & TRUNCATE",
    commands: [
      { label: "Delete rows:", command: "DELETE FROM users WHERE id=1;" },
      { label: "Delete all rows:", command: "DELETE FROM users;" },
      { label: "Truncate table:", command: "TRUNCATE TABLE users;" },
      { label: "Delete with condition:", command: "DELETE FROM users WHERE age < 18;" },
    ],
  },
  {
    title: "Joins",
    commands: [
      { label: "Inner join:", command: "SELECT * FROM users INNER JOIN orders ON users.id = orders.user_id;" },
      { label: "Left join:", command: "SELECT * FROM users LEFT JOIN orders ON users.id = orders.user_id;" },
      { label: "Right join:", command: "SELECT * FROM users RIGHT JOIN orders ON users.id = orders.user_id;" },
      { label: "Full outer join:", command: "SELECT * FROM users FULL OUTER JOIN orders ON users.id = orders.user_id;" },
      { label: "Cross join:", command: "SELECT * FROM users CROSS JOIN products;" },
    ],
  },
  {
    title: "Aggregation Functions",
    commands: [
      { label: "Count rows:", command: "SELECT COUNT(*) FROM users;" },
      { label: "Sum column:", command: "SELECT SUM(amount) FROM orders;" },
      { label: "Average:", command: "SELECT AVG(price) FROM products;" },
      { label: "Max value:", command: "SELECT MAX(salary) FROM employees;" },
      { label: "Min value:", command: "SELECT MIN(price) FROM products;" },
      { label: "Group by:", command: "SELECT department, COUNT(*) FROM employees GROUP BY department;" },
    ],
  },
  {
    title: "Filtering & Conditions",
    commands: [
      { label: "WHERE with AND:", command: "SELECT * FROM users WHERE age > 18 AND country='USA';" },
      { label: "WHERE with OR:", command: "SELECT * FROM users WHERE status='active' OR status='pending';" },
      { label: "WHERE with NOT:", command: "SELECT * FROM users WHERE NOT status='deleted';" },
      { label: "IN clause:", command: "SELECT * FROM users WHERE country IN ('USA', 'Canada', 'UK');" },
      { label: "BETWEEN clause:", command: "SELECT * FROM orders WHERE amount BETWEEN 100 AND 500;" },
      { label: "LIKE clause:", command: "SELECT * FROM users WHERE name LIKE 'J%';" },
    ],
  },
  {
    title: "Subqueries",
    commands: [
      { label: "Subquery in WHERE:", command: "SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);" },
      { label: "Subquery with COUNT:", command: "SELECT name FROM users WHERE id IN (SELECT user_id FROM orders GROUP BY user_id HAVING COUNT(*) > 5);" },
      { label: "Correlated subquery:", command: "SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);" },
    ],
  },
  {
    title: "Indexes & Performance",
    commands: [
      { label: "Create index:", command: "CREATE INDEX idx_email ON users(email);" },
      { label: "Create unique index:", command: "CREATE UNIQUE INDEX idx_username ON users(username);" },
      { label: "Drop index:", command: "DROP INDEX idx_email ON users;" },
      { label: "Show indexes:", command: "SHOW INDEXES FROM users;" },
      { label: "Analyze query performance:", command: "EXPLAIN SELECT * FROM users WHERE id = 1;" },
    ],
  },
  {
    title: "Transactions",
    commands: [
      { label: "Begin transaction:", command: "BEGIN;" },
      { label: "Commit transaction:", command: "COMMIT;" },
      { label: "Rollback transaction:", command: "ROLLBACK;" },
      { label: "Save point:", command: "SAVEPOINT sp1;" },
      { label: "Rollback to savepoint:", command: "ROLLBACK TO SAVEPOINT sp1;" },
    ],
  },
  {
    title: "Views & Stored Procedures",
    commands: [
      { label: "Create view:", command: "CREATE VIEW active_users AS SELECT * FROM users WHERE status='active';" },
      { label: "Drop view:", command: "DROP VIEW active_users;" },
      { label: "Show views:", command: "SHOW VIEWS;" },
      { label: "Create procedure:", command: "CREATE PROCEDURE get_users() BEGIN SELECT * FROM users; END;" },
      { label: "Call procedure:", command: "CALL get_users();" },
      { label: "Drop procedure:", command: "DROP PROCEDURE get_users;" },
    ],
  },
  {
    title: "User & Permissions",
    commands: [
      { label: "Create user:", command: "CREATE USER 'user'@'localhost' IDENTIFIED BY 'password';" },
      { label: "Grant privileges:", command: "GRANT ALL PRIVILEGES ON db_name.* TO 'user'@'localhost';" },
      { label: "Grant specific privileges:", command: "GRANT SELECT, INSERT ON db_name.* TO 'user'@'localhost';" },
      { label: "Revoke privileges:", command: "REVOKE ALL PRIVILEGES ON db_name.* FROM 'user'@'localhost';" },
      { label: "Flush privileges:", command: "FLUSH PRIVILEGES;" },
      { label: "Drop user:", command: "DROP USER 'user'@'localhost';" },
    ],
  },
] as const;

export const metadata: Metadata = {
  title: "SQL Cheat Sheet | Code2Cloud",
  description: "A comprehensive SQL cheat sheet covering databases, tables, queries, joins, aggregation, and advanced features.",
};

export default function SQLCheatSheetPage() {
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

import type { Metadata } from "next";
import styles from "./page.module.css";

const sections = [
  {
    title: "Connection & Authentication",
    commands: [
      { label: "Connect to PostgreSQL:", command: "psql -U username -d database_name" },
      { label: "Connect to remote server:", command: "psql -h hostname -U username -d database_name" },
      { label: "Connect with port:", command: "psql -h localhost -p 5432 -U user -d dbname" },
      { label: "List all connections:", command: "\\conninfo" },
      { label: "Change password:", command: "ALTER USER username WITH PASSWORD 'newpassword';" },
      { label: "Exit psql:", command: "\\q" },
    ],
  },
  {
    title: "Database Operations",
    commands: [
      { label: "List all databases:", command: "\\l or \\list" },
      { label: "Create database:", command: "CREATE DATABASE database_name;" },
      { label: "Drop database:", command: "DROP DATABASE database_name;" },
      { label: "Drop if exists:", command: "DROP DATABASE IF EXISTS database_name;" },
      { label: "Switch to database:", command: "\\c database_name" },
      { label: "Create with owner:", command: "CREATE DATABASE db_name OWNER username;" },
    ],
  },
  {
    title: "Table Operations",
    commands: [
      { label: "List tables:", command: "\\dt or \\dt+" },
      { label: "List all objects:", command: "\\d" },
      { label: "Describe table:", command: "\\d table_name" },
      { label: "Create table:", command: "CREATE TABLE users (id SERIAL PRIMARY KEY, name VARCHAR(100));" },
      { label: "Drop table:", command: "DROP TABLE table_name;" },
      { label: "Truncate table:", command: "TRUNCATE TABLE table_name;" },
    ],
  },
  {
    title: "Column Operations",
    commands: [
      { label: "Add column:", command: "ALTER TABLE users ADD COLUMN email VARCHAR(100);" },
      { label: "Drop column:", command: "ALTER TABLE users DROP COLUMN email;" },
      { label: "Rename column:", command: "ALTER TABLE users RENAME COLUMN old_name TO new_name;" },
      { label: "Change column type:", command: "ALTER TABLE users ALTER COLUMN age TYPE INT;" },
      { label: "Set default value:", command: "ALTER TABLE users ALTER COLUMN status SET DEFAULT 'active';" },
      { label: "Add NOT NULL constraint:", command: "ALTER TABLE users ALTER COLUMN name SET NOT NULL;" },
    ],
  },
  {
    title: "SELECT Queries",
    commands: [
      { label: "Select all:", command: "SELECT * FROM users;" },
      { label: "Select columns:", command: "SELECT name, email FROM users;" },
      { label: "Select with WHERE:", command: "SELECT * FROM users WHERE age > 18;" },
      { label: "Select DISTINCT:", command: "SELECT DISTINCT country FROM users;" },
      { label: "Order by:", command: "SELECT * FROM users ORDER BY name ASC;" },
      { label: "Limit results:", command: "SELECT * FROM users LIMIT 10 OFFSET 5;" },
    ],
  },
  {
    title: "INSERT & UPDATE",
    commands: [
      { label: "Insert row:", command: "INSERT INTO users (name, email) VALUES ('John', 'john@example.com');" },
      { label: "Insert multiple:", command: "INSERT INTO users (name, email) VALUES ('Alice', 'alice@example.com'), ('Bob', 'bob@example.com');" },
      { label: "Insert returning:", command: "INSERT INTO users (name) VALUES ('Carol') RETURNING id;" },
      { label: "Update row:", command: "UPDATE users SET email='new@example.com' WHERE id=1;" },
      { label: "Update multiple:", command: "UPDATE users SET name='Jane', age=25 WHERE id=1;" },
      { label: "Update returning:", command: "UPDATE users SET status='active' WHERE id=1 RETURNING *;" },
    ],
  },
  {
    title: "DELETE & BACKUP",
    commands: [
      { label: "Delete row:", command: "DELETE FROM users WHERE id=1;" },
      { label: "Delete all rows:", command: "DELETE FROM users;" },
      { label: "Delete with condition:", command: "DELETE FROM users WHERE age < 18;" },
      { label: "Backup database:", command: "pg_dump -U username -d database_name > backup.sql" },
      { label: "Restore database:", command: "psql -U username -d database_name < backup.sql" },
      { label: "Custom format backup:", command: "pg_dump -U user -d dbname -Fc -f backup.dump" },
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
      { label: "Self join:", command: "SELECT a.name, b.manager_name FROM employees a JOIN employees b ON a.manager_id = b.id;" },
    ],
  },
  {
    title: "Aggregation & Grouping",
    commands: [
      { label: "Count rows:", command: "SELECT COUNT(*) FROM users;" },
      { label: "Sum values:", command: "SELECT SUM(amount) FROM orders;" },
      { label: "Average:", command: "SELECT AVG(price) FROM products;" },
      { label: "Max value:", command: "SELECT MAX(salary) FROM employees;" },
      { label: "Min value:", command: "SELECT MIN(price) FROM products;" },
      { label: "Group by:", command: "SELECT department, COUNT(*) FROM employees GROUP BY department;" },
      { label: "Having clause:", command: "SELECT department, COUNT(*) FROM employees GROUP BY department HAVING COUNT(*) > 5;" },
    ],
  },
  {
    title: "Indexes & Performance",
    commands: [
      { label: "Create index:", command: "CREATE INDEX idx_email ON users(email);" },
      { label: "Create unique index:", command: "CREATE UNIQUE INDEX idx_username ON users(username);" },
      { label: "Create partial index:", command: "CREATE INDEX idx_active ON users(id) WHERE status='active';" },
      { label: "Drop index:", command: "DROP INDEX idx_email;" },
      { label: "List indexes:", command: "\\d table_name or SELECT * FROM pg_indexes WHERE tablename='table_name';" },
      { label: "Analyze query:", command: "EXPLAIN SELECT * FROM users WHERE id = 1;" },
      { label: "Analyze & execute:", command: "EXPLAIN ANALYZE SELECT * FROM users WHERE id = 1;" },
    ],
  },
  {
    title: "Transactions",
    commands: [
      { label: "Begin transaction:", command: "BEGIN;" },
      { label: "Commit transaction:", command: "COMMIT;" },
      { label: "Rollback transaction:", command: "ROLLBACK;" },
      { label: "Savepoint:", command: "SAVEPOINT sp1;" },
      { label: "Rollback to savepoint:", command: "ROLLBACK TO SAVEPOINT sp1;" },
      { label: "Release savepoint:", command: "RELEASE SAVEPOINT sp1;" },
    ],
  },
  {
    title: "Views & Functions",
    commands: [
      { label: "Create view:", command: "CREATE VIEW active_users AS SELECT * FROM users WHERE status='active';" },
      { label: "Drop view:", command: "DROP VIEW active_users;" },
      { label: "List views:", command: "\\dv" },
      { label: "Create function:", command: "CREATE FUNCTION get_user_age(user_id INT) RETURNS INT AS $$ SELECT age FROM users WHERE id = user_id; $$ LANGUAGE SQL;" },
      { label: "Drop function:", command: "DROP FUNCTION function_name;" },
      { label: "List functions:", command: "\\df" },
    ],
  },
  {
    title: "Users & Permissions",
    commands: [
      { label: "List users:", command: "\\du or SELECT * FROM pg_user;" },
      { label: "Create user:", command: "CREATE USER username WITH PASSWORD 'password';" },
      { label: "Drop user:", command: "DROP USER username;" },
      { label: "Grant privileges:", command: "GRANT ALL PRIVILEGES ON DATABASE dbname TO username;" },
      { label: "Grant table privileges:", command: "GRANT SELECT, INSERT, UPDATE ON users TO username;" },
      { label: "Revoke privileges:", command: "REVOKE ALL PRIVILEGES ON DATABASE dbname FROM username;" },
      { label: "Create role:", command: "CREATE ROLE role_name;" },
    ],
  },
  {
    title: "Useful Meta Commands",
    commands: [
      { label: "Help:", command: "\\h" },
      { label: "Help on command:", command: "\\h SELECT" },
      { label: "List all commands:", command: "\\?" },
      { label: "Show execution time:", command: "\\timing" },
      { label: "Edit last query:", command: "\\e" },
      { label: "Show query buffering:", command: "\\p" },
      { label: "Execute file:", command: "\\i filename.sql" },
      { label: "Export to CSV:", command: "\\copy (SELECT * FROM users) TO 'output.csv' CSV;" },
    ],
  },
] as const;

export const metadata: Metadata = {
  title: "PostgreSQL Cheat Sheet | Code2Cloud",
  description: "A comprehensive PostgreSQL cheat sheet covering connections, databases, tables, queries, indexes, and advanced features.",
};

export default function PostgreSQLCheatSheetPage() {
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

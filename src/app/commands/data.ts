export type CommandCard = {
  slug: string;
  title: string;
  description: string;
  command: string;
  details: string;
};

export const commandCards: CommandCard[] = [
  {
    slug: "React",
    title: "React",
    description: "Start the deployment using all helpful commands and tools.",
    command: "npm run dev",
    details: "Use this while building the app locally so changes appear immediately in the browser.",
  },
  {
    slug: "PHP",
    title: "PHP",
    description: "Server-side scripting for building dynamic web applications.",
    command: "<?php echo 'Hello World'; ?>",
    details: "Use PHP to create dynamic website content, handle form data, and interact with databases.",
  },
  {
    slug: "Python",
    title: "Python",
    description: "Versatile programming language for web, data science, and automation.",
    command: "python script.py",
    details: "Use Python for web development, data analysis, machine learning, and scripting tasks.",
  },
  {
    slug: "WordPress",
    title: "WordPress",
    description: "Content management system for building and managing websites.",
    command: "https://yoursite.com/wp-admin",
    details: "Access WordPress admin dashboard, manage posts, themes, plugins, and users.",
  },
  {
    slug: "SQL",
    title: "SQL",
    description: "Query, manage, and manipulate relational databases with SQL.",
    command: "SELECT * FROM users;",
    details: "Use SQL to interact with databases, retrieve data, and perform CRUD operations efficiently.",
  },
  {
    slug: "PostgreSQL",
    title: "PostgreSQL",
    description: "Install dependencies from the existing lockfile for consistent builds.",
    command: "npm ci",
    details: "This is commonly used in CI pipelines because it installs exactly what the lockfile defines.",
  },
  {
    slug: "C++",
    title: "C++",
    description: "High-performance language for systems programming and competitive coding.",
    command: "g++ -o program program.cpp && ./program",
    details: "Compile and run C++ programs for system applications, games, and performance-critical code.",
  },
  {
    slug: "Docker",
    title: "Docker",
    description: "Build and manage containerized applications with Docker.",
    command: "docker build -t image-name .",
    details: "Use this to create a Docker image from your Dockerfile for deployment and consistency across environments.",
  },
  {
    slug: "Linux",
    title: "Linux",
    description: "Keep tests running while you work on changes.",
    command: "npm test -- --watch",
    details: "This is useful during development because tests re-run automatically after file updates.",
  },
  {
    slug: "sudo-commands",
    title: "Sudo Commands",
    description: "Run protected Linux administration tasks with elevated privileges.",
    command: "sudo apt update && sudo systemctl restart nginx",
    details: "Use sudo when a command needs administrator access, such as updating packages, restarting services, managing users, or changing system-owned files.",
  },
  {
    slug: "npm",
    title: "npm",
    description: "Scan installed dependencies for known security vulnerabilities.",
    command: "npm audit",
    details: "Use this when reviewing package health and dependency risk.",
  },
  {
    slug: "pm2",
    title: "PM2",
    description: "Manage and monitor Node.js applications in production.",
    command: "pm2 start app.js",
    details: "Use this to start, stop, and manage your Node.js application in the background.",
  },
  {
    slug: "Kubernetes",
    title: "Kubernetes",
    description: "Manage containerized applications across a cluster of nodes.",
    command: "kubectl get pods",
    details: "Use this to view the status of your deployed applications in the Kubernetes cluster.",
  },
  {
    slug: "ci-cd",
    title: "CI/CD",
    description: "Continuous Integration and Deployment pipeline setup.",
    command: "npm run build && npm run lint",
    details: "Run build and linting checks for CI/CD pipeline. Use GitHub Actions or Azure Pipelines for automated deployment.",
  },
  {
    slug: "update-browserslist",
    title: "Update Browserslist",
    description: "Refresh browser compatibility data used during builds.",
    command: "npx update-browserslist-db@latest",
    details: "This keeps browser support data current for build tooling and CSS processing.",
  },
  {
    slug: "analyze-bundle",
    title: "Analyze Bundle",
    description: "Build the project with bundle analysis when configured.",
    command: "ANALYZE=true npm run build",
    details: "Use this when you want to inspect bundle size and understand what is increasing build output.",
  },
  {
    slug: "format-check",
    title: "Format Check",
    description: "Check whether files match the expected Prettier formatting.",
    command: "npx prettier . --check",
    details: "This is useful in CI or before commit to confirm formatting is already clean.",
  },
  {
    slug: "format-files",
    title: "Format Files",
    description: "Automatically format project files using Prettier.",
    command: "npx prettier . --write",
    details: "Run this when you want to quickly normalize formatting across the codebase.",
  },
  {
    slug: "clear-next-cache",
    title: "Clear Next Cache",
    description: "Remove the local Next.js build cache before rebuilding.",
    command: "rmdir /s /q .next",
    details: "This can help when stale cached files cause unexpected local build behavior.",
  },
  {
    slug: "git",
    title: "Git",
    description: "Review changed files before committing work.",
    command: "git status",
    details: "Use this often to confirm what has changed in your working tree.",
  },
  {
    slug: "create-commit",
    title: "Create Commit",
    description: "Save the current set of code changes into git history.",
    command: "git commit -m \"update commands page\"",
    details: "This records your latest staged changes with a commit message describing the update.",
  },
];

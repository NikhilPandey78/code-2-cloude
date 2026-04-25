import type { Metadata } from "next";
import styles from "./page.module.css";

const sections = [
  {
    title: "Basic File and Directory Operations",
    commands: [
      { label: "List files in the current directory:", command: "ls" },
      { label: "Show hidden files with detailed info:", command: "ls -la" },
      { label: "Move into another directory:", command: "cd /home/user" },
      { label: "Print the current working directory:", command: "pwd" },
      { label: "Create a new directory:", command: "mkdir newdir" },
      { label: "Create a file or update its timestamp:", command: "touch file.txt" },
      { label: "Copy a file into another folder:", command: "cp file.txt backup/" },
      { label: "Rename or move a file:", command: "mv old.txt new.txt" },
      { label: "Remove a file:", command: "rm file.txt" },
      { label: "Create a symbolic link:", command: "ln -s /usr/bin/python3 python" },
    ],
  },
  {
    title: "Viewing and Searching Files",
    commands: [
      { label: "Display a file in the terminal:", command: "cat file.txt" },
      { label: "Open a file with paging controls:", command: "less file.txt" },
      { label: "View the first lines of a file:", command: "head file.txt" },
      { label: "Watch the end of a log file:", command: "tail -f /var/log/app.log" },
      { label: "Search text with a pattern:", command: "grep 'pattern' file.txt" },
      { label: "Find files by name:", command: "find . -name '*.txt'" },
      { label: "Locate a command executable:", command: "which python3" },
      { label: "Identify a file type:", command: "file document.pdf" },
    ],
  },
  {
    title: "Text Processing and Editing",
    commands: [
      { label: "Replace text with sed:", command: "sed 's/old/new/g' file.txt" },
      { label: "Print the first column with awk:", command: "awk '{print $1}' file.txt" },
      { label: "Extract a field from colon-separated text:", command: "cut -d: -f1 /etc/passwd" },
      { label: "Sort lines in a file:", command: "sort file.txt" },
      { label: "Remove duplicate adjacent lines:", command: "uniq file.txt" },
      { label: "Convert text to uppercase:", command: "tr '[:lower:]' '[:upper:]' < file.txt" },
      { label: "Count lines, words, and bytes:", command: "wc file.txt" },
      { label: "Compare two files:", command: "diff file1.txt file2.txt" },
    ],
  },
  {
    title: "System Monitoring and Management",
    commands: [
      { label: "Monitor processes in real time:", command: "top" },
      { label: "List running processes:", command: "ps aux" },
      { label: "Check memory usage:", command: "free -h" },
      { label: "Show system and kernel info:", command: "uname -a" },
      { label: "Check system uptime and load:", command: "uptime" },
      { label: "List open files or ports:", command: "lsof -i :8080" },
      { label: "Check block devices:", command: "lsblk" },
      { label: "Watch command output refresh automatically:", command: "watch -n 1 df -h" },
    ],
  },
  {
    title: "User and Permission Management",
    commands: [
      { label: "Create a new user account:", command: "sudo useradd -m newuser" },
      { label: "Delete a user and home directory:", command: "sudo userdel -r olduser" },
      { label: "Change a user password:", command: "passwd" },
      { label: "Change file ownership:", command: "sudo chown user:group file.txt" },
      { label: "Update file permissions:", command: "chmod 755 script.sh" },
      { label: "Change group ownership:", command: "sudo chgrp developers file.txt" },
      { label: "Run a command with elevated privileges:", command: "sudo apt update" },
      { label: "Show your current identity:", command: "whoami" },
    ],
  },
  {
    title: "Networking and Communication",
    commands: [
      { label: "Test connectivity to a host:", command: "ping -c 4 google.com" },
      { label: "Securely connect to a remote server:", command: "ssh user@server.com" },
      { label: "Copy files to a remote machine:", command: "scp file.txt user@server:/tmp/" },
      { label: "Download a file with wget:", command: "wget https://example.com/file.zip" },
      { label: "Fetch a URL with curl:", command: "curl https://example.com" },
      { label: "Show network interface addresses:", command: "ip addr show" },
      { label: "Inspect listening sockets:", command: "ss -tulpn" },
      { label: "Query DNS records:", command: "dig example.com" },
    ],
  },
  {
    title: "Disk and File System Utilities",
    commands: [
      { label: "Show mounted filesystems and usage:", command: "df -h" },
      { label: "Measure folder size:", command: "du -sh /home" },
      { label: "Mount a device:", command: "sudo mount /dev/sdb1 /mnt" },
      { label: "Unmount a mounted device:", command: "sudo umount /mnt" },
      { label: "List partition details:", command: "sudo fdisk -l" },
      { label: "Create an ext4 filesystem:", command: "sudo mkfs.ext4 /dev/sdb1" },
      { label: "Check and repair a filesystem:", command: "sudo fsck /dev/sda1" },
      { label: "Display block device UUIDs:", command: "blkid" },
    ],
  },
  {
    title: "Compression and Archiving",
    commands: [
      { label: "Create a compressed tar archive:", command: "tar -czf archive.tar.gz directory/" },
      { label: "Extract a tar.gz archive:", command: "tar -xzf archive.tar.gz" },
      { label: "Compress a file with gzip:", command: "gzip file.txt" },
      { label: "Decompress a gzip file:", command: "gunzip file.txt.gz" },
      { label: "Create a zip archive:", command: "zip -r archive.zip directory/" },
      { label: "Extract a zip archive:", command: "unzip archive.zip" },
      { label: "Compress with bzip2:", command: "bzip2 file.txt" },
      { label: "List archive contents without extracting:", command: "tar -tf archive.tar.gz" },
    ],
  },
  {
    title: "Process Management",
    commands: [
      { label: "Terminate a process by PID:", command: "kill 1234" },
      { label: "Force kill a process:", command: "kill -9 1234" },
      { label: "Kill processes by name:", command: "pkill nginx" },
      { label: "Find process IDs by name:", command: "pgrep nginx" },
      { label: "Start a process with lower priority:", command: "nice -n 10 command" },
      { label: "Change an existing process priority:", command: "renice +5 1234" },
      { label: "Keep a process running after logout:", command: "nohup command &" },
      { label: "Open a detachable terminal session:", command: "tmux new -s mysession" },
    ],
  },
  {
    title: "System Configuration and Settings",
    commands: [
      { label: "Edit your cron jobs:", command: "crontab -e" },
      { label: "Manage a systemd service:", command: "sudo systemctl status nginx" },
      { label: "Check the current timezone settings:", command: "timedatectl" },
      { label: "Create a shell alias:", command: "alias ll='ls -alF'" },
      { label: "Export an environment variable:", command: "export VAR=value" },
      { label: "Show all environment variables:", command: "env" },
      { label: "Read a kernel parameter:", command: "sysctl kernel.hostname" },
      { label: "Display loaded kernel modules:", command: "lsmod" },
    ],
  },
  {
    title: "Package Management",
    commands: [
      { label: "Refresh apt package lists:", command: "sudo apt update" },
      { label: "Install a package with apt:", command: "sudo apt install nginx" },
      { label: "Remove a package with apt:", command: "sudo apt remove nginx" },
      { label: "Install a package with yum:", command: "sudo yum install nginx" },
      { label: "Install a package with dnf:", command: "sudo dnf install nginx" },
      { label: "Install a snap package:", command: "sudo snap install code" },
      { label: "List installed dpkg packages:", command: "dpkg -l | grep nginx" },
      { label: "Query installed RPM packages:", command: "rpm -qa | grep nginx" },
    ],
  },
  {
    title: "Scripting and Programming",
    commands: [
      { label: "Run a Bash script:", command: "bash script.sh" },
      { label: "Run a shell command inline:", command: "sh -c 'command'" },
      { label: "Start a simple Python HTTP server:", command: "python3 -m http.server 8000" },
      { label: "Compile a C program with GCC:", command: "gcc -o program program.c" },
      { label: "Compile a C++ program with g++:", command: "g++ -o app main.cpp" },
      { label: "Build a project with make:", command: "make" },
      { label: "Configure a CMake project:", command: "cmake -S . -B build" },
      { label: "Debug a program with gdb:", command: "gdb ./program" },
    ],
  },
  {
    title: "Miscellaneous Utilities",
    commands: [
      { label: "Open the manual page for a command:", command: "man ls" },
      { label: "Search manual page descriptions:", command: "apropos 'copy file'" },
      { label: "Show a one-line command description:", command: "whatis ls" },
      { label: "Pause a script for five seconds:", command: "sleep 5" },
      { label: "Clear the terminal screen:", command: "clear" },
      { label: "Print formatted output:", command: "printf '%s\\n' 'Hello'" },
      { label: "See previously run commands:", command: "history" },
      { label: "Open a file or URL with the default app:", command: "xdg-open file.txt" },
    ],
  },
] as const;

export const metadata: Metadata = {
  title: "Linux Cheat Sheet | Code2Cloud",
  description: "A Linux command cheat sheet grouped into practical categories.",
};

export default function LinuxCheatSheetPage() {
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

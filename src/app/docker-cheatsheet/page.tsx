import type { Metadata } from "next";
import styles from "./page.module.css";

const sections = [
  {
    title: "Image Management",
    commands: [
      { label: "Build an image from Dockerfile:", command: "docker build -t image-name ." },
      { label: "List all images:", command: "docker images" },
      { label: "Remove an image:", command: "docker rmi image-name" },
      { label: "Tag an image:", command: "docker tag image-name new-tag" },
      { label: "Pull an image from registry:", command: "docker pull image-name" },
      { label: "Push an image to registry:", command: "docker push image-name" },
    ],
  },
  {
    title: "Container Basics",
    commands: [
      { label: "Run a container:", command: "docker run -d image-name" },
      { label: "Run with port mapping:", command: "docker run -p 8080:80 image-name" },
      { label: "Run with environment variables:", command: "docker run -e VAR=value image-name" },
      { label: "List running containers:", command: "docker ps" },
      { label: "List all containers:", command: "docker ps -a" },
      { label: "Stop a container:", command: "docker stop container-id" },
    ],
  },
  {
    title: "Container Management",
    commands: [
      { label: "Start a stopped container:", command: "docker start container-id" },
      { label: "Remove a container:", command: "docker rm container-id" },
      { label: "View container logs:", command: "docker logs container-id" },
      { label: "Execute command in container:", command: "docker exec -it container-id bash" },
      { label: "Inspect container details:", command: "docker inspect container-id" },
      { label: "Copy files to container:", command: "docker cp file.txt container-id:/path" },
    ],
  },
  {
    title: "Networking",
    commands: [
      { label: "List networks:", command: "docker network ls" },
      { label: "Create a network:", command: "docker network create network-name" },
      { label: "Connect container to network:", command: "docker network connect network-name container-id" },
      { label: "Disconnect from network:", command: "docker network disconnect network-name container-id" },
      { label: "Inspect network:", command: "docker network inspect network-name" },
    ],
  },
  {
    title: "Volumes & Storage",
    commands: [
      { label: "List volumes:", command: "docker volume ls" },
      { label: "Create a volume:", command: "docker volume create volume-name" },
      { label: "Remove a volume:", command: "docker volume rm volume-name" },
      { label: "Run with volume mount:", command: "docker run -v volume-name:/path image-name" },
      { label: "Run with bind mount:", command: "docker run -v /host/path:/container/path image-name" },
      { label: "Inspect volume:", command: "docker volume inspect volume-name" },
    ],
  },
  {
    title: "Docker Compose",
    commands: [
      { label: "Start services:", command: "docker-compose up -d" },
      { label: "Stop services:", command: "docker-compose down" },
      { label: "View logs:", command: "docker-compose logs -f" },
      { label: "Run a one-off command:", command: "docker-compose run service-name command" },
      { label: "Build services:", command: "docker-compose build" },
      { label: "Restart services:", command: "docker-compose restart" },
    ],
  },
  {
    title: "Cleanup & Maintenance",
    commands: [
      { label: "Remove unused images:", command: "docker image prune" },
      { label: "Remove unused containers:", command: "docker container prune" },
      { label: "Remove everything (careful!):", command: "docker system prune -a" },
      { label: "View disk usage:", command: "docker system df" },
      { label: "Remove dangling volumes:", command: "docker volume prune" },
    ],
  },
  {
    title: "Registry & Hub",
    commands: [
      { label: "Login to Docker Hub:", command: "docker login" },
      { label: "Logout from Docker Hub:", command: "docker logout" },
      { label: "Search images:", command: "docker search image-name" },
      { label: "View image history:", command: "docker history image-name" },
    ],
  },
  {
    title: "Debugging & Info",
    commands: [
      { label: "View Docker version:", command: "docker --version" },
      { label: "Check Docker info:", command: "docker info" },
      { label: "View container stats:", command: "docker stats" },
      { label: "View resource usage:", command: "docker stats container-id" },
      { label: "Check Docker system events:", command: "docker events" },
    ],
  },
] as const;

export const metadata: Metadata = {
  title: "Docker Cheat Sheet | Code2Cloud",
  description: "A comprehensive Docker cheat sheet covering images, containers, networking, volumes, and Compose.",
};

export default function DockerCheatSheetPage() {
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

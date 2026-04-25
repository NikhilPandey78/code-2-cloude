import type { Metadata } from "next";
import styles from "./page.module.css";
import CopyCodeCard from "./CopyCodeCard";

export const metadata: Metadata = {
  title: "CI/CD Cheatsheet | Code2Cloud",
  description: "A simple CI/CD cheatsheet with Azure Pipelines YAML example.",
};

const azureYaml = `trigger:
  branches:
    include:
      - uat

stages:
- stage: __default
  jobs:
  - job: Job
    pool:
      vmImage: ubuntu-latest
    steps:
    - checkout: self
      clean: true

    - script: |
        mkdir -p $(Build.ArtifactStagingDirectory)/artifact
        rsync -av \\
          --exclude='azure-pipelines.yml' \\
          --exclude='.gitignore' \\
          --exclude='README.md' \\
          . $(Build.ArtifactStagingDirectory)/artifact/

    - task: PublishPipelineArtifact@1
      inputs:
        targetPath: '$(Build.ArtifactStagingDirectory)/artifact'
        publishLocation: 'pipeline'
        artifactName: 'drop'`;

const nextJsAzureYaml = `trigger:
- prod

pool:
  vmImage: ubuntu-latest

steps:
- checkout: self
  clean: true

- task: NodeTool@0
  inputs:
    versionSpec: '20.x'
  displayName: 'Install'

- script: |
    npm install
    chmod +x node_modules/.bin/vite
    npm run build
  displayName: Install and Build

- task: CmdLine@2
  inputs:
    script: |
      mkdir -p $(Build.ArtifactStagingDirectory)/artifact
      rsync -av \\
        --exclude='azure-pipelines.yml' \\
        . $(Build.ArtifactStagingDirectory)/artifact/

- task: PublishPipelineArtifact@1
  inputs:
    targetPath: '$(Build.ArtifactStagingDirectory)/artifact'
    publishLocation: 'pipeline'
    artifactName: 'drop'`;

const azureYamlSteps = [
  "The pipeline starts whenever code is pushed to the `uat` branch.",
  "Azure creates a stage named `__default` and runs one job inside it.",
  "The job uses an `ubuntu-latest` hosted agent so the pipeline runs on a fresh Linux machine.",
  "The repository is checked out with `clean: true`, which removes leftover files from older runs.",
  "The script creates `$(Build.ArtifactStagingDirectory)/artifact` as the folder that will hold the deployable files.",
  "The `rsync` command copies project files into that artifact folder while excluding `azure-pipelines.yml`, `.gitignore`, and `README.md`.",
  "The `PublishPipelineArtifact@1` task uploads the artifact folder to Azure Pipelines with the artifact name `drop`.",
];

const nextJsAzureYamlSteps = [
  "The pipeline starts whenever code is pushed to the `prod` branch.",
  "Azure runs the workflow on an `ubuntu-latest` hosted agent.",
  "The repository is checked out with `clean: true` so the run begins from a clean workspace.",
  "The `NodeTool@0` task installs Node.js `20.x` on the build machine.",
  "The `Install and Build` script runs `npm install`, makes the local `vite` binary executable, and then runs `npm run build`.",
  "The `CmdLine@2` step creates `$(Build.ArtifactStagingDirectory)/artifact` and copies the project files there with `rsync`.",
  "The final `PublishPipelineArtifact@1` task uploads that artifact folder to Azure Pipelines as `drop`.",
];

export default function CiCdPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <header>
          <span className="eyebrow">CI/CD Cheatsheet</span>
          <h1>Azure Pipelines CI/CD Example</h1>
          <p>
            A minimal CI/CD pipeline configuration for Azure Pipelines. Use this
            YAML example as a starting point for a `uat` branch deployment flow.
          </p>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Azure Pipelines YAML</h2>
          <div className={styles.sectionGrid}>
            <CopyCodeCard
              title="Pipeline Configuration"
              description="This azure pipelines YAML for php projects:"
              code={azureYaml}
              steps={azureYamlSteps}
            />

            <CopyCodeCard
              title="Next.js Prod Pipeline"
              description="This azure pipelines YAML for Next.js projects:"
              code={nextJsAzureYaml}
              steps={nextJsAzureYamlSteps}
            />
          </div>
        </section>
      </main>
    </div>
  );
}

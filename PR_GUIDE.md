# SRA Student Tracker - Pull Request & Git Workflow Guide

Welcome to the development workflow guide for the **SRA Student Tracker** system. Follow these instructions to make changes, request a Pull Request (PR), and merge your code into the `main` branch.

---

## 1. Local Development Workflow

All new features, bug fixes, or documentation updates should be developed on their own branches. Never make changes directly to the `main` branch.

### Step 1: Sync Your Local Main Branch
Before starting, ensure your local `main` branch is up-to-date with the remote GitHub repository:
```bash
git checkout main
git pull origin main
```

### Step 2: Create a Feature Branch
Create a new branch for your task. Use a clear, descriptive name following these conventions:
* `feature/feature-name` (e.g., `feature/student-list-ui`)
* `bugfix/issue-description` (e.g., `bugfix/api-connection-error`)
* `docs/topic-name` (e.g., `docs/update-readme`)

To create and switch to a branch, run:
```bash
git checkout -b feature/your-feature-name
```

---

## 2. Making and Committing Changes

As you build features in the `frontend/` or `backend/` directories, follow these steps to save your progress.

### Step 1: Check Modified Files
See what files you've modified or added:
```bash
git status
```

### Step 2: Stage Your Changes
Stage the files you want to include in your commit:
* To stage everything:
  ```bash
  git add .
  ```
* To stage specific files:
  ```bash
  git add frontend/src/app/page.tsx
  ```

### Step 3: Commit with a Meaningful Message
Write a concise, descriptive commit message explaining the *what* and *why* of your changes:
```bash
git commit -m "feat: implement student list table component in frontend"
```
*Tip: Use prefixes like `feat:`, `fix:`, `docs:`, `refactor:`, or `test:` to start your messages.*

---

## 3. Pushing to GitHub & Opening a Pull Request

Once your feature is complete and tested locally, it's time to push it to the remote repository.

### Step 1: Push Your Branch
Push your branch to GitHub. The `-u` flag sets the remote tracking branch:
```bash
git push -u origin feature/your-feature-name
```

### Step 2: Create the Pull Request (PR)
Once pushed, GitHub will display a link in the terminal to create a PR. Alternatively:
1. Open your web browser and go to your repository: [jphildev/SRA-STUDENT-TRACKER](https://github.com/jphildev/SRA-STUDENT-TRACKER).
2. You will see a banner saying: **"feature/your-feature-name had recent pushes less than a minute ago"**.
3. Click the green **"Compare & pull request"** button.

### Step 3: Fill out the PR Details
* **Title**: Keep it clear and concise (e.g., `feat: Add Student Registration UI`).
* **Description**: Describe:
  * What changes are introduced by this PR.
  * How to test/verify the changes.
  * Any related issues (e.g., `Closes #12`).
* Click **"Create pull request"**.

---

## 4. Merging the Pull Request

Once the PR is created, follow these steps to review and merge:

### Step 1: Verify Automated Checks
Ensure that any automated checks (like GitHub Actions, linting, or builds) pass successfully.

### Step 2: Review Code (Optional)
If working in a team, request reviews from other developers. Reviewers can comment on specific lines of code, request modifications, or approve the changes.

### Step 3: Merge the PR
To merge the changes into `main`:
1. Click the green **"Merge pull request"** button at the bottom of the PR page.
2. Select **"Confirm merge"**. (If you prefer a clean history, you can choose *Squash and merge* from the dropdown).
3. Once merged, click the **"Delete branch"** button to keep the repository clean.

---

## 5. Cleaning Up Locally

After the PR is merged and deleted on GitHub:
1. Switch back to your local `main` branch:
   ```bash
   git checkout main
   ```
2. Pull the newly merged changes:
   ```bash
   git pull origin main
   ```
3. Delete the local feature branch:
   ```bash
   git branch -d feature/your-feature-name
   ```

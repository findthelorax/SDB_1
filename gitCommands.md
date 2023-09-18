# Intro to Git and Git Commands

### Git

A free and open source software downloaded onto your local machine that allows you to manage and version your code. A version control system.

- Software on your computer.

### GitHub

An online cloud-based software development platform(website) that allows developers to store, track, and collaborate on software projects. It allows for solo or team project version control. 

- A website you login to, a site that lets you cloud store your code and collaborate with others on the same project.

## Commonly Used Git Commands:

| Command      | Description |
| ----------- | ----------- |
| `git init` | Initializes our repo(repository) on our local machines. |
| `git status` | Displays tracked files and their current status. Also checks to see if git is initialized. |
| `git add fileName.fileType` | Stages a specific folder or file named in the command and adds it to the commit. |
| `git add .`  | Stages any changed files and add to the commit. |
| `git commit -m "Your message"` | Clears the staging and provides the "why", a label for what the commit contains. |
| `git push` | Uploads your local commits to the GitHub repo. |
| `git pull` | Downloads or "pulls down" any changes from the  GitHub repository. |
| `git remote add origin https://github.com/userName/nameOfGitHubRepo` | Creates the connection from your local code to the GitHub repo by setting a remote location. Origin is the name of the remote and the URL is the location of it on GitHub. |
| `git branch -M main`  | Renames the master branch to main. |
| `git push -u origin main` | For initial push when first connecting local code to a repo; sends code up to repo for the first time via the remote name(origin) and the branch name(main). |
| `git clone <URL>` | Clone/download a repository from GitHub. All files, branches, and commits will clone from the GitHub repo to your local machine in whatever directory you run the command. |

<hr>

## Connecting a local project to an new/empty repository on GitHub

This process has *2 parts*:
- One is done on GitHub to create the remote repository where your project will be.
- The other is connecting your project to the GitHub remote in your terminal/CLI! 

### **Creating your remote repository on GitHub**

1. To create a remote for your repository on GitHub, you must first make sure you are logged in to GitHub. If you are now or already logged in, navigating to GitHub should take you to the main home page.

2. On this home page UI or any GitHub page, you should see a `+` icon in the upper right in the navbar. Click the `+` button and select `New Repository`.
    - Note: there are a number of other locations with buttons to start a new repo, explore GitHub and familiarize yourself with the site and see if you can find some!

3. You should now be on the `Create a new repository` page! Not everything on this page needs to be filled out, please do the following:
    - In the input under `Repository name *` give your repository a name.
    - Scroll down and click the green **`Create repository`** button.

4. This is your repository page! It currently is empty and you should see some helpful directions with in the "Quick setup" section.

5. In the top blue section of "Quick setup" there is a copyable URL. That URL ends in `.git` and is the .git URL needed when we use the terminal/CLI to connect our project to this GitHub repo. Please copy that line via the copy button to the right or by highlighting it and copying it with a right click or keys shortcut.

> **NOTE**: The section below the blue on the "Quick start" page titled "…or create a new repository on the command line" has all the commands listed you need to use/follow in the terminal to properly set up and connect your project to the repo.
> 
> The only commands you do not need to use is the first of "echo "# anotherDemo" >> README.md" and the third command of "git add README.md" as we will use `git add .`.
> 
> The rest of the commands are what we will be using in the directions below.

### **Connecting your local code via the terminal/CLI**

Your initial step before entering the commands are to navigate (with `cd`) to the local project's directory you wish to create a repository in.
- Ex: `cd /directory/path/to/your/project`

> If at any time an error message prints to the terminal, Google what the error message means and try to figure out the issue! 
> 
> If you are unable to understand the error after Googling it, reach out to your learning team.

1. `git init`
    - This command initializes git at the current directory, in your project.
    - A message should print to the terminal of `Initialized empty Git repository in C:/Users/yourUserName/yourDirectoryPath/Project/.git/`, that means that we have successfully created an empty git repo waiting for it's first commit!

2. `git add .`
    - This command via git packages all our files, via the `.`, and adds them to be staged for committing to our remote repo on GitHub.
    - Nothing should print to the terminal, no news is good news!

3. `git commit -m "message here"`
    - This command clears the staging and lets us give the commit a label/message of what the commit contains.
    - When successful, you should see a small block of items print to the terminal, it will have: 
        - The main branch listed and a generated ID for the commit followed by your commit message.
        - It will have a line that says `create mode 100644 <fileName>` for each file/folder in the commit.

4. `git branch -M main`
    - This command names our primary repository branch to `main`, this is an industry standard that is expected of repositories.
    - Nothing should print to the terminal, no news is good news!

5. `git remote add origin https://github.com/userName/nameOfGitHubRepo`
    - This command tells git we are creating a remote for our repo. The name of the remote is `origin` and it is located at the .git URL of our GitHub repo. The .git URL can be found on the GitHub repo page. 
    - On success nothing should print to the terminal, no news is good news!

6. `git push -u origin main`
    - This `push` command with the `-u` flag is used **_only_** when connecting to a new repo or branch. It's telling the project when a push takes place to push upstream to our remote named `origin` and our branch `main`.
    - Upon success, a lot will happen in the terminal! 
        - The objects will be counted, compressed, and written.
        - A link to the git repo will be printed with: 

            `* [new branch]      main -> main
            branch 'main' set up to track 'origin/main'.`

The last and final action is to go to your GitHub repo, refresh the browser page, and see your code now stored securely on GitHub!

<hr>

## Updating A Repo
It's important to keep your code stored in GitHub as up to date as the code on your local machine. 

The general ideal amount of updating your code(creating and pushing a commit) is after every time you complete a development task.
- For example: creating a major function, adding in a section of HTML or styling, completing a feature, etc.

Reasons to keep your code updated:
- Your most modern code and work is on GitHub and accessible via your profile. This is a good way to show other developers and employers your skill growth and potential.
- Keep all of your hard work safe and stored in a place you can access from any computer in case of a hardware malfunction.
- If collaborating with others, the code will be up to date in the repository so development is a smoother process. 

1. `git status`
    - Checks the state of the working directory and what git has tracked or untracked in it's staging area.
    - Note that you will see files that have not been staged and committed with git printed to the terminal in red. That is not an error, git is letting you know what it does not have added to a commit yet. It will list any untracked or not staged files or changes that need to be committed.
    - If your local code and repo already have the same information, this will print to the terminal:

        `On branch main
        Your branch is up to date with 'origin/main'.
        nothing to commit, working tree clean`

2. `git add .`
    - Packages all untracked files to stage them for commit.
    - On success nothing should print to the terminal, no news is good news!

3. `git commit -m "message here"`
    - This command clears the staging and lets us give the commit a label/message of what the commit contains.
    - When successful, you should see a small block of items print to the terminal, it will have: 
        - The main branch listed and a generated ID for the commit followed by your commit message.
        - It will have a line that says `create mode 100644 <fileName>` for each file/folder in the commit.

4. `git push` or `git push origin <branchName>`
    - This command will push your code to it's upstream branch by default with `git push`, if you want to more specifically push to a particular branch, like our main branch, you can use the `git push origin main`.
    - Upon success, a lot will happen in the terminal. 
        - The objects will be counted, compressed, and written.
        - A link to the git repo will be printed.

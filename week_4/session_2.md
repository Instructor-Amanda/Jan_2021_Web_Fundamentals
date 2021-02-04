## 2/3/2021 Lecture - Git and Github

## Terminal
    - All Full Stacks have some amount of terminal usage
        - need terminal practice? MIT Terminus assignment
    - We generally utilize terminal for working with git
        - PC -> Gitbash (recommended - uses same terminal commands as Mac), Command Prompt, Powershell
        - Mac -> zsh, bash
    - Walkthrough today: Bash/Gitbash commands

## Git Local
    - What is Git?
        - a version control system
        - allows us to keep track of the changes that have been made to our projects, to roll back to previous versions and current versions, to easily collaborate with our friends and coworkers, and to add new features to our projects
        - not the only version control system, but the most widely used
    - Do I have git installed?
        - "git" in terminal, if not recognized you'll need to install it
    - Starting a repo
        - Where you start a repo matters!!!! (avoid repo in a repo)
        - git init (only the first time for that repo)
    - Check the status of your repo
        - git status
    - Choosing what you want to track (staging)
        - add files to your repo
            - git add filename.filetype, git add foldername, or git add . (to add ALL the files)
        - exclude files from your repo
            - create a .gitignore file (only the first time for that repo)
            - add relative path of what you want to exclude to this file
            - git rm -r --cached path_to_your_folder/ (if you already did the add files part, aka "unstage")
    - Commit your tracking
        - git commit -m "description of commit here"
        - What if you git commit without a -m?
            - you entered vim -> type :q and hit enter to quit out of vim and commit again.
    - Check your backups
        - git log


## GitHub
    - Git is a local version control - if your computer dies, your information is still lost!
        - Github is a remote hosting platform for version control and collaboration
    - Create a remote repo
        - commands are available on the website!
        - git add remote origin https://your_github_repo_link_here.git (only the first time for the repo)
        - git branch -M main (rename your branch - only the first time for the repo)
        - git push -u origin main  (or just git push origin main)
    - Github GUI for Desktop exists, but knowing git and how to handle the terminal matters!


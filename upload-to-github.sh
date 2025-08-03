#!/bin/bash

echo "========================================"
echo "GitHub Readme Stats Enhanced"
echo "Upload to GitHub Repository"
echo "========================================"
echo

echo "1. Initializing Git repository..."
git init

echo
echo "2. Adding all files to staging area..."
git add .

echo
echo "3. Creating initial commit..."
git commit -m "Initial commit: Enhanced github-readme-stats with managed repos feature

- Added include_managed_repos parameter for stats and top-langs APIs
- Support for ADMIN and MAINTAIN permission filtering  
- Enhanced GraphQL queries with viewerPermission field
- Updated documentation with new feature examples
- Maintained backward compatibility with original features"

echo
echo "4. Setting main branch name..."
git branch -M main

echo
echo "5. Adding remote repository..."
git remote add origin https://github.com/FutureUnreal/github-readme-stats-enhanced.git

echo
echo "6. Pushing to GitHub..."
git push -u origin main

echo
echo "========================================"
echo "Upload completed!"
echo
echo "Your repository URL:"
echo "https://github.com/FutureUnreal/github-readme-stats-enhanced"
echo
echo "Next steps:"
echo "1. Visit https://vercel.com to deploy your instance"
echo "2. Connect your GitHub account"
echo "3. Import github-readme-stats-enhanced project"
echo "4. Add environment variable PAT_1 (your GitHub Token)"
echo "5. Update example URLs in README after deployment"
echo "========================================"

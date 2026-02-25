# Register App — Jenkins CI/CD Pipeline

A simple Java/JavaScript web app built with Maven and deployed to Tomcat via Jenkins.

## Project Structure

```
register-app/
├── Jenkinsfile                         # Pipeline definition
├── pom.xml                             # Root Maven POM
├── server/
│   ├── pom.xml
│   └── src/main/java/com/example/
│       └── Server.java
└── webapp/
    ├── pom.xml
    └── src/main/webapp/
        ├── WEB-INF/web.xml
        ├── index.html
        ├── css/style.css
        └── js/app.js
```

## Setup

### 1. Update Jenkinsfile
Edit `Jenkinsfile` and replace:
- `<TOMCAT_EC2_IP>` with your Tomcat EC2 public IP
- `yourpassword` with your Tomcat admin password

### 2. Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/<your-username>/register-app.git
git push -u origin main
```

### 3. Configure Jenkins
- Create a new **Maven** or **Pipeline** job
- Point it to your GitHub repo
- Set branch to `main`
- Enable GitHub webhook trigger

### 4. Access the App
```
http://<TOMCAT_EC2_IP>:8080/
```

## Pipeline Flow
```
git push → GitHub Webhook → Jenkins
         → Checkout → Build (Maven) → Test → Deploy (curl to Tomcat Manager)
         → App live on Tomcat!
```

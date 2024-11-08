# Deployment Web Application on App Engine
This repository contains the source code for a Nodejs TODO application. The application can be deployed  on Google Cloud using a App Engine.

# Prerequisites
- A Google Cloud Account 
- A GCP project with billing enabled.
-  Ensure necessary permissions on Google cloud for deployment.

# Overview
1. Git clone the source code from github
2. Test the app locally.
3. create app yaml.
5. Use Appengine service for deployment of this web app.
7. Access the app with url created by App engine.
   
# Usage
1.clone the repository from GitHub
```bash
https://github.com/kawin048/CLOUD_TASK1-APPENGINE.git
```
2.Install dependencies:

```bash
npm install
```

3.Test the application
```bash
node server.js
```

# App Deployment to AppEngine

1. Install Google Cloud SDK
    -After installlation complete and Run gcloud init to initialize the SDK and log in to your Google Cloud account.
2. create App.yaml for app engine deployment
     In the root of your project, create a file called app.yaml. This file is required by App Engine to know how to run your application.
```bash
runtime: nodejs16
entrypoint: server.js
```
3. Set the Default Project and Region:
   In VS Code’s integrated terminal, set your Google Cloud project and region. Replace PROJECT_ID and REGION with your actual project ID and preferred App Engine region.
```bash
gcloud config set project PROJECT_ID
gcloud app create --region=REGION
```
4. Deploy to App Engine
```bash
gcloud app deploy
```
This command will:

- Detect the runtime from app.yaml.
- Upload your app to Google App Engine.
- Deploy it using the specified configuration.

5.Access Your Application
After deployment, you’ll see a link to access your App Engine app in the terminal output. You can also open it by running:
```bash
gcloud app browse
```
This will open the deployed app in your default browser.

#Result



  

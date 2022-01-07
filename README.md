# Sample - Trident React App

## Get access to the private feed
1. Install vsts-npm-auth
   ```powershell
   PS C:\Sample-TridentReactApp> npm install -g vsts-npm-auth
   ```

2. Authenticate
   ```powershell
   PS C:\Sample-TridentReactApp> vsts-npm-auth -c .npmrc
   ```

## Install, Serve and Run
1. Install
   ```powershell
   PS C:\Sample-TridentReactApp> npm ci
   ```

2. Serve
   ```powershell
   PS C:\Sample-TridentReactApp> npm start
   ```

3. Run
   
   Page 1: http://localhost:4301/page1/?__iframeType=page&__iframeId=doesntmatter&__environmentName=Onebox&__extensionName=my-extension&__extensionHostOrigin=https://mockExtensionHost
   
   Page 2: http://localhost:4301/page2/?__iframeType=page&__iframeId=doesntmatter&__environmentName=Onebox&__extensionName=my-extension&__extensionHostOrigin=https://mockExtensionHost

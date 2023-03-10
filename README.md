# ASP.NET Core + React Application Template

This project is focused for Visual Studio in Windows since the version for Mac has some serious shortcomings [more info](https://developercommunity.visualstudio.com/t/Add-support-JavaScriptTypeScript-projec/10015718?stateGroup=active).



If using on Mac make these changes:

1. Open the `react-aspnetcore-template.sln` file and change `FrontEnd.csproj` to `FrontEnd.esproj`


## Running the application

You can run the WebAPI normally using Visual Studio, however to run the FrontEnd follow these steps:

1. Open terminal/command line
2. Navigate to the FrontEnd directory
3. Run `npm run watch`

## Building/Deploying Application

1. Open terminal/command line
2. Navigate to the FrontEnd directory
3. Run `npm run build`
4. Commit updated FrontEnd files using `git commit -m "Built FrontEnd files"`
5. (Optional but recommended) Push committed files using `git push`
6. Publish the WebAPI normally using Visual Studio

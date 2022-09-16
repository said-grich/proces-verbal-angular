const {app, BrowserWindow} = require('electron')
const url = require("url");
const path = require("path");
var kill  = require('tree-kill');


let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({
    show: false,
    webPreferences: {
      nodeIntegration: true
    }
  })
  mainWindow.maximize();

  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, `/dist/index.html`),
      protocol: "file:",
      slashes: true
    })
  );
  var jarPath = app.getAppPath() + '\\proces-verbal.jar';
  var child = require('child_process').spawn(
    'java', ['-jar', jarPath, '']
  );
  // Open the DevTools.
  mainWindow.webContents.openDevTools()

  mainWindow.on('closed', function () {
    kill(child.pid);
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  if (mainWindow === null) createWindow()
})

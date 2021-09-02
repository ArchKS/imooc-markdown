const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')

function createWindow() {
  require("devtron").install();
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    x: 0,
    y: 0,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,

    }
  })
  mainWindow.loadFile('index.html')
  mainWindow.webContents.openDevTools();


  ipcMain.on("message",(evt,arg)=>{
    console.log(arg);
  })
}

app.on('ready', _ => {
  createWindow();
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})
import { app, BrowserWindow } from 'electron';

class Main {
  mainWindow: BrowserWindow | null = null;

  init() {
    app.on('ready', this.createWindow);
    app.on('window-all-closed', this.onWindowAllClosed);
  }

  createWindow = () => {
    this.mainWindow = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: true
      }
    });

    this.mainWindow.loadFile('index.html');
    this.mainWindow.on('closed', () => {
      this.mainWindow = null;
    });
  }

  onWindowAllClosed = () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  }
}

const main = new Main();
main.init();
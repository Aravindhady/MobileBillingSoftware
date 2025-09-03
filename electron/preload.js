const { contextBridge } = require('electron')

contextBridge.exposeInMainWorld('appInfo', {
  platform: process.platform,
  versions: process.versions
})
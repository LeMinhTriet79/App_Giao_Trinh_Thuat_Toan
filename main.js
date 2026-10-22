const { app, BrowserWindow, Menu, dialog, shell } = require('electron');
const path = require('path');

let mainWindow = null;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1320,
    height: 860,
    minWidth: 980,
    minHeight: 640,
    autoHideMenuBar: true,
    title: "BiKipThuatToan_Java_DotNet_v2005.chm - Microsoft HTML Help Viewer (Edition 2005)",
    backgroundColor: '#3a6ea5',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
      spellcheck: false
    }
  });

  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith('http://') || url.startsWith('https://')) {
      shell.openExternal(url);
      return { action: 'deny' };
    }
    return { action: 'allow' };
  });

  buildAppMenu();

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

function buildAppMenu() {
  const template = [
    {
      label: 'Tệp (File)',
      submenu: [
        {
          label: 'Mục lục chi tiết',
          accelerator: 'CmdOrCtrl+M',
          click: () => { if (mainWindow) mainWindow.webContents.executeJavaScript('navigateTo("toc")'); }
        },
        {
          label: 'Chương 0 (Nền tảng & Big O)',
          accelerator: 'CmdOrCtrl+0',
          click: () => { if (mainWindow) mainWindow.webContents.executeJavaScript('navigateTo("ch0")'); }
        },
        {
          label: 'Phòng Chạy Tay (Đủ 85 bài)',
          accelerator: 'CmdOrCtrl+T',
          click: () => { if (mainWindow) mainWindow.webContents.executeJavaScript('navigateTo("tracelab")'); }
        },
        {
          label: 'Kho 85 bài & Ghi chú',
          accelerator: 'CmdOrCtrl+S',
          click: () => { if (mainWindow) mainWindow.webContents.executeJavaScript('navigateTo("tracker")'); }
        },
        { type: 'separator' },
        {
          label: 'Xuất sổ ôn tập (.md)',
          accelerator: 'CmdOrCtrl+E',
          click: () => { if (mainWindow) mainWindow.webContents.executeJavaScript('exportStudyNotebookMarkdown()'); }
        },
        { type: 'separator' },
        { role: 'quit', label: 'Thoát (Exit)' }
      ]
    },
    {
      label: 'Giao diện (View)',
      submenu: [
        {
          label: 'Ẩn / Hiện cây mục lục',
          accelerator: 'CmdOrCtrl+B',
          click: () => { if (mainWindow) mainWindow.webContents.executeJavaScript('document.getElementById("leftPane").classList.toggle("hidden")'); }
        },
        {
          label: 'Tăng cỡ chữ (A+)',
          accelerator: 'CmdOrCtrl+=',
          click: () => { if (mainWindow) mainWindow.webContents.executeJavaScript('applyFontSize(loadFontSize() + 1)'); }
        },
        {
          label: 'Giảm cỡ chữ (A-)',
          accelerator: 'CmdOrCtrl+-',
          click: () => { if (mainWindow) mainWindow.webContents.executeJavaScript('applyFontSize(loadFontSize() - 1)'); }
        },
        { type: 'separator' },
        { role: 'reload', label: 'Tải lại trang (F5)' },
        { role: 'toggleDevTools', label: 'Công cụ lập trình (DevTools)' },
        { role: 'togglefullscreen', label: 'Toàn màn hình (F11)' }
      ]
    },
    {
      label: 'Trợ giúp (Help)',
      submenu: [
        {
          label: 'Giới thiệu giáo trình',
          click: () => {
            dialog.showMessageBox(mainWindow, {
              type: 'info',
              title: 'Bí kíp Thuật toán cho sinh viên Java/.NET',
              message: 'Bí kíp Thuật toán cho sinh viên Java/.NET (MSDN 2005 Edition v2.0)',
              detail: 'Giáo trình tự học thực chiến 25 bài Cơ bản + 60 bài LeetCode (Song ngữ Java 17+ & C# .NET 8).\n\n- Đầy đủ 85 kịch bản chạy tay từng bước (chọn theo Chương & Bài)\n- Hệ thống Gợi ý 3 cấp độ & Hướng dẫn viết code chi tiết\n- Hiển thị chuẩn công thức toán học LaTeX & Thanh chỉnh cỡ chữ.'
            });
          }
        }
      ]
    }
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
}

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

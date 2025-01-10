# cnpm安装报错记录
node版本14.18.2
使用`npm install -g cnpm`安装时报错，通过指定版本解决

## 报错信息
```sh
npm ERR! code EPERM
npm ERR! syscall rename
npm ERR! path C:\Users\admin\AppData\Roaming\nvm\v14.18.2\node_modules\cnpm\node_modules\.make-fetch-happen.DELETE\node_modules\@npmcli
npm ERR! dest C:\Users\admin\AppData\Roaming\nvm\v14.18.2\node_modules\cnpm\node_modules\make-fetch-happen\node_modules\@npmcli
npm ERR! errno -4048
npm ERR! Error: EPERM: operation not permitted, rename 'C:\Users\admin\AppData\Roaming\nvm\v14.18.2\node_modules\cnpm\node_modules\.make-fetch-happen.DELETE\node_modules\@npmcli' -> 'C:\Users\admin\AppData\Roaming\nvm\v14.18.2\node_modules\cnpm\node_modules\make-fetch-happen\node_modules\@npmcli'
npm ERR!  [OperationalError: EPERM: operation not permitted, rename 'C:\Users\admin\AppData\Roaming\nvm\v14.18.2\node_modules\cnpm\node_modules\.make-fetch-happen.DELETE\node_modules\@npmcli' -> 'C:\Users\admin\AppData\Roaming\nvm\v14.18.2\node_modules\cnpm\node_modules\make-fetch-happen\node_modules\@npmcli'] {
npm ERR!   cause: [Error: EPERM: operation not permitted, rename 'C:\Users\admin\AppData\Roaming\nvm\v14.18.2\node_modules\cnpm\node_modules\.make-fetch-happen.DELETE\node_modules\@npmcli' -> 'C:\Users\admin\AppData\Roaming\nvm\v14.18.2\node_modules\cnpm\node_modules\make-fetch-happen\node_modules\@npmcli'] {
npm ERR!     errno: -4048,
npm ERR!     code: 'EPERM',
npm ERR!     syscall: 'rename',
npm ERR!     path: 'C:\\Users\\admin\\AppData\\Roaming\\nvm\\v14.18.2\\node_modules\\cnpm\\node_modules\\.make-fetch-happen.DELETE\\node_modules\\@npmcli',
npm ERR!     dest: 'C:\\Users\\admin\\AppData\\Roaming\\nvm\\v14.18.2\\node_modules\\cnpm\\node_modules\\make-fetch-happen\\node_modules\\@npmcli'
npm ERR!   },
npm ERR!   errno: -4048,
npm ERR!   code: 'EPERM',
npm ERR!   syscall: 'rename',
npm ERR!   path: 'C:\\Users\\admin\\AppData\\Roaming\\nvm\\v14.18.2\\node_modules\\cnpm\\node_modules\\.make-fetch-happen.DELETE\\node_modules\\@npmcli',
npm ERR!   dest: 'C:\\Users\\admin\\AppData\\Roaming\\nvm\\v14.18.2\\node_modules\\cnpm\\node_modules\\make-fetch-happen\\node_modules\\@npmcli',
npm ERR!   parent: 'cnpm'
npm ERR! }
npm ERR!
npm ERR! The operation was rejected by your operating system.
npm ERR! It's possible that the file was already in use (by a text editor or antivirus),
npm ERR! or that you lack permissions to access it.
npm ERR!
npm ERR! If you believe this might be a permissions issue, please double-check the
npm ERR! permissions of the file and its containing directories, or try running
npm ERR! the command again as root/Administrator.

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\admin\AppData\Roaming\npm-cache\_logs\2023-12-29T07_52_50_909Z-debug.log
```

## 解决方案
```sh
npm install -g cnpm@7.1.0
```

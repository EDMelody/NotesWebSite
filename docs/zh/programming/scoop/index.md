
# Scoop

```html
---
hello: world
---
    {{ 1 + 1 }}
```

[Github](https://github.com/ScoopInstaller/Install?tab=readme-ov-file#readme)

windows系统环境下的软件安装器

## 1.打开PowerShell

## 2.更改脚本执行策略
```sh
set-executionpolicy remotesigned -s cu

执行策略更改
执行策略可帮助你防止执行不信任的脚本。更改执行策略可能会产生安全风险，如 https:/go.microsoft.com/fwlink/?LinkID=135170
中的 about_Execution_Policies 帮助主题所述。是否要更改执行策略?
[Y] 是(Y)  [A] 全是(A)  [N] 否(N)  [L] 全否(L)  [S] 暂停(S)  [?] 帮助 (默认值为“N”):
```

## 3.设置环境变量
```sh
$env:SCOOP='D:\Scoop'

[Environment]::SetEnvironmentVariable('SCOOP', $env:SCOOP, 'User')
```

## 4.安装命令
```sh
 # 如下报错
 # Running the installer as administrator is disabled by default, see         https://github.com/ScoopInstaller/Install#for-admin for details.
 # 执行该安装命令 以管理员身份
iex "& {$(irm get.scoop.sh)} -RunAsAdmin"
```

## 5.检查安装
```sh
scoop
```

## 6.下载完成配置

订阅仓库
```sh
 scoop bucket add dorado https://gitee.com/scoop-bucket/dorado.git
```

更换镜像
```sh
 # 更换scoop的远程地址
 scoop config SCOOP_REPO "https://gitee.com/scoop-installer/scoop"
 # 更新库
 scoop update
```
清除订阅
```sh
scoop bucket rm dorado
```

卸载scoop
```sh
scoop uninstall scoop
```
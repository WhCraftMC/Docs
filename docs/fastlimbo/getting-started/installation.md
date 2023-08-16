---
description: 如何在本地安装并启动FastLimbo服务器。
---

# 安装
FastLimbo 本质上是一个 Jar 文件。

## 安装Java
FastLimbo是用Java编写的，所以如果你还没有安装Java，在您继续之前需要安装  Java 8 或更高版本。有关详细说明，请参阅我们的 Java 安装指南。

## 下载FastLimbo
下载 FastLimbo的Jar文件 后，移动 JAR文件 到专用文件夹中，或将其上传到您的服务器。

## 在 Windows 下启动
在 Jar文件 所在的目录中创建start.bat,并写入以下内容:

```batch title="start.bat"
@echo off
java -Xms256M -Xmx256M-jar fastlimbo.jar
pause
```

:::tip
请将start.bat中的 fastlimbo.jar 替换为你们下载的 Jar文件 ,或将其重命名为 fastlimbo.jar
:::
保存后，双击该文件启动服务器。

## 在macOS或Linux下启动
在 Jar文件 所在的同一目录中创建包含以下内容的 ``start.sh``。您可以使用文件传输客户端或使用主机上运行的文本编辑器来执行此操作。

```batch title="start.sh"
#!/bin/sh

java -Xms512M -Xmx512M -jar fastlimbo.jar
```
保存后，打开终端（或登录计算机）如果尚未打开，请打开放置 JAR文件 和 ``start.sh`` 文件的目录。然后运行 ``chmod +x start.sh`` 然后运行 ``./start.sh``。
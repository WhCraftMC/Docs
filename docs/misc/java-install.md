---
description: How to install or update to Java 17 on Linux (apt/rpm), Windows, or Mac.
toc_max_heading_level: 5
---
# 安装或更新 Java
安装 Java 是使用或开发 FastLimbo 等项目的必须选项。本指南将引导您完成大多数建议的安装步骤。

:::caution[不建议使用非官方版Java!]

有些非官方Java没有包含某些项目所需要的依赖项，所以不推荐使用。

:::

:::tip

本指南重点介绍亚马逊的Corretto OpenJDK发行版。这是因为它提供了最好的 在大多数平台上的安装体验。然而，Corretto并不是唯一的OpenJDK供应商。 从中选择。存在许多替代方案，例如
[Eclipse Adoptium](https://adoptium.net/),
[Microsoft](https://www.microsoft.com/openjdk) 和
[Azul Zulu](https://www.azul.com/downloads/?package=jdk)。
请注意，Oracle JDK 虽然功能相同，但由于安装程序极其不友好，因此**不建议**使用。

:::

## Linux

### Ubuntu/Debian

在基于 Debian 的 Linux 发行版上安装 Java 17 非常简单。首先，确保您的系统具有安装 Java 所需的所有工具。

```bash
sudo apt-get update && sudo apt-get upgrade
sudo apt-get install software-properties-common ca-certificates apt-transport-https gnupg curl
```

其次，导入 Amazon Corretto 公有密钥和 apt 存储库。

```bash
curl https://apt.corretto.aws/corretto.key | sudo apt-key add -
sudo add-apt-repository 'deb https://apt.corretto.aws stable main'
```

然后，使用以下命令安装 Java 17 和其他依赖项：

```bash
sudo apt-get update
sudo apt-get install -y java-17-amazon-corretto-jdk libxi6 libxtst6 libxrender1
```

现在请 [确认安装状态](#verifying-installation).

### RPM-based

在 CentOS、RHEL、Fedora、openSUSE、SLES 或任何其他基于 RPM 的 Linux 上安装 Java 17，请根据您的包管理器执行以下命令。

执行完成后请 [确认安装状态](#verifying-installation).

#### DNF

DNF 用于 Fedora、CentOS/RHEL 7+ 和相关发行版。

```bash
sudo rpm --import https://yum.corretto.aws/corretto.key
sudo curl -Lo /etc/yum.repos.d/corretto.repo https://yum.corretto.aws/corretto.repo
sudo dnf -y install java-17-amazon-corretto-devel
```

#### Zypper

Zypper 用于 openSUSE、SLES 和相关发行版。

```bash
sudo zypper addrepo https://yum.corretto.aws/corretto.repo
sudo zypper refresh
sudo zypper install java-17-amazon-corretto-devel
```

#### YUM

YUM 用于旧版本的 CentOS/RHEL，以及过时的 Fedora 版本。

```bash
sudo rpm --import https://yum.corretto.aws/corretto.key
sudo curl -Lo /etc/yum.repos.d/corretto.repo https://yum.corretto.aws/corretto.repo
sudo yum -y install java-17-amazon-corretto-devel
```

## Windows 10 & 11

如果您使用的是 Windows 10 或 11，安装 Java 就像安装任何其他程序一样。从
[他们的网站](https://corretto.aws/downloads/latest/amazon-corretto-17-x64-windows-jdk.msi)下载亚马逊Corretto安装程序。

运行安装程序后，在整个过程中单击“下一步”是安全的。无需安装额外软件或工具，并且所有必需的功能都是开箱即用的。

现在请 [确认安装状态](#verifying-installation).

## macOS/OS X

如果您使用的是macOS，则管理Java安装的最佳方法是使用[Homebrew](https://brew.sh)工具，按照其主页上的说明进行安装。然后，在你的终端运行以下命令：

```bash
brew install openjdk@17
```

现在请 [确认安装状态](#verifying-installation).

## 验证安装

现在您已经安装了 Java 17，请在终端中运行此命令以确保该过程成功的。

```bash
java -version
```

输出应与此类似。要注意的重要部分是它始于
“openjdk 17”，最后一行包含“64 位”。如果您获得的输出类似于
“java：找不到命令”，尝试创建新的终端。

```
openjdk 17 2021-09-14 LTS
OpenJDK Runtime Environment Corretto-17.0.0.35.1 (build 17+35-LTS)
OpenJDK 64-Bit Server VM Corretto-17.0.0.35.1 (build 17+35-LTS, mixed mode, sharing)
```

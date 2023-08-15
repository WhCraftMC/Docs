---
description: 服务器配置的详解。
---

# 配置文件详解
配置文件采用YML，推荐使用VS Code进行修改。
您可以从这里大致了解配置文件。

## 服务器地址设置
这里可以修改服务器的启动的端口和地址。
```yml
# Server address and port.
# Set ip empty to use public address
bind:
  ip: 'localhost' # 服务器的ip
  port: 25565 # 服务器的端口
```

## 服务器玩家数量设置
这里可以修改服务器的最大玩家数。
修改为 -1 代表玩家数无上限。
```yml
# Max amount of players can join to server
# Set -1 to make it infinite
maxPlayers: 100 # 这里填写最大玩家数
```

## ping返回信息设置
这里可以修改服务器列表内显示的信息。
```yml
# Server's data in servers list
ping:
  description: '{"text": "FastLimbo"}' # 显示内容(显示JSON格式)
  version: 'FastLimbo' # 返回版本号信息
```

## 玩家列表设置
在这里显示自定义的玩家列表。
此功能在 1.16.5客户端 被强制启用，不启用可能导致客户端崩溃。
```yml
# Whether to display players in the player list
# In 1.16.5 clients, player list will be sent even if disabled, to avoid crash
playerList:
  enable: false # 是否启用(1.16.5版本的客户端强制启用，否则可能导致客户端崩溃)
  username: 'FastLimbo' # 显示玩家列表内玩家
```

## 默认维度设置
在这里可以设置加入后的默认维度，分别为:
1. OVERWORLD(主世界)
2. NETHER(地狱)
3. THE_END(末地)
```yml
# Available dimensions: OVERWORLD, NETHER, THE_END
dimension: OVERWORLD # 默认维度
```

## 默认游戏模式设置
在这可以设置加入后的默认游戏模式，分别为:
1. Survival(生存)
2. Creative(创造，隐藏血量和饥饿栏)
3. Adventure(冒险)
4. Spectator(旁观者，隐藏UI栏，仅1.8+客户端生效)
```yml
# Setup player's game mode
# 0 - Survival
# 1 - Creative (hide HP and food bar)
# 2 - Adventure
# 3 - Spectator (hide all UI bars)
# Spectator works on 1.8+ clients
gameMode: 3 # 默认游戏模式
```

## F3下服务器信息
在这里可以设置按下F3后显示的服务器信息(仅1.13+生效)
```yml
# Server name displayed under F3
# Only 1.13+ clients
brandName:
  enable: true # 是否启用
  content: 'FastLimboServer. \n Server Running' # 内容
```

## 玩家信息转发设置
在这里可以设置玩家信息转发功能，支持类型:
1. LEGACY
2. MODERN
3. BUNGEE_GUARD
```yml
# Player information forwarding support.
# Available types:
#  - NONE
#  - LEGACY
#  - MODERN
#  - BUNGEE_GUARD
# Don't use secret if you not use MODERN type.
infoForwarding:
  type: NONE # 类型
  secret: '<YOUR_SECRET_HERE>' # 你的SECRET
  tokens:
    - '<BUNGEE_GUARD_TOKEN>' # 你的 BUNGEE GURAD TOKEN
```

## 连接超时设置
在这里你可以设置连接超时时间(单位: ms)。
```yml
# Connection read timeout (milliseconds)。
readTimeout: 30000 # 超时时间(ms)
```

## 日志输出设置
在这里你可以设置输出日志的等级，不同等级显示的内容如下：
1. 0:显示错误
2. 1:显示错误、警告
3. 2:显示错误、警告、信息(推荐在生产环境中使用)
4. 3:显示错误、警告、信息、debug信息(推荐开发环境使用)
```yml
# Define the log level. Default usage level 2.
# Log levels:
# 0 - Display only errors
# 1 - Display errors, warnings
# 2 - Display errors, warnings, info
# 3 - Display errors, warnings, info, debug
debugLevel: 2
```

## netty设置
:::caution[如果你不知道这是什么，请不要修改。]

若你在不了解此设置的情况下修改，可能会产生意想不到的结果。

:::
在这里你可以修改netty设置，如: 是否使用Epoll、线程池线程量。
```yml
# Warning! If you are not completely sure what this is, do not modify the parameters of this block!
netty:
  # If possible, please use Linux native transfer type
  useEpoll: true # 是否启用Epoll
  # EventLoopGroup threads
  threads:
    bossGroup: 1 # bossG的线程数量
    workerGroup: 4 # workerG的线程数量
```
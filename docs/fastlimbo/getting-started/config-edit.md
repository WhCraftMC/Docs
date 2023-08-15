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
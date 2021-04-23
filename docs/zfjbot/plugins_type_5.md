# 关于setu相关

## setu

| 指令 | 功能 |
| - | - |
| [1-10][色瑟涩]图 | 涩图 |
| [色瑟涩]图\<关键词> | 搜索涩图(当前默认返回10张) |
| 不够[色瑟涩] | r18涩图 |
| 本群/群\<群号>涩图[不]撤回 | [不]撤回（60s） |
| 本群/群\<群号>r18开启/关闭 | r18开启/关闭 |

## setu_mix

| 指令 | 功能 |
| - | - |
| 涩图 | 随机获取1张图片 |
| 来n张涩图 | 随机获取n张图片 |
| 搜[n张]涩图 \<keyword> | 搜索[n张]指定关键字的图片 |
| 本日涩图排行榜 [page] | 获取p站排行榜 |
| 看涩图 [n] | 获取p站排行榜指定排名的图片 |
| 看涩图 start end | 获取p站排行榜排名从start到end的全部图片 |
| (管理员)setu set 模块 设置值 [群号] | 修改本群或指定群的设置, 以下为设置项 - 取值 - 说明 |
| setu set acggov on/off | 是否开启acggov模块 |
| setu set lolicon on/off | 是否开启lolicon模块 |
| setu set lolicon_r18 on/off | 是否开启lolicon_r18模块 |
| setu set withdraw n | 发出的图片在n秒后撤回,设置为0表示不撤回. 如果撤回功能异常, 请关闭bot宿主程序的分片发送功能. |
| setu set xml on/off | (仅支持go-cqhttp)使用cardimage卡片模式发送图片, 注意xml类消息容易触发风控且不支持某些客户端. |
| setu get \<群号> | 查看本群或指定群的模块开启状态 |
| setu fetch | 手动从api拉取一批图片存入本地仓库(插件每半小时会自动拉取一次) |
| setu warehouse | 查询本地仓库图片数量 |

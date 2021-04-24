# 将本项目的data.json 转化为 Markdown格式
import os
import json

path = os.path.join(os.path.dirname(__file__), "../../public/data.json")
md_path = os.path.join(os.path.dirname(__file__), "../zfjbot/README.md")
md_dir_path = os.path.join(os.path.dirname(__file__), "../zfjbot")
# import re
## 打开json文件
def open_jsonfile(path):
    with open(path, "r", encoding="utf8") as fp:
        return json.load(fp)


## planB：整体放入一个md文件
def style_1(md_path):
    if os.path.exists(md_path):
        os.remove(md_path)
    with open(md_path, "w", encoding="utf8") as f:
        f.write(f"# 猫猫插件\n\n")
        data_json = open_jsonfile(path)
        for plugin_type in data_json:
            # print(len(plugin_type))
            # print(plugin_type["plugins_type_id"])
            print(plugin_type["plugins_type_name"])
            f.write(f"## {plugin_type['plugins_type_name']}\n\n")
            print(len(plugin_type["plugins_list"]))
            plugin_list = plugin_type["plugins_list"]
            for plugin in plugin_list:
                print(plugin["plugin_name"])
                f.write(f"### {plugin['plugin_name']}\n\n")
                print(plugin["plugin_service_name"])
                print(plugin["plugin_direction"])
                print(len(plugin["plugin_commands"]))
                f.write(f"| 指令 | 功能 |\n")
                f.write(f"| - | - |\n")
                for command in plugin["plugin_commands"]:
                    print(command["command"])
                    # command["command"].replace("<","/<")
                    print(command["description"])

                    f.write(
                        "| {} | {} |\n".format(
                            command["command"].replace("<", "\\<"), command["description"].replace("<", "\\<")
                        )
                    )


## 当前使用：按type分离分拣
def style_2(md_path):
    if os.path.exists(md_path):
        os.remove(md_path)
    with open(md_path, "w", encoding="utf8") as f:
        f.write(f"# 猫猫插件\n\n")
        data_json = open_jsonfile(path)
        for plugin_type in data_json:
            md_type = md_dir_path + f"/plugins_type_{plugin_type['plugins_type_id']}.md"
            if os.path.exists(md_type):
                os.remove(md_type)
            with open(md_type, "w", encoding="utf8") as f_type:
                f_type.write(f"# {plugin_type['plugins_type_name']}相关\n")
                print(len(plugin_type["plugins_list"]))
                plugin_list = plugin_type["plugins_list"]
                for plugin in plugin_list:
                    print(plugin["plugin_name"])
                    f_type.write(f"\n## {plugin['plugin_name']}\n\n")
                    if plugin["plugin_direction"]:
                        f_type.write(f"### {plugin['plugin_direction']}\n\n")
                    print(plugin["plugin_service_name"])
                    print(plugin["plugin_direction"])
                    print(len(plugin["plugin_commands"]))
                    f_type.write(f"| 指令 | 功能 |\n")
                    f_type.write(f"| - | - |\n")
                    for command in plugin["plugin_commands"]:
                        print(command["command"])
                        # command["command"].replace("<","/<")
                        print(command["description"])
                        f_type.write(
                            "| {} | {} |\n".format(
                                command["command"].replace("<", "\\<"), command["description"].replace("<", "\\<")
                            )
                        )


style_2(md_path)

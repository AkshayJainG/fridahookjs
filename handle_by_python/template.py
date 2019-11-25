#!/usr/local/bin/env python3


from frida import *
import sys
import os


# 这里javascript通过send传过来的第二个参数是不经过序列化的的原始数据，所以要使用原始数据要通过第二个参数传
def on_message(message, data):
    if message['type'] == "send":
        pass
    else:
        print(message)


def main():
    session = get_usb_device().attach("com.yoozoo.sproject.qa")
    src = open("./hook.js").read()
    script = session.create_script(src)
    script.on("message", on_message)
    script.load()
    sys.stdin.read()

if __name__ == "__main__":
    main()

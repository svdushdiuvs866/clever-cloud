#!/bin/sh
UUID=${UUID:-'165141ca-4e07-442a-80c8-4b65a6ed7c25'}
sed -i "s#UUID#$UUID#g" ./config-vmess.json

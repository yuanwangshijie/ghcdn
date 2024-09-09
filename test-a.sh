#!/bin/bash

pause() {
    read -rsp "$(echo -e "按 $green Enter 回车键 $none 继续....或按 $red Ctrl + C $none 取消.")" -d $'\n'
    echo
}

while true; do
clear

echo "我是脚本A"
echo "假装这是一个菜单"
echo -e "------------------------"
echo -e "02.   调用脚本B▶"
echo -e "03.   调用脚本C▶"
echo -e "05.   BBR管理 ▶"
echo -e "------------------------"
echo -e "0.   退出脚本"
echo -e "------------------------"
read -p "请输入你的选择: " choice

case $choice in
  2)
    bash <(curl -Ls )
    ;;

  3)
    bash <(curl -Ls )
    ;;
    
  5)
    wget -O tcpx.sh "https://github.com/ylx2016/Linux-NetSpeed/raw/master/tcpx.sh" && chmod +x tcpx.sh && ./tcpx.sh
    ;;
    
  0)
    clear
    exit
    ;;

  *)
    echo "无效的输入!"
    ;;
    
esac

done

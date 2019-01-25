---
title: Magisk
date: 2019-01-24 10:28:50
tags: 
  - Magisk
categories:
  - 开发
copyright: true
---
[![kZJQ8H.md.png](https://s2.ax1x.com/2019/01/24/kZJQ8H.md.png)](https://imgchr.com/i/kZJQ8H)

# Magisk

## 简介
Magisk，以不触动/system的方式修改/system，继Super SU systemless化后的新发展。
<!-- more -->
作者[topjohnwu](https://forum.xda-developers.com/apps/magisk/official-magisk-v7-universal-systemless-t3473445) ,<i class="fa fa-github">[Github](https://github.com/topjohnwu/Magisk)

## 特性介绍

### Magic Mount: 

此特性不仅允许用户替换/system目录下已经存在的文件及文件夹，同时也支持创建/system原本不存在的文件及文件夹。当然，实际上并不修改原来的/system.
这意味之前的修改模块(zip刷机包)基本都可以在这种systemless-ly模式下工作。

### Multiple Entry Points: 

如果“Magic Mount”还不能完成实现你的需求，Magisk在系统启动过程中提供了几个暂停点来运行你的脚本，使开发者可以在任何需要的时候实现所需的功能。在启动过程被暂停后，直到你的脚本被执行前，Magisk都可以可靠地阻断启动过程的继续。

### Magisk Manager:

Magisk Manager这款app可以帮助你管理root状态，以及管理所有的Magisk模块(模块管理功能还在开发中)，就像Xposed模块一样。

### Special "Cache" Mode: 

这种模式支持在system props被加载前运行，这意味Magisk能更多的可能性。
systemless hosts 默认开启，各种修改hosts的广告屏蔽软件无需修改就可以直接使用此systemless模式。
Magisk还将会移除 system verify和 forceencrypt(二者均可以通过.magisk文件手动配置), 并且修改sepolicy使得脚本运行正常。
这意味着开发者以后无需担心boot.img的修改问题。
一些主要的系统修改，如root和Xposed等，都可以依赖于Magisk.
magisk.img(所有systemless模块存储在此文件内)支持自动调节文件大小以适应较大体积模块，同时也可以在某些模块移除后自动缩小大小。

```tips```

>1. 建议配合phh's SuperUser(原帖内附带的修改版)来使用，这样systemless特性最低支持到Android 5.0，同时还可以在开机后一键关闭root；Chainfire的SuperSU(使用原帖修改版)systemless最低支持5.1，暂不支持开机后一键关闭root。一键关闭root主要为了Android pay的使用，不使用Android pay的话这两种root方式没太大区别。
>2. systemless Xposed需要对应版本呢，安装器对应material版。
http://coolapk.com/r/2ord 
>3. systemless ViPER4Android，原帖仅提供驱动systemless安装，刷入后在安装apk即可。

### 模块分享


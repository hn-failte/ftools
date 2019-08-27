#!/usr/bin/env node

const { platform, type, release, memory, time, userInfo , cpu, hostname, network } = require('./readInfo')

const user = userInfo.username
const userFolder = userInfo.homedir
const os = /window/i.test(type) ? "Windows" : "Linux"
const version = parseInt(release) >= 10 ? 10 : parseInt(release) >= 8 ? 8 : parseInt(release) >= 7 ? 7 : 'xp'
const runTime = time/3600/24
const ip = network.WLAN ? network.WLAN[network.WLAN.length-1].address : "No WLAN"

console.log("Program is running in " + platform + "!")
console.log(user + " is using " + os + version + "!")
console.log(user + "'s machine had " + cpu.length + " cpus, " + (memory/1024/1024/1024).toFixed(2) + " G memory" + "!")
console.log(user + "'s compoter had run " + runTime + " days")
console.log(user + "'s default folder is " + userFolder)
console.log(user + "'s ip address is " + ip)
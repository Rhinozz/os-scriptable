// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: pink; icon-glyph: archive;
const cmd={EOL:"\\n",arch:function(){return"arm64"},constants:"error: no constants are available for use in scriptable",cpus:function(){let e=Device.screenResolution();let n={1776:"Apple Fusion//n|2340|4",2084:"2084|",2620:"Apple Lightning or Apple Vortex/Apple Thunder or Apple Tempest/2:4|2650 or 2400/1800 or 1590|6",3000:"3000|",3561:"Apple Monsoon, Apple Vortex, Apple Lightning, or Apple Firestorm/Apple Mistral, Apple Tempest, Apple Thunder, or Apple Icestorm/2:4|2390, 2400, 2650, or 3100/1420, 1590, 1800, or 1800|6",3584:"3584|",3702:"Apple Firestorm/Apple Icestorm/2:4|3100/1800|6",3780:"Apple Twister or Apple Fusion//n|1850 or 2310|2",3892:"Apple Twister//n|2160|2",3930:"",4000:"Apple Firestorm/Apple Icestorm/2:4|3100/1800|6",4056:"Apple Lightning or Apple Vortex/Apple Thunder or Apple Tempest/2:4|2650 or 2400/1800 or 1590|6",4062:"Apple Firestorm/Apple Icestorm/2:4|3100/1800|6",4780:"4780|"}[(parseInt(e.height)+parseInt(e.width)).toString()].split("|"),o=n[0].split("/"),r=n[1].split("/"),p=0,t="",s="";var i="[ ";if("4780"===n[0])i="[ { model: Apple Twister, Apple Hurricane, or Apple Vortex,\n    speed: 2160, 2340, or 2490,\n    times: 'unknown' },\n  { model: Apple Twister, Apple Hurricane, or Apple Vortex,\n    speed: 2160, 2340, or 2490,\n    times: 'unknown' },\n  { model: Apple Hurricane or Apple Vortex,\n    speed: 2340 or 2490,\n    times: 'unknown' },\n  { model: Apple Zephyr or Apple Vortex,\n    speed: 1050 or 2490,\n    times: 'unknown' },\n  { model: Apple Zephyr or Apple Tempest,\n    speed: 1050 or 1590,\n    times: 'unknown' },\n  { model: Apple Zephyr or Apple Tempest,\n    speed: 1050 or 1590,\n    times: 'unknown' },\n  { model: Apple Tempest,\n    speed: 1590,\n    times: 'unknown' },\n  { model: Apple Tempest,\n    speed: 1590,\n    times: 'unknown' } ]";else if("2084"===n[0])i="[ { model: Apple Twister, Apple Fusion, or Apple Monsoon,\n    speed: 1850, 2340, or 2390,\n    times: 'unknown' },\n    model: Apple Twister, Apple Fusion, or Apple Monsoon,\n    speed: 1850, 2340, or 2390,\n    times: 'unknown' },\n  { model: Apple Mistral,\n    speed: 1420,\n    times: 'unknown' },\n  { model: Apple Mistral,\n    speed: 1420,\n    times: 'unknown' },\n  { model: Apple Mistral,\n    speed: 1420,\n    times: 'unknown' },\n  { model: Apple Mistral,\n    speed: 1420,\n    times: 'unknown' } ]";else if("3000"===n[0])i="[ { model: Apple Twister, Apple Fusion, Apple Monsoon, or Apple Lightning,\n    speed: 1850, 2340, 2390, or 2650,\n    times: 'unknown' },\n  { model: Apple Twister, Apple Fusion, Apple Monsoon, or Apple Lightning,\n    speed: 1850, 2340, 2390, or 2650,\n    times: 'unknown' },\n  { model: Apple Thunder or Apple Mistral,\n    speed: 1800 or 1420,\n    times: 'unknown' },\n  { model: Apple Thunder or Apple Mistral,\n    speed: 1800 or 1420,\n    times: 'unknown' },\n  { model: Apple Thunder or Apple Mistral,\n    speed: 1800 or 1420,\n    times: 'unknown' },\n  { model: Apple Thunder or Apple Mistral,\n    speed: 1800 or 1420,\n    times: 'unknown' } ]";else if("3584"===n[0])i="[ { model: Apple Fusion, Apple Typhoon, or Apple Vortex,\n    speed: 2340, 2390, or 2490,\n    times: 'unknown' },\n    model: Apple Fusion, Apple Typhoon, or Apple Vortex,\n    speed: 2340, 2390, or 2490,\n    times: 'unknown' },\n  { model: Apple Tempest,\n    speed: 1590,\n    times: 'unknown' },\n  { model: Apple Tempest,\n    speed: 1590,\n    times: 'unknown' },\n  { model: Apple Tempest,\n    speed: 1590,\n    times: 'unknown' },\n  { model: Apple Tempest,\n    speed: 1590,\n    times: 'unknown' } ]";else{for(var l=0;l<parseInt(n[2]);l++)"n"!=o[2]?p<o[2].split(":")[0]?(p++,t=o[0],s=r[0]):(p++,t=o[1],s=r[1]):(t=o[0],s=r[0]),i+=`{ model: '${t}',\n    speed: ${s},\n    times: 'unknown' },\n  `;i=i.slice(0,-4)+" ]"}return i},endianness:function(){return"LE"},freemem:function(){return"error: it is not possible to get the amount of free device memory"},getPriority:function(){return"error: it is not possible to get the priority of tasks"},homeDir:function(){return FileManager.local().documentsDirectory()},hostname:function(){return Device.name()},loadavg:function(){return'[0,0,0]'},networkInterfaces:function(){return"{ 'Wi-Fi':\n    [ { address: 'unknown',\n        netmask: 'unknown',\n        family: 'IPv6',\n        mac: 'unknown',\n        scopeid: 'unknown',\n        internal: false,\n        cidr: 'unknown' },\n    [ { address: 'unknown',\n        netmask: 'unknown',\n        family: 'IPv4',\n        mac: 'unknown',,\n        internal: false,\n        cidr: 'unknown' },\n  'Loopback Pseudo-Interface 1':\n    [ { address: '::1',\n        netmask: 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff',\n        family: 'IPv6',\n        mac: '00:00:00:00:00:00',\n        scopeid: 0,\n        internal: true,\n        cidr: '::1/128' },\n      { address: '127.0.0.1',\n        netmask: '255.0.0.0',\n        family: 'IPv4',\n        mac: '00:00:00:00:00:00',\n        internal: true,\n        cidr: '127.0.0.1/8' } ] }"},platform:function(){return"darwin"},release:function(){return Device.systemVersion()},setPriority:function(){return"error: it is not possible to set the priority of tasks"},tmpdir:function(){return FileManager.local().temporaryDirectory()},totalmem:function(){let e=Device.screenResolution();return{1776:"2000000000",2084:"2000000000",2620:"3000000000 or 4000000000",3000:"2000000000 or 3000000000",3561:"3000000000 or 4000000000",3584:"2000000000 or 3000000000",3702:"4000000000 or 6000000000",3780:"2000000000",3892:"2000000000",3930:"4000000000",4000:"4000000000",4056:"4000000000 or 6000000000",4062:"6000000000",4780:"4000000000 or 6000000000"}[(parseInt(e.height)+parseInt(e.width)).toString()]},type:function(){return"Darwin"},uptime:function(){return"error: it is not possible to get the system uptime"},userInfo:function(e){let n=Device.name(),o=FileManager.local().documentsDirectory();if(null!=e){if(null==e.encoding)return"error: encoding not found";if("buffer"==e.encoding)n=`<Buffer ${Array.from(n).map(e=>e.charCodeAt(0)<128?e.charCodeAt(0).toString(16):encodeURIComponent(e).replace(/\%/g,"").toLowerCase()).join("").match(/.{1,2}/g).join(" ")}>`,o=`<Buffer ${Array.from(o).map(e=>e.charCodeAt(0)<128?e.charCodeAt(0).toString(16):encodeURIComponent(e).replace(/\%/g,"").toLowerCase()).join("").match(/.{1,2}/g).join(" ")}>`;else if("utf8"!=e.encoding)return`error: '${e.encoding}' is not a valid encoding. possible values: buffer, utf8`}return`uid: -1\ngid: -1\nusername: ${n}\nhomedir: ${o}\nshell: null`},version:function(){return`${Device.model()}; CPU ${Device.model()} OS ${Device.systemVersion().replace(".","_")} like Mac OS X`}};module.exports.os=cmd;
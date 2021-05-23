# os-scriptable - MOVED TO https://github.com/Rhinozz/npm-scriptable
The 'os' module from Node.js, ported to Scriptable.

### Constants:

- EOL

End of line character.

- constants

OS constants - __does not work.__

### Functions:
- arch()

Get CPU architecture.

- cpus()

Get details of CPU cores - __not great, very hacky.__

- endianness()

Get CPU endianness.

- freemem()

Get free memory - __does not work.__

- getPriority(pid)

Get priority of item by PID - __does not work.__

- homedir()

Get the home directory.

- hostname()

Get device name.

- loadavg()

Get load averages - Unix-specific, set to [0, 0, 0] for non-Unix.

- networkInterfaces()

Get internet connections - does not return IPs besides 127.0.0.1, __basically unusable.__

- platform()

Get OS platform.

- release()

Get OS release version.

- setPriority(pid, priority)

Set prioriry of item by PID - __does not work.__

- tmpdir()

Get the temporary directory.

- totalmem()

Get total device memory - __not great, very hacky.__

- type()

Get OS kernel type.

- uptime()

Get OS uptime - __does not work.__

- userInfo(options)

Get user and device info.

- version()

Get kernel version.

## Usage

```js
const { os } = importModule('os.js');
// your code here, using os as you would in node
```

Feel free to optimize and improve, or post issues!

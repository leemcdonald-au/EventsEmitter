### EventsEmitter
A simple class extension to EventEmitter allowing quick and easy calling of an event with supplied parameters.

#### Usage
```javascript
// Import the library.
import EventsEmitter from '@leemcdonald-au/eventsemitter'

// Create the new EventsEmitter
const emitter = new EventsEmitter

// Assign an event.
emitter.on('myevent', (param1, param2) => { console.log(`I was given ${param1} and ${param2}`); return 'breakfast' })

// Call an event directly with provided params.
const result = emitter.call('myevent', 'some eggs', 'milk')
console.log(`So I had some ${result}`)

// Or in an async function for example.
import { readFile } from 'fs/promises'

emitter.on('ENOENT', error => { console.log("File does not exist."); return null })

async function init() {
    // Get a file that doesn't exist 'cause this is an error showcase.
    const key = await readFile('/path/to/my/soul', { encoding: 'utf8' }).catch(error => emitter.call(error.code, error))
    // Key file could not be read by readFile.
    if(!key) { console.log("Guess we'll have to proceed without it.") }
    // Key file was loaded.
    else { console.log("All went well. Nice.") }
}

init()
```

#### Support
- RVN: RPzCvWdmgqPTBA5qMQFuRPfNoJmvPnVzw8
- ARK: Aeh9tR1zjE34hBrYfSD1EMfL1cxpkaVJKb
- ETH: 0xd9979f482da58b4432d0f52eb456f7dd1f4897e6
- BTC: 1HzR3Vyu231E8SsGLUbNYSb92bn6MGLEaV
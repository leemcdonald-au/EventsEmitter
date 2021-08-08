// Grab the EventEmitter
import { EventEmitter } from 'events'

// Export the EventsEmitter object.
export default class EventsEmitter extends EventEmitter {
    // Call an event directly incase you need a return from it somewhere specific sometimes.
    call(event, ...args) {
        // Find wanted event.
        const wants = this._events[event]

        // If the event is found, return a call to it.
        if(wants) return wants(...args)

        // Event was not found. Emit an error and return null.
        else {
            // Anything expecting a value gets none. 
            this.emit('error', event, ...args)
            return null 
        }
    }
}
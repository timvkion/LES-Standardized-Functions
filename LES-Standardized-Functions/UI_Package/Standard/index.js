/** The simplest use of uibuilder client library
 * See the docs if the client doesn't start on its own.
 */

// Listen for incoming messages from Node-RED and action
// uibuilder.onChange('msg', (msg) => {
//     // do stuff with the incoming msg
// })

uibuilder.onChange('msg', (msg) =>{
    console.log(msg)
    if(msg.topic == 'clear')
    {
        document.getElementById('vehicles').innerHTML = ""
    }
})

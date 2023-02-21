let decryptMessage = (message, key) => {

    let A = "A".charCodeAt()//65
    let Z = "Z".charCodeAt()//90
    let space = " ".charCodeAt()
        
    let messageChar
    let newMessage = []

    for(let i = 0; i < message.length; i++){

        messageChar = message[i].charCodeAt()

        if(messageChar === space){
            
            newMessage.push(String.fromCharCode(messageChar))
        }

        if(messageChar >= A && messageChar <= Z){
            
            messageChar -= key

            if(messageChar < A){
                
                messageChar = messageChar + Z - A + 1
            }

            newMessage[i] = String.fromCharCode(messageChar)
        }
    }

    return newMessage
}

document.addEventListener('DOMContentLoaded', () => {
    
    
    let message = document.querySelector('#message')
    let decMessage = document.querySelector('#dec-message')

    message.addEventListener('input', () => {
        
        let key = Number(document.querySelector('#key').value)
        let decMessage = document.querySelector('#dec-message')

        if(key <= 0){
            
            message.value = null;
            alert("INVALID KEY! KEY CANNOT BE EQUAL TO ZERO OR LESS THAN ZERO!")
        }

        else if(key > 25){

            alert("KEY MUST BE ONLY LESS THAN 26!")
            message.value = null
        }

        else{

            let upperCaseMessage = message.value.toUpperCase()
            let text = decryptMessage(upperCaseMessage, key)

            let newMessage = text.join('')

            decMessage.value = newMessage
        }
    })

    document.querySelector('#clear-all').addEventListener('click', () => {

        document.querySelector('#key').value = null
        document.querySelector('#dec-message').value = null
        document.querySelector('#message').value = null
    })
})






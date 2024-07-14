const myEmojis = ['👨‍💻', '⛷', '🍲']                                     // emoji array - holds emoji data
const emojiInput = document.getElementById('emoji-input')                // get emoji-input element - gets value of input

// function renderEmojis populates and displays emoji-container element with emoji array contents 
function renderEmojis() {
    const emojiContainer = document.getElementById('emoji-container')    // get emoji-container element - to display emojis
    emojiContainer.innerHTML = ''                                        // set emoji-container to empty

    for (let i = 0; i < myEmojis.length; i++) {                          // iterate of emoji array             
        const emoji = document.createElement('span')                     // create HTML span tag using createElement function
        emoji.textContent = myEmojis[i]                                  // populate span tag content with all emojis
        emojiContainer.append(emoji)                                     // add emoji HTML content to emoji-container element
    }
}

renderEmojis()                                                           // display emoji array data to browser UI

const pushBtn = document.getElementById('push-btn')                      // get push-btn element - add emoji to end of array
pushBtn.addEventListener('click', () => {                                // click event listener for push-btn element
    if (emojiInput.value) {                                              // if emoji-input element value is present
        myEmojis.push(emojiInput.value)                                  // add emoji-input element value to emoji array using push function (end of array)
        emojiInput.value = ''                                            // clear emoji-input element value
        renderEmojis()                                                   // display emoji array data to browser UI
    }
})

const unshiftBtn = document.getElementById('unshift-btn')                // get unshift-btn element - add emoji to beginning of array
unshiftBtn.addEventListener('click', () => {                             // click event listener for unshift-btn element
    if (emojiInput.value) {                                              // if emoji-input element value is present
        myEmojis.unshift(emojiInput.value)                               // add emoji-input element value to emoji array using unshift function (beginning of array)
        emojiInput.value = ''                                            // clear emoji-input element value
        renderEmojis()                                                   // display emoji array data to browser UI
    }
})

const popBtn = document.getElementById('pop-btn')                        // get pop-btn element - remove emoji from end of array
popBtn.addEventListener('click', () => {                                 // click event listener for pop-btn element
    myEmojis.pop()                                                       // remove element from emoji array using pop function (beginning of array)
    renderEmojis()                                                       // display emoji array data to browser UI
})

const shiftBtn = document.getElementById('shift-btn')                    // get shift-btn element - remove emoji from beginning of array
shiftBtn.addEventListener('click', () => {                               // click event listener for shift-btn element
    myEmojis.shift()                                                     // remove element from emoji array using shift function (end of array)
    renderEmojis()                                                       // display emoji array data to browser UI
})
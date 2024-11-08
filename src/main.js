let clear_button = document.querySelector('#clear')
let clear_all_button = document.querySelector('#clear_all')
let display = document.querySelector('#display')
let user_input = ''
let equal_button_clicked = false

display.addEventListener('input', () => {
  alert('Jangan hapus readonlynya dong')
  display.value = ''
})

clear_all_button.style.visibility = 'hidden'

const dynamicFontSizeDisplay = (user_input) => {
  display.value = user_input

  let maxFontSize = 40;
  let minFontSize = 16;

  display.style.fontSize = maxFontSize + 'px';

  while (display.scrollWidth > display.clientWidth && parseInt(display.style.fontSize) > minFontSize) {
    display.style.fontSize = (parseInt(display.style.fontSize) - 1) + 'px';
  }
}

const addNumberToDisplay = (value) => {
  let resultDisplay = display.value
  user_input = resultDisplay
  if (resultDisplay.includes(',')) user_input = resultDisplay.replace(/,/g, '')

  dynamicFontSizeDisplay(user_input += value)
}

const mathOperation = () => {
  try {
    let value = display.value
    equal_button_clicked = true
    clear_button.style.visibility = 'hidden'
    clear_all_button.style.visibility = 'visible'
    
    if (value.includes('^')) value = value.replace('^', '**')
    if (value.includes('%')) value = value.replace('%', '/100')

    const process = eval(value)
    const format = process.toLocaleString('en-EN')

    return display.value = format
  } catch (err) {
    console.error(err.message)
    display.value = ''
    display.placeholder = 'err'
    setTimeout(() => {
      clearAll()
    }, 1000)
  }
}

const backspace = () => {
  if (!equal_button_clicked) {
    display.value = display.value.slice(0, -1)
  }
}

const clearAll = () => {
  clear_button.style.visibility = 'visible'
  clear_all_button.style.visibility = 'hidden'
  if (equal_button_clicked) {
    display.value = ''
    display.placeholder = '0'
    user_input = ''
    display.style.removeProperty('font-size')
    equal_button_clicked = false
  }
}

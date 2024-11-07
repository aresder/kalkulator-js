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
    equal_button_clicked = true
    clear_button.style.visibility = 'hidden'
    clear_all_button.style.visibility = 'visible'

    if (display.value.includes('%')) {
      const split = display.value.split('%')
      const num1 = split[0]
      const num2 = split[1].slice(1)
      const operator = split[1][0]
      const percent = num1 / 100
      const operation = Number(percent) + operator + Number(num2)
      const process = eval(operation)
      const format = process.toLocaleString('en-EN')

      return display.value = format
    }

    if (display.value.includes('^')) {
      const split = display.value.split('^')
      const num1 = Number(split[0])
      const num2 = Number(split[1])
      const process = Math.pow(num1, num2)
      const format = process.toLocaleString('en-EN')

      return display.value = format
    }

    const process = eval(display.value)
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

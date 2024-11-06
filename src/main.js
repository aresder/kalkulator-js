document.getElementById('clear_all').style.visibility = 'hidden'

let display = document.querySelector('#display')
let input = ''
let equal_button_clicked = false

const dinamisInput = (input) => {
  display.value = input

  let maxFontSize = 40;
  let minFontSize = 16;

  display.style.fontSize = maxFontSize + 'px';

  while (display.scrollWidth > display.clientWidth && parseInt(display.style.fontSize) > minFontSize) {
    display.style.fontSize = (parseInt(display.style.fontSize) - 1) + 'px';
  }
}

const tampilkanKeLayar = (value) => {
  let hasil = display.value
  input = hasil
  if (hasil.includes(',')) input = hasil.replace(/,/g, '')

  dinamisInput(input += value)
}

const operasiAritmatika = () => {
  try {
    equal_button_clicked = true
    document.getElementById('clear').style.visibility = 'hidden'
    document.getElementById('clear_all').style.visibility = 'visible'

    if (display.value.includes('%')) {
      const num1 = display.value.split('%')[0]
      const num2 = display.value.split('%')[1].slice(1)
      const operator = display.value.split('%')[1][0]
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
      reset()
    }, 1000)
  }
}

const spasiMundur = () => {
  if (!equal_button_clicked) {
    display.value = display.value.slice(0, -1)
  }
}

const reset = () => {
  document.getElementById('clear').style.visibility = 'visible'
  document.getElementById('clear_all').style.visibility = 'hidden'
  if (equal_button_clicked) {
    display.value = ''
    display.placeholder = '0'
    input = ''
    display.style.removeProperty('font-size')
    equal_button_clicked = false
  }
}

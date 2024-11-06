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

    if (display.value.includes('^')) {
      const pisahkan = display.value.split('^')
      const angka1 = Number(pisahkan[0])
      const angka2 = Number(pisahkan[1])
      const proses = Math.pow(angka1, angka2)
      const format = proses.toLocaleString('en-EN')

      return display.value = format
    }

    const proses = eval(display.value)
    const format = proses.toLocaleString('en-EN')

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

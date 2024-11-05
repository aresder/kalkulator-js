let layar_hasil = document.querySelector('#layar_hasil')
let input = ''

const dinamisInput = (input) => {
  layar_hasil.value = input

  let maxFontSize = 40;
  let minFontSize = 16;

  layar_hasil.style.fontSize = maxFontSize + 'px';

  while (layar_hasil.scrollWidth > layar_hasil.clientWidth && parseInt(layar_hasil.style.fontSize) > minFontSize) {
    layar_hasil.style.fontSize = (parseInt(layar_hasil.style.fontSize) - 1) + 'px';
  }
}

const tampilkanKeLayar = (value) => {
  let hasil = layar_hasil.value
  if (hasil.includes(',')) input = hasil.replace(/,/g, '')

  input += value
  dinamisInput(input)
}

const operasiAritmatika = () => {
  try {
    if (layar_hasil.value.includes('^')) {
      const pisahkan = layar_hasil.value.split('^')
      const angka1 = Number(pisahkan[0])
      const angka2 = Number(pisahkan[1])
      const proses = Math.pow(angka1, angka2)
      const format = proses.toLocaleString('en-EN')

      return layar_hasil.value = format
    }

    const proses = eval(layar_hasil.value)
    const format = proses.toLocaleString('en-EN')

    return layar_hasil.value = format
  } catch (err) {
    console.error(err.message)
    layar_hasil.value = 'err'
    setTimeout(() => {
      reset()
    }, 1000)
  }
}

const spasiMundur = () => {
  layar_hasil.value = layar_hasil.value.slice(0, -1)
}

const reset = () => {
  layar_hasil.value = ''
  input = ''
  layar_hasil.style.removeProperty('font-size')
}
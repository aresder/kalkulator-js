const tampilkanKeLayar = (value) => {
  let hasil = document.querySelector('#hasil').value

  if (hasil.includes(',')) {
    hasil = hasil.replace(/,/g, '')
  }

  if (hasil === '0' && value !== '0' && value !== '.') {
    hasil = hasil.replace(/^0+/, '')
  }

  return document.querySelector('#hasil').value = hasil + value
}

const operasiAritmatika = () => {
  const hasil = document.querySelector('#hasil').value
  const proses = eval(hasil)
  const format = proses.toLocaleString('en-EN')

  return document.querySelector('#hasil').value = format
}

const spasiMundur = () => {
  const hasil = document.querySelector('#hasil').value
  return document.querySelector('#hasil').value = hasil.slice(0, -1)
}

const reset = () => {
  return document.querySelector('#hasil').value = '0'
}

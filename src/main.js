let layar_hasil = document.querySelector('#layar_hasil')

const tampilkanKeLayar = (value) => {
  let hasil = layar_hasil.value

  if (hasil.includes(',')) hasil = hasil.replace(/,/g, '')
  if (hasil === '0' && value !== '0' && value !== '.') hasil = hasil.replace(/0/g, '')

  return layar_hasil.value = hasil + value
}

const operasiAritmatika = () => {
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
}

const spasiMundur = () => {
  return layar_hasil.value = layar_hasil.value.slice(0, -1)
}

const reset = () => {
  return layar_hasil.value = '0'
}

const card = document.querySelector('.card')

card.addEventListener('mousemove', event => {
  const y = event.offsetY - 180,
        xRotation = y / -360,
        x = event.offsetX - 180,
        yRotation = x / 360,
        brightness = (Math.abs(-360 + x + y) / 360) + .5;
  card.style.setProperty('--x-rotation', xRotation + 'rad')
  card.style.setProperty('--y-rotation', yRotation + 'rad')
  card.style.setProperty('--brightness', brightness)
})
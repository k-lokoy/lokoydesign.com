(function() {

  const gallery = document.querySelector('.gallery')

  if (!gallery) return

  const images  = gallery.querySelectorAll('img')
  const overlay = document.createElement('div')

  overlay.classList.add('overlay')

  const overlayImg = document.createElement('img')
  overlayImg.setAttribute('src', '/assets/branding/ld-logo.png')
  overlay.appendChild(overlayImg)
  
  overlay.addEventListener('click', function(e) {
    overlay.style.display = 'none'
  })

  document.body.appendChild(overlay)

  for (const img of images) {
    if (img.parentElement.href) continue

    img.addEventListener('click', function(e) {
      overlayImg.setAttribute('src', img.src)
      overlay.style.display = 'block'
    })
  }

})()
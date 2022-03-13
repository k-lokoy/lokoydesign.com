(function() {
  const body          = document.querySelector('body')
  const portfolioForm = document.getElementById('portfolio-form')
  const galleryItems  = document.querySelectorAll('.gallery-item')

  body.classList.remove('no-js')
  body.classList.add('js')

  function filterGallery(category = 'featured') {
    for (const galleryItem of galleryItems) {
      galleryItem.style.display = galleryItem.classList.contains(`gallery-item-${category}`) ? 'block' : 'none'
    }
  }

  portfolioForm.addEventListener('change', function(e) {
    filterGallery(e.target.value)
  })

  filterGallery()
})()
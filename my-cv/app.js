document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.getElementById('nav_toggle')
  const menuMobile = document.querySelector('.mobile__menu_list')
  const main = document.getElementById('main')
  const footer = document.getElementById('footer')

  // Check if elements exist to prevent errors
  if (!navToggle || !menuMobile) {
    console.log('Navigation elements not found')
    return
  }

  function preventScroll(event) {
    event.preventDefault()
    event.stopPropagation()
    return false
  }

  function closeMenu() {
    navToggle.classList.remove('is-active')
    menuMobile.classList.remove('menu__open')

    setTimeout(() => {
      if (main) main.style.overflow = 'auto'
      if (footer) footer.style.overflow = 'auto'
      window.removeEventListener('wheel', preventScroll)
      window.removeEventListener('touchmove', preventScroll)
    }, 300)
  }

  // Menu toggle functionality
  navToggle.addEventListener('click', function () {
    this.classList.toggle('is-active')
    menuMobile.classList.toggle('menu__open')

    if (menuMobile.classList.contains('menu__open')) {
      if (main) main.style.overflow = 'hidden'
      if (footer) footer.style.overflow = 'hidden'
      window.addEventListener('wheel', preventScroll, { passive: false })
      window.addEventListener('touchmove', preventScroll, { passive: false })
    } else {
      closeMenu()
    }
  })

  // Smooth scroll functionality for menu links
  const menuLinks = document.querySelectorAll('.nav__menu_link')

  menuLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault()

      // Close mobile menu if open
      if (menuMobile.classList.contains('menu__open')) {
        closeMenu()
      }

      // Smooth scroll to target section
      const targetId = link.getAttribute('href')
      const targetSection = document.querySelector(targetId)

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    })
  })

  // Close menu when clicking outside
  document.addEventListener('click', function (event) {
    if (
      !event.target.closest('.nav__menu') &&
      menuMobile.classList.contains('menu__open')
    ) {
      closeMenu()
    }
  })
})

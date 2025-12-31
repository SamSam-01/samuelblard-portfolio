
export const useMouseGradient = () => {
  const mainContainer = ref<HTMLElement | null>(null)

  const handleMouseMove = (event: MouseEvent) => {
    // Vérification si l'appareil est mobile (largeur <= 768px)
    if (window.matchMedia('(max-width: 768px)').matches) {
      return // Ne rien faire si c'est un appareil mobile
    }

    const { clientX, clientY } = event
    const { innerWidth, scrollY } = window

    const xPercent = (clientX / innerWidth) * 100
    const yPercent = ((clientY + scrollY) / document.documentElement.scrollHeight) * 100

    if (mainContainer.value) {
      mainContainer.value.style.setProperty('--mouse-x', `${xPercent}%`)
      mainContainer.value.style.setProperty('--mouse-y', `${yPercent}%`)
    }
  }

  onMounted(() => {
    mainContainer.value = document.querySelector('.main-container')
    window.addEventListener('mousemove', handleMouseMove)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('mousemove', handleMouseMove)
    mainContainer.value = null
  })

  return {
    handleMouseMove,
    mainContainer
  }
}

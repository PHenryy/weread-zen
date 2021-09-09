hideElement('.readerTopBar')
hideElement('.readerControls')

toggleFullScreen()

function hideElement(className) {
  const $el = document.querySelector(className)
  $el.style.display = 'none'
}

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen()
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen()
    }
  }
}

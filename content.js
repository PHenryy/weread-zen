hideElement('.readerTopBar')
hideElement('.readerControls')
changeFont()
// toggleFullScreen()

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

// 改变宽度
function changeContentWidth() {
  const item = document.querySelector(".readerContent .app_content");
  const currentValue = getCurrentMaxWidth(item);
  item.style['max-width'] = currentValue + 1 + 'px';
  const myEvent = new Event('resize');
  window.dispatchEvent(myEvent)
}

function getCurrentMaxWidth(element) {
  let currentValue = window.getComputedStyle(element).maxWidth;
  currentValue = currentValue.substring(0, currentValue.indexOf('px'));
  currentValue = parseInt(currentValue);
  return currentValue;
}

// 修改字体
function changeFont() {
  const styles = `
    * {
      font-family: 'TsangerJinKai01-9128 W02' !important;;
    }
  `
  const styleSheet = document.createElement('style')
  styleSheet.type = 'text/css'
  styleSheet.innerText = styles
  document.head.appendChild(styleSheet)
  changeContentWidth()
}

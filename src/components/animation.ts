// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const animatef = (obj: any, initVal: any, lastVal: any, duration: any) => {
  let startTime: any = null

  const step = (currentTime: any) => {
    if (!startTime) {
      startTime = currentTime
    }

    const progress = Math.min((currentTime - startTime) / duration, 1)

    obj.innerHTML = Math.floor(progress * (lastVal - initVal) + initVal)

    if (progress < 1) {
      window.requestAnimationFrame(step)
    } else {
      window.cancelAnimationFrame(window.requestAnimationFrame(step))
      if (obj.innerHTML !== '0') {
        obj.innerHTML = obj.innerHTML + '+'
      }
    }
  }

  window.requestAnimationFrame(step)
}
export default animatef

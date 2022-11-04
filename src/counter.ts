export function setupCounter(element: HTMLElement): void {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 2))
  setCounter(0)
}

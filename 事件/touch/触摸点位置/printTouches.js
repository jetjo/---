function printTouch(eventName) {
  window.addEventListener('load', () => {
    const div = document.querySelector('div');
    const p = document.querySelector('p');
    const printTouch = touches => {
        const identifiers = [...touches].map(e => e.identifier)
        const span = document.createElement('span');
        span.textContent = identifiers.join(', ') + ' ';
        p.appendChild(span);
    }
    div.addEventListener(eventName, (e) => {
        printTouch(e.changedTouches)
        printTouch(e.targetTouches)
        printTouch(e.touches)
    })
  })
}

export default printTouch;

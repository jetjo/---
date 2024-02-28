let i = 0

const log = (e, type, id) => {
  console.log(++i, `[${id}-${type}]`, `是${id}自身的事件?: ${e.currentTarget === e.target}`) //, e)
}
const warn = (e, type, id) => {
  console.warn(++i, `[${id}-${type}]`, `是${id}自身的事件?: ${e.currentTarget === e.target}`) //, e)
}
const addListenerTo = id => {
  const el = document.getElementById(id)
  el.addEventListener('mouseover', e => log(e, 'over', id))
  el.addEventListener('mouseenter', e => warn(e, 'enter', id))
}
// prettier-ignore
addListenerTo('b1'), addListenerTo('b2'), addListenerTo('b3');

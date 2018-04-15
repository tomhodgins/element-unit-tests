function ew(tag, number) {

  return tag.offsetWidth / 100 * number

}

function eh(tag, number) {

  return tag.offsetHeight / 100 * number

}

function emin(tag, number) {

  return Math.min(tag.offsetWidth, tag.offsetHeight) / 100 * number

}

function emax(tag, number) {

  return Math.max(tag.offsetWidth, tag.offsetHeight) / 100 * number

}

module.exports = {ew, eh, emin, emax}
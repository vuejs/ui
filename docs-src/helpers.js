export function versionCompare (v1, v2, options) {
  const lexicographical = options && options.lexicographical
  const zeroExtend = options && options.zeroExtend
  let v1parts = v1.split('.')
  let v2parts = v2.split('.')

  function isValidPart (x) {
    return (lexicographical ? /^\d+[A-Za-z]*$/ : /^\d+$/).test(x)
  }

  if (!v1parts.every(isValidPart) || !v2parts.every(isValidPart)) {
    return NaN
  }

  if (zeroExtend) {
    while (v1parts.length < v2parts.length) v1parts.push('0')
    while (v2parts.length < v1parts.length) v2parts.push('0')
  }

  if (!lexicographical) {
    v1parts = v1parts.map(Number)
    v2parts = v2parts.map(Number)
  }

  for (let i = 0; i < v1parts.length; ++i) {
    if (v2parts.length === i) {
      return 1
    }

    if (v1parts[i] === v2parts[i]) {

    } else if (v1parts[i] > v2parts[i]) {
      return 1
    } else {
      return -1
    }
  }

  if (v1parts.length !== v2parts.length) {
    return -1
  }

  return 0
}

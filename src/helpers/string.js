/* eslint-disable import/prefer-default-export */

function pluralWord(validator, singular, plural = `${singular}s`) {
  return validator > 1 ? plural : singular;
}

export { pluralWord };

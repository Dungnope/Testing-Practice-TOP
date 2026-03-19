export function capitalize(string) {
  let firstCharacter = string[0];

  if (string === "" || string === null || string === undefined) return string;
  return firstCharacter.toUpperCase() + string.slice(1).toLowerCase();
}

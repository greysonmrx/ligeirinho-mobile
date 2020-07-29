export default function isEmpty(object: object): boolean {
  let empty = true;

  Object.keys(object).forEach(key => {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      empty = false;
    }
  });

  return empty;
}

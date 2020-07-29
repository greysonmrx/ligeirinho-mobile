export default function getFirstAndLastName(fullName: string): string {
  if (fullName.split(' ').length > 2) {
    return `${fullName.split(' ')[0]} ${fullName.split(' ')[1]}`;
  }

  return fullName;
}

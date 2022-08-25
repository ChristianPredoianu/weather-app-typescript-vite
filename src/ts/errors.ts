export function showUserPositionError(err: string) {
  const error = document.getElementById('error') as HTMLParagraphElement;
  error.style.display = 'block';
  error.innerText = `${err}, Search for a city`;
}

interface SetInputErrorParams {
  display: string;
  errorMsg: string;
}

const userPositionError = document.getElementById(
  'error'
) as HTMLParagraphElement;

export let isInputError = false;

export function showUserPositionError(err: string) {
  userPositionError.style.display = 'block';
  userPositionError.innerText = `${err}, Search for a city`;
}

export function removeUserPositionError() {
  userPositionError.style.display = 'none';
}

export function setInputError(msg: SetInputErrorParams) {
  const inputError = document.getElementById(
    'input-error'
  ) as HTMLParagraphElement;
  inputError.style.display = msg.display;
  inputError.innerText = msg.errorMsg;

  if (inputError.innerText !== '') isInputError = true;
}

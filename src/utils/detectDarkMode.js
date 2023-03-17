export default function deteckDarkMode() {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return "dark";
  }

  return "light";
}

//условие определяет включена ли тёмная тема у пользователя в системе windows
// если да, то сайт сразу включается с тёмной темой

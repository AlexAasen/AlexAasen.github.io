export const getRandom = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
}

export const mathRadians = (degrees) => {
  return degrees * Math.PI / 180;
}

export const isEdgeOrIE11 = typeof window !== "undefined" && !!window.MSInputMethodContext

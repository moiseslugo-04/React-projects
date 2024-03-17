export function saveStorage(newBoard, newTrun, pointsX, pointsO) {
  window.localStorage.setItem("board", JSON.stringify(newBoard));
  window.localStorage.setItem("turn", newTrun);
  window.localStorage.setItem("pointsX", pointsX);
  window.localStorage.setItem("pointsO", pointsO);
}
export function clearStorege() {
  window.localStorage.removeItem("board");
  window.localStorage.removeItem("turn");
  window.localStorage.removeItem("pointsX");
  window.localStorage.removeItem("pointsO");
}

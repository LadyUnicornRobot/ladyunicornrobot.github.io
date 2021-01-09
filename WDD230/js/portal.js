const options = {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
};
document.getElementById(
  "currentdate"
).textContent = new Date().toLocaleDateString("en-US", options);

document.getElementById("lastModified").innerHTML = document.lastModified

document.getElementById("copyright").innerHTML = "&copy;"
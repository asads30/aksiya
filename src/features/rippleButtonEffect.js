export default function createRipple(e) {
  // Create span element
  let ripple = document.createElement("span");
  // Add ripple class to span
  ripple.classList.add("ripple");
  // Add span to the button
  this.appendChild(ripple);
  // Get position of X
  let x = e.clientX - e.target.offsetLeft;
  // Get position of Y
  let y = e.clientY - e.target.offsetTop;
  // Position the span element
  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;
  // ripple.style.position = "absolute";
  // ripple.style.borderRadius = "50%";
  // ripple.style.backgroundColor = `rgba(0, 0, 0, 0.3)`;
  // ripple.style.width = "100px";
  // ripple.style.width = "100px";
  // ripple.style.marginTop = "-50px";
  // ripple.style.marginLeft = "-50px";
  // ripple.style.animationName = "ripple";
  // ripple.style.animationDuration = "1s";
  // ripple.style.opacity = "0";
  // Remove span after 0.3s
  // ripple.remove();
}

document.addEventListener("DOMContentLoaded", function() {
  const toggleSwitch = document.getElementById("toggleSwitch");

  toggleSwitch.addEventListener("change", function() {
      updateSeconds();
  });

  function updateSeconds() {
      const now = new Date();
      const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
      let seconds;

      if (toggleSwitch.checked) {
          seconds = Math.floor((now - new Date(now.getFullYear(), now.getMonth(), now.getDate())) / 1000);
      } else {
          seconds = Math.floor((endOfDay - now) / 1000);
      }

      document.getElementById("remainingSeconds").innerText = `${seconds} seconds ${toggleSwitch.checked ? "elapsed" : "remaining"} today`;
  }

  updateSeconds();
});

module.exports = (Franz, options) => {
  function getMessages() {
    const count = document.querySelectorAll('.unread').length-1;
    Franz.setBadge(count);
  }

  Franz.loop(getMessages);
}

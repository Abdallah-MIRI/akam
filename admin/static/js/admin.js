////////////
// Event Link Nav Click Active
////////////
let linkNav = document.querySelectorAll('.link-nav');

for (let index = 0; index < linkNav.length; index++) {
  const element = linkNav[index];
  
  element.addEventListener('click', () => {
    element.classList.toggle('active');
  })
}

////////////
// Event Button Click Show Profile list
////////////
let btnProfile = document.getElementById('btn-profile');
let listProfile = document.getElementById('list-profile');

btnProfile.addEventListener('click', (event) => {
  
  if (event.target == window) {
    listProfile.classList.remove('show');
  }
  listProfile.classList.toggle('show');
  
})

////////////
// Event Notification Show
// Event Click Close Notification Link
////////////
let notification = document.getElementById('notification');
let listNotification = document.querySelectorAll('.link-notification');
let iconNotification = document.querySelectorAll('.icon-close');

notification.addEventListener('click', () => {
  notification.classList.toggle('show');
})

for (let index = 0; index < iconNotification.length; index++) {
  const icon = iconNotification[index];
  
  // for (let a = 0; a < listNotification.length; a++) {
  //   const link = listNotification[a];
  
  //   icon.addEventListener('click', () => {
  //     icon.parentElement.remove(link);
  //   })

  // }

  icon.addEventListener('click', () => {
    icon.parentElement.remove('list-notification');
  })

}

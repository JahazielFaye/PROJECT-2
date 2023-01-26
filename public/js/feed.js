// dropdown functionality
function dropDown() {
    document.getelementbyid("#").classlist.toggle("show")
}
// close dropdown if clicked outside of box
window.onclick = function(event) {
    if (!event.target.matches('.dropDownBtn')) {
        var dropDown = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropDown.length; i++) {
            var open = dropDown[i];
            if (open.classList.contains('show')) {
                open.classList.remove('show');
            }
        }
    }
};

// const test = async (event) => {
//     event.preventDefault();
//     const session = await fetch ('api/users/session');
//     console.log('test session', session)
//     alert('test');
// }
// const newPostHandler = async (event) => {
//     event.preventDefault();
//     event.stopPropagation();
//   console.log(document.cookie);
//     const name = document.querySelector('#postName').value.trim();
//     const description = document.querySelector('#postDescription').value.trim();
//     const website = document.querySelector('#postWebsite').value.trim();
//     if (name && description && website) {
//         const session = await fetch ('api/users/session');
//         console.log(session);
//         const user = await fetch ('api/users/user/email');
//       const response = await fetch(`api/users/submissions/user/${user.id}`, {
//         method: 'POST',
//         body: JSON.stringify({ name, description, website }),
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
//   console.log(response);
//       if (response.ok) {
//         // document.location.replace('/profile');
//       } else {
//         alert('Failed to create new post');
//       }
//     }
//   };
  
//   document
//     .querySelector('#postForm')
//     .addEventListener('submit', newPostHandler);

//     document
//     .querySelector('#testBtn')
//     .addEventListener('click', test);
  

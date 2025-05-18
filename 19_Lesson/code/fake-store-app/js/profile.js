
const fullNameElem = document.getElementById("full-name");
const avatarImg = document.getElementById("avatar");
const emailElement = document.getElementById("email");

async function fetchProfile() {
  const accessToken = localStorage.getItem("access_token");

  const res = await fetch("https://api.escuelajs.co/api/v1/auth/profile", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const user = await res.json();

     console.log(user);

  // const { avatar, email, name } = user;

  // fullNameElem.innerText = name;
  // avatar.src = avatar;
  // emailElement.innerText = email;
}

fetchProfile();
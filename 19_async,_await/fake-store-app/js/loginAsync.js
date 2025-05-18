// then --> await

// await только внутри функций, который являются всинхронными
// при объявлении укажем слово async

const form = document.getElementById("login-form");
const errElement = document.getElementById("login-form-error");

async function fetchLogin() {
  try {
    const credentials = {
      email: form.elements["email"].value,
      password: form.elements["password"].value,
    };

    const res = await fetch("https://api.escuelajs.co/api/v1/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });

    if (!res.ok) {
      if (res.status === 401) {
        throw new Error("Wrong password or email");
      }
      throw new Error("Login error");
    }

    const obj = await res.json();

    window.location.href = "/profile";
  } catch (err) {
    errElement.innerText = err.message;
  }
}

function loginHandler(e) {
  e.preventDefault();
  fetchLogin();
}

form.addEventListener("submit", loginHandler);

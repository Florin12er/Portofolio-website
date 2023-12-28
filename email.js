const clearSessionStorageButton = document.getElementById("correct");
const clickCountKey = "clickCount";
let clickCount = parseInt(localStorage.getItem(clickCountKey)) || 0;

emailjs.init("7ZHgA1acZtrhvTZ8K");

updateButtonState();

clearSessionStorageButton.addEventListener("click", () => {
  clickCount++;
  localStorage.setItem(clickCountKey, clickCount);

  if (clickCount >= 5) {
    disableButtonAndAlert();
  }

  sessionStorage.clear();
});

function updateButtonState() {
  if (clickCount >= 5) {
    disableButtonAndAlert();
  }
}

function disableButtonAndAlert() {
  clearSessionStorageButton.disabled = true;
  alert("Do not spam emails");
}

export default function sendEmail() {
  const emailSentKey = "emailSent";
  const emailSent = sessionStorage.getItem(emailSentKey);

  if (emailSent) {
    alert(
      "Email has already been sent. You can resend by pressing start over if needed.",
    );
    return;
  }

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const serviceid = "service_ociqo3b";
  const templeteid = "template_65k98eo";

  const emailparams = {
    name,
    email,
    message,
  };

  if (!name || !email || !message) {
    alert("Please fill out all required fields: name, email, and message");
    return;
  }

  emailjs
    .send(serviceid, templeteid, emailparams)
    .then((response) => {
      console.log(response);
      alert("Your email has been sent successfully");
      sessionStorage.setItem(emailSentKey, "true");
    })
    .catch((error) => {
      console.error(error);
    });
}

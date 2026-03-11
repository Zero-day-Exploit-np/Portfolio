const GITHUB_CONFIG = {
  owner: "Zero-day-Exploit-np",
  repo: "Portfolio",
  token: "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",
};

document
  .getElementById("contactForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    const status = document.getElementById("formStatus");

    try {
      const response = await fetch(
        `https://api.github.com/repos/${GITHUB_CONFIG.owner}/${GITHUB_CONFIG.repo}/issues`,
        {
          method: "POST",
          headers: {
            Authorization: `token ${GITHUB_CONFIG.token}`,
            Accept: "application/vnd.github+json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: `Contact: ${subject}`,
            body: `Name: ${name}

Email: ${email}

Message:
${message}`,
          }),
        },
      );

      if (response.ok) {
        status.innerHTML = "✅ Message sent successfully!";
        document.getElementById("contactForm").reset();
      } else {
        status.innerHTML = "❌ Failed to send message.";
      }
    } catch (error) {
      status.innerHTML = "❌ Error sending message.";
    }
  });

document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var formData = {
        teamName: document.getElementById("teamName").value,
        captainName: document.getElementById("captainName").value,
        captainEmail: document.getElementById("captainEmail").value,
        captainPhone: document.getElementById("captainPhone").value,
        member1: document.getElementById("member1").value,
        member2: document.getElementById("member2").value,
        member3: document.getElementById("member3").value
    };

    fetch("https://script.google.com/macros/s/AKfycbyBd3pbEbq1Ww7oWzAnzNe-uc6Djpiuk-NMJt00_p672_9Der8lPOtKZB11xPTnIpho/exec", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
        mode: "no-cors"
    })
    .then(response => {
        document.getElementById("status").innerText = "Registration successful!";
        document.getElementById("registrationForm").reset();
    })
    .catch(error => {
        document.getElementById("status").innerText = "Error submitting form.";
    });
});
function generateResume() {
    document.getElementById("preview-name").innerText = document.getElementById("name").value;
    document.getElementById("preview-email").innerText = "Email: " + document.getElementById("email").value;
    document.getElementById("preview-phone").innerText = "Phone: " + document.getElementById("phone").value;
    // document.getElementById("preview-age").innerText = "Phone: " + document.getElementById("age").value;
    // document.getElementById("preview-dob").innerText = "Phone: " + document.getElementById("dob").value;
    // document.getElementById("preview-address").innerText = "Phone: " + document.getElementById("address").value;
    // document.getElementById("preview-city").innerText = "Phone: " + document.getElementById("city").value;
    // document.getElementById("preview-state").innerText = "Phone: " + document.getElementById("state").value;

    let skillsInput = document.getElementById("skills").value.split(",");
    let skillsList = document.getElementById("preview-skills");
    skillsList.innerHTML = "";
    
    skillsInput.forEach(skill => {
        let li = document.createElement("li");
        li.innerText = skill.trim();
        skillsList.appendChild(li);
    });
}

function downloadPDF() {
    window.print(); 
}
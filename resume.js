document.addEventListener("DOMContentLoaded",()=>{
    document.querySelector("#name").textContent="Mansha Soni";
    document.querySelector("#title").textContent="Full Stack Developer";
    document.querySelector("#about-text").textContent ="I'm a passionate Full Stack Developer with experience in building dynamic and responsive web applications.";
    document.querySelector("#skills-list").innerHTML = `
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript </li>
        
    `;
    document.querySelector("#job-title").textContent = "Senior Developer";
    document.querySelector("#company-name").textContent = "Had done project of Web Development";
    document.querySelector("#job-desc").textContent="Led a team to build scalable, high-performance web applications.";
    document.querySelector("#email").textContent="manshasoni23@gmail.com";
    document.querySelector("#phone").textContent="+1234567890";
});
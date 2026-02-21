const API = "http://localhost:5000/api";

// ================= REGISTER =================
async function register() {
    const username = document.getElementById("regUsername").value;
    const email = document.getElementById("regEmail").value;
    const password = document.getElementById("regPassword").value;

    const res = await fetch(API + "/auth/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, email, password })
    });

    const data = await res.json();
    alert("Registered Successfully");
}

// ================= LOGIN =================
async function login() {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    const res = await fetch(API + "/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (!data.token) {
        alert("Login failed");
        return;
    }

    localStorage.setItem("token", data.token);
    window.location.href = "dashboard.html";
}

// ================= ADD LINK =================
async function addLink() {
    const title = document.getElementById("title").value;
    const url = document.getElementById("url").value;

    const token = localStorage.getItem("token");
    const payload = JSON.parse(atob(token.split('.')[1]));
    const userId = payload.id;

    await fetch(API + "/links", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ userId, title, url })
    });

    loadLinks();
}

// ================= LOAD LINKS =================
async function loadLinks() {
    const token = localStorage.getItem("token");
    if (!token) {
        window.location.href = "index.html";
        return;
    }

    const payload = JSON.parse(atob(token.split('.')[1]));
    const userId = payload.id;

    const res = await fetch(API + "/links/" + userId);
    const links = await res.json();

    const list = document.getElementById("linkList");
    if (!list) return;

    list.innerHTML = "";

    links.forEach(link => {
        const li = document.createElement("li");

        li.innerHTML =
            "<a href='" + link.url + "' target='_blank'>" + link.title + "</a>" +
            " <button onclick=\"deleteLink('" + link._id + "')\">Delete</button>";

        list.appendChild(li);
    });
}

// ================= DELETE =================
async function deleteLink(id) {
    await fetch(API + "/links/" + id, {
        method: "DELETE"
    });

    loadLinks();
}

// ================= LOGOUT =================
function logout() {
    localStorage.removeItem("token");
    window.location.href = "index.html";
}

// ================= TAB SWITCH =================
function showRegister() {
    document.getElementById("registerBox").style.display = "block";
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("regTab").classList.add("active");
    document.getElementById("loginTab").classList.remove("active");
}

function showLogin() {
    document.getElementById("registerBox").style.display = "none";
    document.getElementById("loginBox").style.display = "block";
    document.getElementById("loginTab").classList.add("active");
    document.getElementById("regTab").classList.remove("active");
}

// Load links automatically if on dashboard
if (window.location.pathname.includes("dashboard.html")) {
    loadLinks();
}
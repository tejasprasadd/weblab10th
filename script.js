// Native AJAX Without jQuery
document.addEventListener("DOMContentLoaded", function () {
  // Fetch Text File (No jQuery)
  document.getElementById("fetch-text").addEventListener("click", () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "textfile.txt", true);
    xhr.onload = () => {
      document.getElementById("text-content").innerText =
        xhr.status === 200 ? xhr.responseText : "Error fetching text file.";
    };
    xhr.onerror = () =>
      (document.getElementById("text-content").innerText = "Request failed.");
    xhr.send();
  });

  // Fetch Text File (With jQuery)
  document.getElementById("fetch-text-jquery").addEventListener("click", () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "textfile.txt", true);
    xhr.onload = () => {
      document.getElementById("text-content-jquery").innerText =
        xhr.status === 200 ? xhr.responseText : "Error fetching text file.";
    };
    xhr.onerror = () =>
      (document.getElementById("text-content-jquery").innerText =
        "Request failed.");
    xhr.send();
  });
});

// AJAX With jQuery
$(document).ready(function () {
  $("#fetch-json").click(() => {
    $.getJSON("data.json", (data) => {
      $("#json-content").html(
        `<strong>Name:</strong> ${data.name}<br><strong>Age:</strong> ${data.age}<br><strong>Email:</strong> ${data.email}`
      );
    }).fail(() => {
      $("#json-content").text("Error fetching JSON data.");
    });
  });
});

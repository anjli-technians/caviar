function toggleMyDiv() {
        const div = document.getElementById("toggle_section");
        if (div.style.display === "none" || div.style.display === "") {
            div.style.display = "block";

        }else {
            div.style.display = "none" ;
        }
    }
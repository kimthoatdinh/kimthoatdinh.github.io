function dropdown() {
    const dropper = document.getElementById("dropper");
    const droppet = document.getElementById("droppet");

    if (dropper.style.backgroundColor == "rgb(0, 20, 58)") {
        dropper.style.backgroundColor = "rgb(15, 0, 58)";
        droppet.style.display = "grid";
    } else {
        dropper.style.backgroundColor = "rgb(0, 20, 58)";
        droppet.style.display = "none";
    };
};
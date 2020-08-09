function confirmOrder() {

    if (window.confirm("Are you sure want to book your event ? ")) {
        window.location = "confirm.html"
    } else {
        die();
    }
}
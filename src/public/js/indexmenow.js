$(document).ready(function() {
    $("#urlslist").keydown(function(ev) {
        let count = ev.target.value.split(/\r*\n/).filter(function(val, key) {
            return val !== ""
        }).length;
        if (ev.keyCode == 13) {
            if (count >= linkLimit) {
                ev.preventDefault()
            }
        }
    })
})
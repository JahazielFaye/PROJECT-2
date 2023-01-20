// dropdown functionality
function dropDown() {
    document.getelementbyid("#").classlist.toggle("show")
}
// close dropdown if clicked outside of box
window.onclick = function(event) {
    if (!event.target.matches('.dropDownBtn')) {
        var dropDown = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropDown.length; i++) {
            var open = dropDown[i];
            if (open.classList.contains('show')) {
                open.classList.remove('show');
            }
        }
    }
};
// 


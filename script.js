var form = document.getElementById("myForm");
form.addEventListener("submit", function(e)
{
    e.preventDefault();
    var pincode = document.getElementById("address").value;
    console.log(pincode);
})

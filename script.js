
var restoreFiles = function () {

        var img_input = document.getElementById("img_input")
        var input_Files = img_input.files;
        var btn = document.querySelector(".text-btn");

        for (let i = 0; i < input_Files.length; i++) {
            var name_File = input_Files.item(i).name;
            btn.innerHTML = name_File;

        }

}
    //Any change on element we call the function restoreFiles
    img_input.onchange = restoreFiles; 

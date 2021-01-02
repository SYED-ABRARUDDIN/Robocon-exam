function choose_exam(){
    
    var branch = document.forms["info"]["branch"].value;
    var year = document.forms["info"]["year"].value;
    var set = ["alpha","beta"];
    var randomNumber = Math.floor(Math.random()*set.length);
    var filename = branch + "/" + branch + "-" + year + "-" + set[randomNumber] + ".html";
    document.getElementById("info").action = filename;
}
$(document).ready(function(){
    
//    document.querySelector("#file1").style.display = "block";
//    document.querySelector("#file2").style.display = "none";
//    document.querySelector("#file3").style.display = "none";
    
    //FILE 1
    $('#intronext').click(function(){
        document.querySelector("#file1").style.display = "block";
        document.querySelector("#intro").style.display = "none";
    });
    
    //FILE 1
    $('#file1next').click(function(){
        document.querySelector("#file2").style.display = "block";
        document.querySelector("#file1").style.display = "none";
    });
     $('#file1prev').click(function(){
        document.querySelector("#intro").style.display = "block";
        document.querySelector("#file1").style.display = "none";
    });
    
    //FILE 2
    $('#file2next').click(function(){
        document.querySelector("#file-A").style.display = "block";
        document.querySelector("#file2").style.display = "none";
    });
    
     $('#file2prev').click(function(){
        document.querySelector("#file1").style.display = "block";
        document.querySelector("#file2").style.display = "none";
    });
    
      //FILE A
    $('#file-Anext').click(function(){
        document.querySelector("#file3").style.display = "block";
        document.querySelector("#file-A").style.display = "none";
    });
    
     $('#file-Aprev').click(function(){
        document.querySelector("#file2").style.display = "block";
        document.querySelector("#file-A").style.display = "none";
    });
    
    //FILE 3
    $('#file3next').click(function(){
        document.querySelector("#file4").style.display = "block";
        document.querySelector("#file3").style.display = "none";
    });
    
     $('#file3prev').click(function(){
        document.querySelector("#file-A").style.display = "block";
        document.querySelector("#file3").style.display = "none";
    });
    
    //FILE 4
    $('#file4next').click(function(){
        document.querySelector("#file5").style.display = "block";
        document.querySelector("#file4").style.display = "none";
    });
    
     $('#file4prev').click(function(){
        document.querySelector("#file-A").style.display = "block";
        document.querySelector("#file4").style.display = "none";
    });
    
    //FILE 5
    $('#file5next').click(function(){
        document.querySelector("#file6").style.display = "block";
        document.querySelector("#file5").style.display = "none";
    });
    
     $('#file5prev').click(function(){
        document.querySelector("#file4").style.display = "block";
        document.querySelector("#file5").style.display = "none";
    });
    
    //FILE 6
    $('#file6next').click(function(){
        document.querySelector("#file7").style.display = "block";
        document.querySelector("#file6").style.display = "none";
    });
    
     $('#file6prev').click(function(){
        document.querySelector("#file5").style.display = "block";
        document.querySelector("#file6").style.display = "none";
    });
    
    //FILE 7
    $('#file7next').click(function(){
        document.querySelector("#filea").style.display = "block";
        document.querySelector("#file7").style.display = "none";
    });
    
     $('#file7prev').click(function(){
        document.querySelector("#file6").style.display = "block";
        document.querySelector("#file7").style.display = "none";
    });
    
    
    //FILE a
    $('#fileanext').click(function(){
        document.querySelector("#fileb").style.display = "block";
        document.querySelector("#filea").style.display = "none";
    });
    
     $('#fileaprev').click(function(){
        document.querySelector("#file7").style.display = "block";
        document.querySelector("#filea").style.display = "none";
    });
    
    //FILE b
    $('#filebnext').click(function(){
        document.querySelector("#filec").style.display = "block";
        document.querySelector("#fileb").style.display = "none";
    });
    
     $('#filebprev').click(function(){
        document.querySelector("#filea").style.display = "block";
        document.querySelector("#fileb").style.display = "none";
    });
    
    //FILE c
    $('#filecnext').click(function(){
        document.querySelector("#filed").style.display = "block";
        document.querySelector("#filec").style.display = "none";
    });
    
     $('#filecprev').click(function(){
        document.querySelector("#fileb").style.display = "block";
        document.querySelector("#filec").style.display = "none";
    });
    
    //FILE d
    $('#filednext').click(function(){
        document.querySelector("#filee").style.display = "block";
        document.querySelector("#filed").style.display = "none";
    });
    
     $('#filedprev').click(function(){
        document.querySelector("#filec").style.display = "block";
        document.querySelector("#filed").style.display = "none";
    });
    
    //FILE e
     $('#fileeprev').click(function(){
        document.querySelector("#filed").style.display = "block";
        document.querySelector("#filee").style.display = "none";
    });
});
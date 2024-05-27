function boardgamePlayedNum(){
    document.getElementById("new_yes").addEventListener('change', function() {
        if (this.checked) {
            formDisplay("boardgame_played_num", "block"); 
        } 
    }); 
    document.getElementById("new_no").addEventListener('change', function() {
        if (this.checked) {
            formDisplay("boardgame_played_num", "none");  
        }
    });
}

function expansion_check(){

    document.getElementById("exponasion").addEventListener("change", function() {
        if (this.checked) {
            formDisplay("expnsion_of_boardgame", "block"); 
        } 
    });
    document.getElementById("boardgame").addEventListener('change', function() {
            if (this.checked) {
            formDisplay("expnsion_of_boardgame", "none");  
            }
    });
}

boardgamePlayedNum();
expansion_check();

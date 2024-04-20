function remove_hide (p_hide) {
    let v_html = document.getElementById(p_hide);

    v_html.classList.remove("hide");
}

function add_hide (p_add_hide) {

    for (let i; i < p_add_hide.length; i++)
    {
        let v_html = document.getElementById(p_add_hide[i]);

        v_html.classList.add("hide");
    }
}

function addNewListElement(){
    null;
}


function caller(){

    document.getElementById("newListGenerate").addEventListener("click", (event) => {remove_hide("existed_list_adder");
                                                 add_hide(["oldListUpload","oldListUpdate"]);});

    document.getElementById("oldListUpload").addEventListener("click", (event) => {remove_hide("new_list_generate");
                                                 add_hide(["newListGenerate","oldListUpdate"]);});

    document.getElementById("oldListUpdate").addEventListener("click", (event) => {remove_hide("existed_list_update");
                                                 add_hide(["newListGenerate","oldListUpload"]);});
    
}

caller();
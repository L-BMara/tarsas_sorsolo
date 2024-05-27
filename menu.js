function formDisplay (p_form_id, p_display){
    let v_html = document.getElementById(p_form_id);

    v_html.style.display=p_display;
}

function checkboxChecker() {
    document.getElementById("newListGenerate").addEventListener('change', function() {
        if (this.checked) {
            formDisplay("new_list_generate", "block");
            formDisplay("existed_list_update", "none");
            formDisplay("existed_list_adder", "none");
        } else {
            formDisplay("new_list_generate", "none");
        }
    });

    document.getElementById("oldListUpload").addEventListener('change', function() {
        if (this.checked) {
            formDisplay("existed_list_adder", "block");
            formDisplay("new_list_generate", "none");
            formDisplay("existed_list_update", "none")
        } else {
            formDisplay("existed_list_adder", "none");
        }
    });

    document.getElementById("oldListUpdate").addEventListener('change', function() {
        if (this.checked) {
            formDisplay("existed_list_update", "block");
            formDisplay("new_list_generate", "none");
            formDisplay("existed_list_adder", "none");
        } else {
            formDisplay("existed_list_update", "none");
        }
    });

}


checkboxChecker();

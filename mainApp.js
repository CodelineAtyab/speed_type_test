const startApp = () => {
    const main_cont = document.getElementById("type_area");

    const action_to_perform = document.createElement("label");
    action_to_perform.innerHTML = "Type the following: "
    
    const curr_sentence = "The quick brown fox jumps over the lazy dog." 
    const new_label = document.createElement("label");
    new_label.innerHTML = curr_sentence; 

    const list_of_char_labels_div = document.createElement("div");
    const list_of_char_labels = curr_sentence.split("").map((currAlpha, index) => {
        const currSpan = document.createElement("span");
        currSpan.innerHTML = String(currAlpha);
        currSpan.style.color = "blue";
        return currSpan;
    });

    list_of_char_labels.forEach((currLabel) => {
        list_of_char_labels_div.appendChild(currLabel);
    })
    
    
    const letter_count_label = document.createElement("label");
    const user_input_div = document.createElement("div");
    const user_input = document.createElement("input");
    user_input.placeholder = curr_sentence;
    user_input.style.width = "400px";
    user_input.style.height = "200px";
    user_input.oninput = (event) => {
        const index = user_input.value.length-1;
        letter_count_label.innerHTML = `Letter Count: ${user_input.value.length}`;
        console.log(`---> Event Data: ${event.data}`)
        if (index >= 0 && event.data) {
            list_of_char_labels[index].innerText === event.data ? list_of_char_labels[index].style.color = "green" : list_of_char_labels[index].style.color = "red";
        }
    };
    user_input_div.appendChild(user_input);

    // Result Division
    const result_area_div = document.createElement("div");
    result_area_div.appendChild(letter_count_label);
    
    const word_matched_label_div = document.createElement("div");
    const word_matched_label = document.createElement("label");
    word_matched_label.innerHTML = `Number of Matched Words: ${0}`;
    word_matched_label_div.append(word_matched_label);
    result_area_div.appendChild(word_matched_label_div);

    const no_of_sec_in_timeout = Number(document.getElementById("timeout_in_sec").value);
    setTimeout(() => {
        console.log(`${no_of_sec_in_timeout} seconds are up!`);
        // TODO: Get the whole value string from user_input.value and split it with space " " to get a list
        const list_of_input_words = user_input.value.split(" ");
        const list_of_original_words = curr_sentence.split(" ");
        let matched_word_count = 0;

        list_of_input_words.forEach((currWord, index) => {
            console.log(`${index} --> ${currWord}`);
            // TODO: If a word doesn't match then no further words will be matched. Need to fix this.
            // For Example: Type this as your input: The quick brownfox jumps over the lazy
            if(currWord === list_of_original_words[index]) 
                matched_word_count++;
        });

        word_matched_label.innerHTML = `Number of Matched Words: ${matched_word_count}`;  
    }, no_of_sec_in_timeout * 1000);

    main_cont.appendChild(action_to_perform);
    main_cont.appendChild(new_label);
    main_cont.appendChild(list_of_char_labels_div);
    main_cont.appendChild(user_input_div);
    main_cont.appendChild(result_area_div);
    
    console.log("REACHED THE END!");
}

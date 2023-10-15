const startApp = () => {
    const main_cont = document.getElementById("type_area");

    const action_to_perform = document.createElement("label");
    action_to_perform.innerHTML = "Type the following: "
    
    const new_label = document.createElement("label");
    new_label.innerHTML = "The quick brown fox jumps over the lazy dog."
    const letter_count_label = document.createElement("label");
    const user_input_div = document.createElement("div");
    const user_input = document.createElement("input");
    user_input.placeholder = new_label.innerHTML;
    user_input.style.width = "400px";
    user_input.style.height = "200px";
    user_input.oninput = (event) => {
        console.log(event.data);
        console.log(user_input.value.length);
        letter_count_label.innerHTML = `Letter Count: ${user_input.value.length}`;
    };
    user_input_div.appendChild(user_input);

    // Result Division
    const result_div = document.createElement("div");
    result_div.appendChild(letter_count_label);

    const no_of_sec_in_timeout = Number(document.getElementById("timeout_in_sec").value);
    setTimeout(() => {
        console.log(`${no_of_sec_in_timeout} seconds are up!`);
        // TODO: Create a label in a div that would display after letter count
        // TODO: Get the whole value string from user_input.value and split it with space " " to get a list
        // TODO: Get the original list by splitting new_label.innerHTML.split(" ")
        // TODO: Compare the user input list of words with the original list of words to check how many words matched
        // TODO: Update the label in step one to display matched words like: "Matched Words: 10"  
    }, no_of_sec_in_timeout * 1000);

    main_cont.appendChild(action_to_perform);
    main_cont.appendChild(new_label);
    main_cont.appendChild(user_input_div);
    main_cont.appendChild(result_div);
    
    console.log("REACHED THE END!");
}

var btnSearch = document.getElementById("btnSearch");

btnSearch.addEventListener('click', ()=>{
    var e = document.getElementById("value");

    
    var value = e.options[e.selectedIndex].value;
    var minDate = document.getElementById("minDate").value;
    var maxDate = document.getElementById("maxDate").value;
    console.log(value);
    console.log(minDate);
    const proxy = "https://cors-anywhere.herokuapp.com/";
    const api = `${proxy}https://jservice.io/api/clues?value=${value}&min_date=${minDate}&max_date=${maxDate}`
    
    fetch(api)
    .then(response =>{
        //convert info to json format
        console.log(response);
        return response.json();
    })
    .then(data=> {
        console.log(data);
        for(i=0 ; i<data.length ;  i++){
            var tableValue = data[i].value;
            var tableQuestion = data[i].question;
            var tableAnswer = data[i].answer;
            document.getElementById("tableBody").innerHTML += 
            "<tr>"
            + "<th scope=\"row\">" + (i+1) + "</th>"
            + "<td>" + tableValue + "</td>"
            + "<td>" + tableQuestion + "</td>"
            + "<td>" + tableAnswer + "</td>"
            + "</tr>"
        }

    })
    
})

const constellations = [];

function main(){
    return document.getElementById("main");
}

function titleInput(){
    return document.getElementById("title");
}

function contentInput(){
    return document.getElementById("content");
}

function form(){
    return document.getElementById("form");
}

function formLink() {
    return document.getElementById("form-link");
}
  
  function constellationsLink() {
    return document.getElementById("constellations-link");
}

function resetFormInputs(){
    titleInput().value = "";
    contentInput().value = "";
}

function resetMain(){
    main().innerHTML = "";
}

function formTemplate() {
    return `
    <h3>Create Constellation</h3>
    <form id="form">
      <div class="input-field">
        <label for="title">Title</label>
        <input type="text" name="title" id="title" />
      </div>
      <div class="input-field">
        <label for="content">Content</label><br />
        <textarea name="content" id="content" cols="30" rows="10"></textarea>
      </div>
      <input type="submit" value="Create Constellation" />
    </form>
    `;
}

function constellationsTemplate() {
    return `
    <h3>List Of Constellations</h3>
    <div id="constellations"></div>
    `;
}


function renderBlog(constellations) {
    let div = document.createElement("div");
    let h4 = document.createElement("h4");
    let p = document.createElement("p");
    let constellationsDiv = document.getElementById("constellations");

    h4.innerText = constellation.title;
    p.innerText = constellations.content;

    div.appendChild(h4);
    div.appendChild(p);

    constellationsDiv.appendChild(div);
}

function renderForm() {
    resetMain();
    main().innerHTML = formTemplate();
    form().addEventListener("submit", submitForm);
}

function renderConstellations() {
    resetMain();
    main().innerHTML = constellationsTemplate();
  
    constellations.forEach(function (constellation) {
      renderConstellation(constellation);
    });
  }

function submitForm(e) {
    e.preventDefault();
  
    constellations.push({
      title: titleInput().value,
      content: contentInput().value,
    });
  
    renderConstellations();
}

function formLinkEvent() {
    formLink().addEventListener("click", function(e){
        e.preventDefault();

        renderConstellations();
    });
}
function constellationsLinkEvent() {
    constellationsLink().addEventListener("click", function (e) {
      e.preventDefault();
  
      renderConstellations();
    });
  }

  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  
  async function getConstellation(){
      //   debugger;
        const postPromise = await fetch('http://localhost:3000/constellations');
        const constellation = await postPromise.json();
        
        //   console.log(constellation);
        
        let testDiv = document.getElementById("constellationsDiv")
        let constellationHtml = "";
        let dropdown = document.getElementById("dropdown")
        constellation.forEach( consta =>{
            // //   constellations.push(consta)
            // constellationHtml = `
            // <h3>${consta.name}</h3>
            // <img src="${consta.image}">
            // `;
            dropdown.add(new Option(consta.name, consta.image))
        });

        // testDiv.innerHTML = constellationHtml;     
      
    //   function fndropdown(){
        //   constellation.map((key) => dropdown.add(new Option(key.name, JSON.stringify(key))));
          
        //   dropdown.addEventListener("input", () => document.getElementById("optionData").innerHTML = dropdown.value)
          dropdown.addEventListener("input", () => {
            let val = dropdown.value
            // console.log(val)  
            let singleConstellationHtml = `
            <img src="${val}">
            `;
            testDiv.innerHTML = singleConstellationHtml
        }
            )

          // debugger;
        //   console.log(constellation)
          // console.log(dropdown)
          
        }
    //     fndropdown();
    // }
    // console.log(constellations)
    
    document.addEventListener("DOMContentLoaded", function(){
        // myFunction();
        getConstellation();
        renderForm();
    formLinkEvent();
    constellationsLinkEvent();
})
 
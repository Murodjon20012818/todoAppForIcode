let title = document.querySelector("#title");
let cost = document.querySelector("#cost");
let weight = document.querySelector("#weight");
let storange = document.querySelector("#storange");
let btn = document.querySelector("#btn");
let bookList = document.querySelector("tbody");
let oyna = document.querySelector("#window")
let bar = document.querySelector("#bar")
let Title = document.querySelector('input')
const rows = document.querySelector('.new-row');

// let newCost = document.createElement('input')
// let dateWeight = document.createElement('input')
// let Storange = document.createElement('input')
btn.addEventListener('click', () => {
  if (title.value == "" &&  cost.value == "" && weight.value == "" && storange.value == "") {
    alert('Please input your information.');
  }
  else {
    let newRow = document.createElement("tr")
    newRow.classList.add('new-row')
    let number = document.createElement('td')
    number.innerHTML = "+"
    newRow.appendChild(number)


    let newTitle = document.createElement('input')
    newTitle.classList.add('edit1','list-group-item')
    newTitle.setAttribute('readonly','readonly')
    newTitle.value = title.value
    newRow.appendChild(newTitle)


    let newCost = document.createElement('input')
    newCost.classList.add('edit2','list-group-item')
    newCost.setAttribute('readonly','readonly')
    newCost.value = cost.value
    newRow.appendChild(newCost)
    


    let dateWeight = document.createElement('input')
    dateWeight.classList.add('edit3','list-group-item')
    dateWeight.setAttribute('readonly','readonly')
    dateWeight.value = weight.value
    newRow.appendChild(dateWeight)
    


    let Storange = document.createElement('input')
    Storange.classList.add('edit4','list-group-item')
    // Storange.classList.add()
    Storange.setAttribute('readonly','readonly')
    Storange.value = storange.value
    newRow.appendChild(Storange)
    



    let navbar = document.createElement('th')
    navbar.innerHTML = "<i onclick='trash()' class='fa fa-trash' id='trash'></i> <i onclick='edit()' class='fa fa-edit' id='edit'></i> <i onclick='check()' class='fa fa-check' id='check'></i> "
    newRow.appendChild(navbar);
    bookList.appendChild(newRow);
    title.value = "";
    cost.value = "";
    weight.value = "";
    storange.value = "";

    document.querySelector(".izlash").style.display = 'block'


  }
})

let a = true;
function edit() {
  if (a) {
    document.querySelector('.edit1').removeAttribute('readonly')
    document.querySelector('.edit2').removeAttribute('readonly')
    document.querySelector('.edit3').removeAttribute('readonly')
    document.querySelector('.edit4').removeAttribute('readonly')
    document.querySelector('.edit1').style.color = 'red'
    document.querySelector('.edit2').style.color = 'red'
    document.querySelector('.edit3').style.color = 'red'
    document.querySelector('.edit4').style.color = 'red'
    a = false;
  } else {
    document.querySelector('.edit1').setAttribute('readonly','readonly')
    document.querySelector('.edit2').setAttribute('readonly','readonly')
    document.querySelector('.edit3').setAttribute('readonly','readonly')
    document.querySelector('.edit4').setAttribute('readonly','readonly')
    document.querySelector('.edit1').style.color = ''
    document.querySelector('.edit2').style.color = ''
    document.querySelector('.edit3').style.color = ''
    document.querySelector('.edit4').style.color = ''
    a = true;
  }
}


function trash() {
  bookList.removeChild(document.querySelector('.new-row'))
}

let b = true;
function check() {
  if(b) {
    document.querySelector('.edit1').style.textDecoration = "line-through"
    document.querySelector('.edit2').style.textDecoration = "line-through"
    document.querySelector('.edit3').style.textDecoration = "line-through"
    document.querySelector('.edit4').style.textDecoration = "line-through"
    document.querySelector('.new-row').style = "background: red; color: #fff"
    document.querySelector('.fa-edit').style = "display: none"

    b = false;
  } else {
    document.querySelector('.edit1').style.textDecoration = ""
    document.querySelector('.edit2').style.textDecoration = ""
    document.querySelector('.edit3').style.textDecoration = ""
    document.querySelector('.edit4').style.textDecoration = ""
    document.querySelector('.new-row').style = ""
    document.querySelector('.fa-edit').style = ""

    b = true;
  }
}



// for search


document.querySelector('#search-input').addEventListener('tr', filterList);
function filterList() {
  const searchInput = document.querySelector('#search-input');
  const filter = searchInput.value.toLowerCase();
  const listItems = document.querySelectorAll('tr .list-group-item');
  listItems.forEach((item) => {
    let text = item.textContent
    if(text.toLocaleLowerCase().includes(filter.toLocaleLowerCase())) {
      item.style.display = '';
    }
    else {
      item.style.display = 'none';
    }
  })
}
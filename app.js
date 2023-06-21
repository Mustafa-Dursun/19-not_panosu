const addBtn = document.getElementById("add");

addBtn.addEventListener('click', () => addNewNote());

const notes = JSON.parse(localStorage.getItem('notes'));
if(notes){   
    console.log('not var');
    const div = document.createElement('div');
    div.classList.add('note');
    div.innerHTML = `  
            <img src="images/pin-removebg-preview.png" alt="pin">

            <div class="tools">    
                <button class="delete">
                    <i class="fa-solid fa-eraser"> </i>Yapılacakları Sil
                </button>
            </div>
            <div class="main ">
                <h1>Yapılacaklar</h1>
                <ul class ="list" >
                ${
                    notes.map(note => `<li>${note}</li>`).join('')
                }                
                </ul>
            </div>
    `;
    const deleteBtn = div.querySelector('.delete');
    deleteBtn.addEventListener('click', () => {
        div.remove();
        localStorage.clear();
    })

  document.body.appendChild(div);
}

function addNewNote(){
    console.log('tıklandı');
    const note = document.createElement('div');
    note.classList.add('note');

    note.innerHTML = `  
            <img src="images/pin-removebg-preview.png" alt="pin">

            <div class="tools">
                <button class="edit">
                    <i class="fa-solid fa-pencil"></i>Ekle
                </button>
                <button class="delete">
                    <i class="fa-solid fa-eraser"> </i>Notu Sil
                </button>
            </div>
            <textarea class=""></textarea>  

            <div class="main ">
                <h1>Listeye Eklenenler</h1>
                <ul class ="list" >
       
                </ul>
            </div>
    `;

    const deleteBtn = note.querySelector('.delete');
    deleteBtn.addEventListener('click', () => {
        note.remove();
        localStorage.clear();
    })

    const editBtn = note.querySelector('.edit');
    const textArea = note.querySelector('textarea');
    const list = note.querySelector('.list');

    editBtn.addEventListener('click', () => {
        if(textArea.value !== ""){
            list.innerHTML += `<li> ${textArea.value} </li> `;
            updateSL();            
        }
        textArea.value = "";
    })   

    document.body.appendChild(note);
}

function updateSL(){
    const notesText = document.querySelectorAll("li");
    const notes = [];
    notesText.forEach(note => (notes.push(note.innerText)));
    localStorage.setItem('notes', JSON.stringify(notes));
}


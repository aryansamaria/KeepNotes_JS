let addbtn= document.getElementById('add-btn')
let itemarray=localStorage.getItem('note')?localStorage.getItem(JSON.parse('note')):[];
let textcont=document.getElementById('textaera')
let str='<div class="row">'

addbtn.addEventListener('click',function(e){
    e.preventDefault();
    add();

})
let cont=document.getElementById('content')
function add()
{
    
    str+=`<div class="col-3 parent">
                <div class="icon">
                    <button class="ic"><i class="bi bi-pen"></i></button>
                    <button class="ic"><i class="bi bi-trash3"></i></button>
                </div>
                <textarea name="" id="textarea"></textarea>
            </div>`
    cont.innerHTML=str       
}
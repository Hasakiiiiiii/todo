const input = document.querySelector('.finding');
const result = document.querySelector('.element')
const btn = document.querySelector('.btn-add');
const list = document.querySelector('.list');
const closeBtn = document.querySelector('.ti-close');
const para = document.querySelector('.para')
btn.addEventListener('click', function(event) {
    const newList = document.createElement('li');
    const para = document.createElement('p');
    const text = document.createTextNode(input.value);
    const deleteIcon = document.createElement('i');
    deleteIcon.classList.add('ti-close');
    newList.appendChild(deleteIcon);
    deleteIcon.addEventListener('click', function() { 
        list.removeChild(newList);
      });
    para.appendChild(text);
    newList.appendChild(para);
    newList.appendChild(deleteIcon);
    list.appendChild(newList);
    input.value = ''
    
});
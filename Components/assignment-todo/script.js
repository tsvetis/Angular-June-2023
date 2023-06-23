let toDoInput; //miejsce, gdzie użytkownik wpisuje treść zadania
let errorInfo; //info o braku zadań / konieczności wpisania tekstu
let addBtn; //przycisk ADD - dodaje nowe elementy do listy
let ulList; //lista zadań, taki UL
let newToDo; //nowo dodane li, nowe zadanie

let popup; //popup
let popupInfo; //test w popupie, jak sie doda pisty teskst
let todoToEdit; //edytowany Todo
let popupInput; //input w popupie
let popupAddBtn; //przycisk 'zatwierdz' w popupie
let popupCloseBtn; //przycisk 'anuluj' w popupie

const main = () => {
    //wywołuje nasze funkcje
    prepareDOMElements();
    prepareDOMEvents();
}

const prepareDOMElements = () => {
    //pobieramy wszystkie elementy
    toDoInput = document.querySelector('.todo-input');
    errorInfo = document.querySelector('.error-info');
    addBtn = document.querySelector('.btn-add');
    ulList = document.querySelector('.todolist ul');

    popup = document.querySelector('.popup');
    popupInfo = document.querySelector('.popup-info');
    popupInput = document.querySelector('.popup-input');
    popupAddBtn = document.querySelector('.accept');
    popupCloseBtn = document.querySelector('.cancel');
}

const prepareDOMEvents = () => {
    //nadajemy nasłuchiwanie
    addBtn.addEventListener('click',addNewToDo);
    ulList.addEventListener('click', checkClick);
    popupCloseBtn.addEventListener('click', closePopup);
    popupAddBtn.addEventListener('click', changeTodoText);
    toDoInput.addEventListener('keyup', enterKeyCheck);
}

const addNewToDo = () => {
    //tworzymy nowego toDo
    if (toDoInput.value != ''){
        newToDo = document.createElement('li');
        newToDo.textContent = toDoInput.value;
        //dodajmey do naszego ToDo toolsy (przyciski)
        createToolAreal();
        //dodajemy naszego ToDo do ul listy
        ulList.append(newToDo);
        
        //czyscimy error jak i input po dodaniu ToDo
        toDoInput.value = '';
        errorInfo.textContent = '';
    } else {
        errorInfo.textContent = 'Wpisz treść zadania!';
    }
}

const createToolAreal = () => {
    //towrzymy elementy (przyciski i dodajemy do toDo)
    const div = document.createElement('div');
    div.classList.add('tools');
    //dodajemy nasze toolsy do nowego toDo
    newToDo.append(div);

    const buttonDone = document.createElement('button');
    buttonDone.classList.add('complete');
    buttonDone.innerHTML = '<i class="fas fa-check"></i>'

    const buttonEdit = document.createElement('button');
    buttonEdit.classList.add('edit');
    buttonEdit.textContent = 'EDIT';

    const buttonCancel = document.createElement('button');
    buttonCancel.classList.add('delete');
    buttonCancel.innerHTML = '<i class="fas fa-times"></i>'

    //dodajemy elementy do siebie 
    div.append(buttonDone, buttonEdit, buttonCancel);
}

//funkcjs sprawdzająca w co klikamy (aby wiedziec czy zakonczyc task czy moze go usunac czy edytowac)
const checkClick = (e) => {
    if(e.target.matches('.complete')){
        e.target.closest('li').classList.toggle('completed'); //po nacisnieciu complete do najblizszego elementu li (dziadka) dodajemy klase completed
        e.target.classList.toggle('completed');

    } else if (e.target.matches('.edit')) {
        editToDo(e);

    } else if (e.target.matches('.delete')) { //else if poniewaz gdybysmy klikneli wszedzie poza delete tez by sie wykonal warunek
        deleteToDo(e);

    }
}

//funkcje odpowiedzialne za popup
const editToDo = (e) => { 
    todoToEdit = e.target.closest('li'); //edytujemy nablizsze li do przycisku (wiadomka B-) )
    popupInput.value = todoToEdit.firstChild.textContent; //przypisujemy do inputa (edytora) wartosc ktora mielismy w child (tekst) elementu li 
    popup.style.display = 'flex';
}

const closePopup = () => {
    popup.style.display = 'none';
    popupInfo.textContent = '';
}

//funkcja wprowadzajaca zmiany z inputa do naszego elementu li
const changeTodoText = () => {
    if (popupInput.value != '') {
        todoToEdit.firstChild.textContent = popupInput.value;

        popup.style.display = 'none';
        popupInfo.textContent = '';
    } else {
        popupInfo.textContent = 'Musisz podać jakąś treść!';
    }
}

const deleteToDo = (e) => {
    e.target.closest('li').remove(); //style.display = 'none' jak poczatkowo myslalem tez by zadzialala ale ta better B-)

    //wyswietlamy brak elementow gdy ich nie ma
    const allToDos = ulList.querySelectorAll('li');
    if (allToDos.length == 0) {
        errorInfo.textContent = 'Brak zadań na liście.'
    }
}

//wykonujemy też dodanie todo na enterze
const enterKeyCheck = (e) => {
    if(e.key == 'Enter'){
        addNewToDo();
    }
}

//wykonuje się w przypadku zmiany na stronie
document.addEventListener('DOMContentLoaded', main);


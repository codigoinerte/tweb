const procesA =(id='', n=6)=>{
    if(id=='') return false;

    const getContent = document.getElementById(id);
    for(let x = 1; x < n; x++){
        getContent.insertAdjacentHTML('beforeend', `<div class="col p-0"><button class="btn rounded-0 w-100 btn-primary bg-warning">
        AA - col ${x}
        </button></div>`);
    }
}
const procesB =(id='', n=12)=>{
    if(id=='') return false;

    const getContent = document.getElementById(id);
    for(let x = 1; x < n; x++){
        getContent.insertAdjacentHTML('beforeend', `<div class="col p-0"><button class="btn rounded-0 w-100 btn-primary">
        BB- col ${x}
        </button></div>`);
    }
}
const procesC =(id='', n=8)=>{
    if(id=='') return false;

    const getContent = document.getElementById(id);
    for(let x = 1; x < n; x++){

        getContent.insertAdjacentHTML('beforeend', `<div class="col p-0"><button class="btn rounded-0 w-100 btn-primary">
        CC - col ${x}
        </button></div>`);
    }
}

export {
    procesA,
    procesB,
    procesC
}
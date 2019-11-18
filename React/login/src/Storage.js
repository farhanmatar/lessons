export const loadState= () => {
    const data = localStorage.getItem('state');
    if (data === null ){
        return null 
    }
    else{
        return(JSON.parse(data))
    }
}





export const saveState = (state) => {

    let data = JSON.stringify(state);
    localStorage.setItem('state',data)
    console.log('saved successfuly')
}

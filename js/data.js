window.addEventListener('DOMContentLoaded', function(){
    const storedData= localStorage.getItem('datoIngresado');

    if(storedData){
        this.document.getElementById('data').textContent = storedData;
    } else{
        this.document.getElementById('data').textContent= 'No hay datos guardados';
    }
});
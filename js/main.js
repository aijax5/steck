function viewOverview(element) {
    console.log(element==='overview');
    if(element==='overview'){
    document.querySelector('.overview').classList.add('active');
    document.querySelector('.stats').style.display = 'none';
    document.querySelector('.devices').style.display = 'none';
}
}
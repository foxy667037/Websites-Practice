//Search Function:

document.getElementById('svg4').addEventListener('click' , () => {
    // console.log("Hi");
    
    document.getElementById('close').style.display = 'block';
    document.getElementById('search').style.display = 'block';
    document.getElementById('search-bg').style.display = 'block';
    document.getElementById('main-page').style.display = 'none';
    document.getElementById('working').style.display = 'none';
    document.getElementById('main-car').style.display = 'none';
    document.getElementById('service').style.display = 'none';
    document.getElementById('choosing-us').style.display = 'none';
    document.getElementById('About-sec').style.display = 'none';

});


//Close Function:

document.getElementById('close').addEventListener('click', () => {
    
    // console.log("Hi");
    
    document.getElementById('close').style.display = 'none'; 
    document.getElementById('search').style.display = 'none';
    document.getElementById('search-bg').style.display = 'none'; 
    document.getElementById('main-page').style.display = 'block';
    document.getElementById('working').style.display = 'block';
    document.getElementById('main-car').style.display = 'block';
    document.getElementById('service').style.display = 'block';
    document.getElementById('choosing-us').style.display = 'block';
    document.getElementById('About-sec').style.display = 'block';

});


//Dropdown Function:

document.getElementById('Dropdown').addEventListener('click' , () => {
    
        document.getElementById('dropdown').style.top = '50px';
        document.getElementById('Dropdown-svg').style.left = '742px';
        document.getElementById('Content').style.visibility = 'visible';
        document.getElementById('Dropdown').style.visibility = 'hidden';
        document.getElementById('Dropdown-svg').style.visibility = 'visible';
        document.getElementById('Dropdown-svg').style.transform = 'rotate(180deg)';
    
});

document.getElementById('Content').addEventListener('click' , () => {

        document.getElementById('dropdown').style.top = '-400px';
        document.getElementById('Dropdown-svg').style.left = '764px';
        document.getElementById('Content').style.visibility = 'hidden';
        document.getElementById('Dropdown').style.visibility = 'visible';
        document.getElementById('Dropdown-svg').style.visibility = 'visible';
        document.getElementById('Dropdown-svg').style.transform = 'rotate(0deg)';
});
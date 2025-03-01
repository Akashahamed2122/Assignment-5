document.querySelector('#btn-1')
    .addEventListener('click', function () {
        
        let decress = document.querySelector('#decriss').innerText;
        let convertDecress = parseInt(decress);
        let incrise = document.querySelector('#incrise').innerText;
        let convertIncrise = parseInt(incrise);

        
        if (convertDecress > 0) {
            
            convertDecress--; 
            convertIncrise++; 

            
            document.querySelector('#decriss').innerText = convertDecress;
            document.querySelector('#incrise').innerText = convertIncrise;

            
        }
        let btn = document.querySelector('#btn-1');
        btn.setAttribute('disabled', 'true'); 


    });

    // btn 2 
document.querySelector('#btn-2')
    .addEventListener('click', function () {
        
        let decress = document.querySelector('#decriss').innerText;
        let convertDecress = parseInt(decress);
        let incrise = document.querySelector('#incrise').innerText;
        let convertIncrise = parseInt(incrise);

        
        if (convertDecress > 0) {
            
            convertDecress--; 
            convertIncrise++; 

            
            document.querySelector('#decriss').innerText = convertDecress;
            document.querySelector('#incrise').innerText = convertIncrise;

            
        }
        let btn = document.querySelector('#btn-2');
        btn.setAttribute('disabled', 'true'); 


    });



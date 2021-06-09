/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
    const login = options.data.email;
    const password = options.data.password;
    const urlOption = option.url;
    const url = urlOption + "?mail=" + login + "&password=" + password;
    const record = options.method;

    if(record === GET) {
        const xhr = new XMLHttpRequest;
        xhr.open( 'GET', url);
        xhr.send();
     } else if(record === POST) {
     const xhr = new XMLHttpRequest,
     formData = new FormData;
     formData.append( 'mail', login );
     formData.append( 'password', password );
     xhr.open( 'POST', urlOption );
     xhr.send( formData );
    } 
    if(xhr.readyState === 4 && xhr.status === 200) {
        let response = JSON.parse(xhr.responseText);
        console.log(response);
    }
    
    callback: ( err, response ) => {
        
        /*
          при успешном выполнении err = null, response содержит данные ответа
        */
        console.log( err ); // null
        console.log( response );
    }






};

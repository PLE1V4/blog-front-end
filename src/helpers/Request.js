export const Request = async(url, methodToUse, tosaveData = "", archivos = false) => {

    let loading = true;

    let options = {
        method: "GET"
    }

    if (methodToUse == "GET" || methodToUse == "DELETE") {
        options = {
            method: methodToUse,
        };
    }

    if (methodToUse == "POST" || methodToUse == "PUT") {

        let body = JSON.stringify(tosaveData);

        if(archivos){
            options = {
                method: methodToUse,   
                body: tosaveData
            };
        }else{
            options = {
                method: methodToUse,            
                headers: { "Content-Type": "application/json"},
                body: body
            };
        }

        
    }

    const response = await fetch(url, options);
    const data = await response.json();

    loading = false;



    return {
        data,
        loading
    }


}
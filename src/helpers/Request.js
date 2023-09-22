export const Request = async(url, methodToUse, tosaveData = "") => {

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
        options = {
            method: methodToUse,            
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(tosaveData)
        };
    }

    const response = await fetch(url, options);
    const data = await response.json();

    loading = false;



    return {
        data,
        loading
    }


}
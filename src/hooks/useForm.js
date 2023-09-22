import { useState } from "react";


export const useForm = (initialObject = {}) => {

    const [form, setForm] = useState(initialObject);

    const serializeForm = (form) => {

        const formData = new FormData(form);

        const data = {};

        for(let [name, value] of formData){
            data[name] = value;
        }

        return data;

    }

    const sent = (e) => {

        e.preventDefault();
              
        let list = serializeForm(e.target);

        setForm(list);

        document.querySelector(".codigo").classList.add("sent");

    }

    const modified = ({target}) => {
        const {name, value} = target;

        setForm({
            ...form,
            [name]: value
        });
    }

    return {
        form,
        sent,
        modified
    }
}
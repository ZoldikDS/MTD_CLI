import {api} from "../../helpers/api"
export const getNotes = async() => {
    const { data } = await api.get("/Notes", { withCredentials: true });
    return data;
}

export const getDetail = async(id) => {
    const { data } = await api.get('/Notes/' + id, { withCredentials: true });
    return data;
}

export const createNote = async(data) => {
    await api.post("/Notes", data, { withCredentials: true });
}

export const updateNote = async(data) => {
    await api.put("/Notes", data, { withCredentials: true });
}

export const deleteNote = async(data) => {
    await api.delete("/Notes", { withCredentials: true, data: data });
}

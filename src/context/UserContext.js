import { createContext, useState, useEffect } from "react";
import api from "../service/api";

export const UserContext = createContext({});

const UserProvider = ({ children }) => {
    const [dataUser, setDataUSer] = useState([])
    const [dataRepos, setDataRepos] = useState([])
    const [loading, setLoading] = useState(true)

    const getDataUser = async () => {
        try {
            const {data} = await api.get('/TiagoAlmeidaPoa');
            setDataUSer(data)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    const getAllRepos = async () => {
        try {
        const { data } = await api.get('/TiagoAlmeidaPoa/repos')
        setDataRepos(data)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getDataUser()
        getAllRepos()
    },[])

    return (
        <UserContext.Provider value={{ dataUser, dataRepos, loading }}>
            { children }
        </UserContext.Provider>
    )
}

export default UserProvider;
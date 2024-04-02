'use client'
import { IUser } from "@/redux/features/users/user.model";
import { fetchAllUsers } from "@/redux/features/users/user.service";
import { getAllUsers } from "@/redux/features/users/user.slice";
import { NextPage } from "next";
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";

const AllusersPage: NextPage = () => {
    const dispatch = useDispatch()
    const allUsers : [] = useSelector(getAllUsers)

    if(allUsers !== undefined){
        console.log('allUsers is not undefined')
        
        console.log('length is '+ allUsers.length)
        for(let i=0; i< allUsers.length; i++){
            console.log(JSON.stringify(allUsers[i]))
        }
    }else{
        console.log('allUsers is undefined')
    }
    

    useEffect(()=>{
        dispatch(fetchAllUsers(1))
    },[dispatch])

    return (<>
    <h2>개인페이지 ALL users</h2>
    <table>
        <thead>
            <tr>
                <th>username</th>
                <th>password</th>
                <th>name</th>
                <th>phone</th>
                <th>job</th>
                <th>height</th>
                <th>weight</th>
            </tr>
        </thead>
        <tbody>
        {allUsers?.map((props: IUser) => (
                    <tr key={props.username}>
                        <td>{props.password}</td>
                        <td>{props.name}</td>
                        <td>{props.phone}</td>
                        <td>{props.job}</td>
                        <td>{props.height}</td>
                        <td>{props.weight}</td>
                    </tr>
                ))}
        </tbody>
    </table>
    </>)
}

export default AllusersPage
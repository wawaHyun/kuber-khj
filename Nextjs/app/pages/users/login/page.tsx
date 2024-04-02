'use client'

import axios from "axios"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { API } from "@/redux/common/enums/API"
import AxiosConfig from "@/redux/common/configs/axios-config"
import { PG } from "@/redux/common/enums/PG"
import { NextPage } from "next"

const Login:NextPage=() => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleUsername = (e: any) => {
        setUsername(e.target.value)
    }

    const handlePassword = (e: any) => {
        setPassword(e.target.value)
    }

    const handleSubmit = () => {
        alert("입력완료")

        axios.post(`${API.SERVER}/api/login`, { username, password }, AxiosConfig())
            .then(res => {
                const messenge = res.data.Messenge;
                alert(messenge)
                router.push(`${PG.BOARD}/article/newArticle`);
            });
    }

    const router = useRouter();

    return (<>
        <h1>개인 page!!!!!!!!</h1>
        <h2>로그인 하세요</h2>
        <h3>아이디를 입력하세요</h3>
        <input type="text" onChange={handleUsername} />
        <h3>비밀번호를 입력하세요</h3>
        <input type="text" onChange={handlePassword} /><br />
        <button onClick={handleSubmit}>전송</button>

    </>)
}

export default Login;
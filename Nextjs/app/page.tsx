'use client';

import { useState } from "react";
import axios from 'axios';
import Link from "next/link";
import './globals.css'
import { PG } from "../redux/common/enums/PG";
const SERVER = 'http://localhost:8080'

export default function Home() {
  const [name, setName] = useState('')

  const handlechange = (e: any) => {
    setName(e.target.value);
  }

  const handleClik = () => {
    alert('welcome ' + name + '!!');
    const url = `${SERVER}/name`
    const data = { 'name': name }
    const config = {
      headers: {
        "Cache-Control": "no-cache",
        "Content-Type": "application/json",
        Authorization: `Bearer blah ~`,
        "Access-Control-Allow-Origin": "*",
      }
    }
    axios.post(url, data, config)
      .then(res => (
        alert("리스핀스가 가져온 이름 : " + JSON.stringify(res.data))
      ))
  }

  return <>
  <div className='text-center'>

    <h1>개인 page!!!!!!!!</h1>
    <div className="text-pink-500" >enter your name.</div><br />
    <input type="text" onChange={handlechange} className=" rounded-lg flex-1 appearance-none border
     border-black w-500 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-bm text-base focus:outline-none focus:ring-2
      focus:ring-purple-600 focus:border-transparent"/><br />
    <hr />
    <button onClick={handleClik} >input</button>
    <button onClick={handleClik} >input</button>
    <br /><br />
    <Link href={"/login"}> login </Link><br /><br />
    <Link href={"/mui-demo"}>mui demo</Link><br /><br />
    <Link href={"/join"}>join</Link><br /><br />
    <Link href={"/companies"}>companies</Link><br /><br />
    <Link href={"/article/newArticle"}>newArticle</Link><br /><br />
  </div>


  <div className="bg-black h-[1000px] flex flex-col gap-5 p-2 w-full absolute top-[0] left-0">
            <div className="flex items-center justify-between px-6 py-2">
                <div x-data="{ open: false }" className="flex gap-5 items-center">
                    <img className="w-[60px] h-[60px] rounded-full "
                        src="data:image/png;base64,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" alt="profile picture"/>
                    <div>
                        <div className="text-white font-bold text-2xl">MAIN</div>
                        <div className="text-sm text-zinc-500 font-semibold">select menus</div>
                    </div>
                </div>
                <div
                    className="text-white scale-125 relative cursor-pointer hover:ring hover:ring-white hover:bg-white hover:text-black rounded-full">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                        </svg>
                    </div>
                    <div
                        className="absolute top-0 left-0 bg-red-500 text-white font-semibold text-xs w-[14px] h-[14px] flex items-center justify-center rounded-full">
                        99
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <a href={`${PG.USER}/join`}
                    className="text-white bg-black flex items-center gap-2 hover:bg-white hover:text-black rounded-full px-6 py-4 text-xl font-medium transition duration-250">
                    <div>
                        <svg className="h-7 w-7" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
                            stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <circle cx="12" cy="13" r="2" />
                            <line x1="13.45" y1="11.55" x2="15.5" y2="9.5" />
                            <path d="M6.4 20a9 9 0 1 1 11.2 0Z" />
                        </svg>
                    </div>
                    join
                </a>

                <a href={`${PG.USER}/allusers`}
                    className="text-white bg-black flex items-center gap-2 hover:bg-white hover:text-black rounded-full px-6 py-4 text-xl font-medium transition duration-250">
                    <div>
                        <svg className="h-7 w-7" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
                            stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <circle cx="12" cy="13" r="2" />
                            <line x1="13.45" y1="11.55" x2="15.5" y2="9.5" />
                            <path d="M6.4 20a9 9 0 1 1 11.2 0Z" />
                        </svg>
                    </div>
                    All users
                </a>

                <a href={`${PG.DEMO}/mui-demo`}
                    className="text-white bg-black flex items-center gap-2 hover:bg-white hover:text-black rounded-full px-6 py-4 text-xl font-medium transition duration-250">
                    <div>
                        <svg className="h-7 w-7" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
                            stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                            <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                            <line x1="12" y1="11" x2="12" y2="17" />
                            <line x1="9" y1="14" x2="15" y2="14" />
                        </svg>
                    </div>
                    mui demo
                </a>
                <a href={`${PG.USER}/login`}
                    className="text-white bg-black flex items-center gap-2 hover:bg-white hover:text-black rounded-full px-6 py-4 text-xl font-medium transition duration-250">
                    <div>
                        <svg className="h-7 w-7" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
                            stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </div>
                    login
                </a>
                <a href={`${PG.DEMO}/companies`}
                    className="text-white bg-black flex items-center gap-2 hover:bg-white hover:text-black rounded-full px-6 py-4 text-xl font-medium transition duration-250">
                    <div>
                        <svg className="h-7 w-7" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
                            stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                        </svg>
                    </div>
                    companies
                </a>
                <a href={`${PG.BOARD}/articles`}
                    className="text-white bg-black flex items-center gap-2 hover:bg-white hover:text-black rounded-full px-6 py-4 text-xl font-medium transition duration-250">
                    <div>
                        <svg className="h-7 w-7" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
                            stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <path
                                d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" />
                            <circle cx="12" cy="13" r="3" />
                        </svg>
                    </div>
                    ALL articles
                </a>

                <a href={`${PG.BOARD}/articles/writer`}
                    className="text-white bg-black flex items-center gap-2 hover:bg-white hover:text-black rounded-full px-6 py-4 text-xl font-medium transition duration-250">
                    <div>
                        <svg className="h-7 w-7" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
                            stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <path
                                d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" />
                            <circle cx="12" cy="13" r="3" />
                        </svg>
                    </div>
                    Article
                </a>

                <a href={`${PG.DEMO}/counter`}
                    className="flex items-center gap-2 text-white hover:bg-white hover:text-black rounded-full px-6 py-4 text-xl font-medium transition duration-250">
                    <div>
                        <svg className="h-7 w-7" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
                            stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                    </div>
                    counter demo
                </a>

                <a href={`${PG.DEMO}/redux-counter`}
                className="flex items-center gap-2 text-white hover:bg-white hover:text-black rounded-full px-6 py-4 text-xl font-medium transition duration-250">
                    <div>
                        <svg className="h-7 w-7" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
                            stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
                        </svg>
                    </div>
                    redux counter demo
                </a>

                <a href="#"
                className="flex items-center gap-2 text-white hover:bg-white hover:text-black rounded-full px-6 py-4 text-xl font-medium transition duration-250">
                    <div>
                        <svg className="h-7 w-7" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
                            stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
                        </svg>
                    </div>
                    빈버튼
                </a>

            </div>
        </div>
  </>
}

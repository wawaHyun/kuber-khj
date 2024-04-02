import { instance } from "@/redux/common/configs/axios-config"

export const fetchAllUsersAPI = async (page:number) =>{
    console.log('여기까지 ㅇㅋ')
    try{
        const response = await instance.get('/all-users',{
            params: {page, limit: 10} //1page 당 10 게시글
        })
        // console.log("response "+response)
        return response.data
    }catch(error){
        console.log(error+" fetchAllUsersAPI EERR!!!")
        return error
    }
}
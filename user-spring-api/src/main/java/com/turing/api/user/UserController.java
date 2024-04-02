package com.turing.api.user;

import com.turing.api.article.Article;
import com.turing.api.article.ArticleRepository;
import com.turing.api.article.ArticleServiceImpl;
import com.turing.api.enums.Messenger;
import com.turing.api.proxy.TypeProxy;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.*;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    
    private final UserService ser;
    private final UserRepository repo;

    @PostMapping(path = "/api/join")
    public Map<String, ?> join(@RequestBody Map<?, ?>requMap)  {
        System.out.println("join 들어옴");

        @SuppressWarnings("null")
        User newmem = repo.save(User.builder()
        .username((String)requMap.get("memId"))
        .password((String) requMap.get("memPw"))
        .name((String) requMap.get("name"))
        .phone((String) requMap.get("phone"))
        .job((String) requMap.get("job"))
        .height(Double.parseDouble((String)requMap.get("height")))
        .weight(Double.parseDouble((String)requMap.get("weight")))
        .build());

        System.out.println("Db에 저장된 정보 "+newmem);
        Map<String, Messenger> resMap = new HashMap<>();
        resMap.put("messenge",Messenger.SUCCESS);

        return resMap;
    }



    @PostMapping(path ="/api/login")
    public Map<String, ?> login(@RequestBody Map<String, ?>paraMap) throws SQLException {
        Map<String, Messenger> resMap = new HashMap<>();
        Optional<User> mem = repo.findByUsername((String)paraMap.get("memid"));

        if(mem.isEmpty()){resMap.put("Messenge",Messenger.FAIL);return resMap;}

        resMap.put("Messenge",mem.get().getPassword().equals(paraMap.get("password")) ?
        Messenger.SUCCESS : Messenger.WRONG_PASSWORD);
        return resMap;    
    }




}

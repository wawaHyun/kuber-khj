package com.turing.api.article;

import lombok.RequiredArgsConstructor;

import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.turing.api.enums.Messenger;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class ArticleController {
   
    private final ArticleServiceImpl ser;
    private final ArticleRepository repo;

    @GetMapping("/api/all-articles")
    public Map<?,?>FindAll() throws SQLException{
        Map<String,Object> map = new HashMap<>();
       
        // @SuppressWarnings("unchecked")
        // List<?> list = List.of(Article.builder()
        // .id(0L)
        // .title("title test")
        // .content("content test")
        // .registerDate("24.03.27")
        // .build());
       
        List<Article> list = repo.findAll();

        if(list.isEmpty()) {
            map.put("message", Messenger.FAIL);
        } else {
            map.put("message", Messenger.SUCCESS);
            map.put("result",list);
            map.put("test", ser.findAll().get(0));
            System.out.println("리스트 사이즈 : "+list.size());
            System.out.println("message "+map.get("message"));
            System.out.println("test "+map.get("test"));
            // System.out.println("message "+map.get("result"));
        }

        return map;
    }

}

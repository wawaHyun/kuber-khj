package com.turing.api.board;

import java.util.List;
import jakarta.persistence.*;
import com.turing.api.article.Article;
import lombok.*;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@ToString(exclude = {"id"})
@Entity(name = "boards")
public class Board {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "board_id")
    private Long id;

    @Column(name = "board_name")
    private String boardName;

    @Column(name = "board_type")
    private String boardType;

    @OneToMany(mappedBy = "board")
    private List<Article> articles;


    @Builder(builderClassName =  "builer")
    public Board(long id, String boardName, String boardType
    // ,List<Article> articles
    ){
        this.id = id;
        this.boardName = boardName;
        this.boardType = boardType;
        // this.articles = articles;
    }


}

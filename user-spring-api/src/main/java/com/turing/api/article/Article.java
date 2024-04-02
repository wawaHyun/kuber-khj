package com.turing.api.article;
import com.turing.api.board.Board;
import com.turing.api.user.User;

import jakarta.persistence.*;
import lombok.*;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@ToString(exclude = {"id"})
@Entity(name="articles")
public class Article {
    @Id
    @Column(name="arti_id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id ;
    private String title ;
    private String content;
    @Column(name="register_date")
    private String registerDate;

    @ManyToOne
    @JoinColumn(name = "board_id")
    private Board board;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User writer;

    @Builder(builderClassName="builder")
    public Article(Long id, String title, String content, 
    String registerDate
    , Board board
    , User writer
    ){
        this.id = id;
        this.title = title;
        this.content = content;
        this.registerDate = registerDate;
        this.board = board;
        this.writer = writer;
    }
}

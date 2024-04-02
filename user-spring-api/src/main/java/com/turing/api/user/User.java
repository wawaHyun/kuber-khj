package com.turing.api.user;

import java.util.List;

import com.turing.api.article.Article;

import jakarta.persistence.*;
import lombok.*;

@Entity(name = "users")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Setter
@ToString(exclude = { "id" })

public class User {
    @Id
    @Column(name = "user_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String username;
    private String password;
    private String name;
    private String phone;
    private Long address;
    private String job;
    private Double height;
    private Double weight;

    @OneToMany(mappedBy = "writer")
    private List<Article> article;

    @Builder(builderClassName = "builder")
    public User(Long id, String username, String password, String name,
            String phone, Long address, String job, Double height, Double weight
    // ,List<Account> account
    // ,List<Article> article
    ) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.name = name;
        this.phone = phone;
        this.address = address;
        this.job = job;
        this.height = height;
        this.weight = weight;
        // this.account = account;
        // this.article = article;
    }

}
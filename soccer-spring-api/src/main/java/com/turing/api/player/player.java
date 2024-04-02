package com.turing.api.player;


import java.util.*;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@ToString(exclude = { "id" })
@Entity(name = "players")
public class player {

    @Id
    @Column(name = "player_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String username;
    private String password;
    private String name;
    private String soccer;

    @Builder(builderClassName = "builder")
        public player(Long id, String username, String password, String name,
                      String soccer){
            this.id = id;
            this.username = username;
            this.password = password;
            this.name = name;
            this.soccer = soccer;
        }

}

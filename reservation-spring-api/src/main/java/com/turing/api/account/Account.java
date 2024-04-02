
package com.turing.api.account;
import lombok.*;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;


@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@ToString(exclude = {"id"})
@Entity(name ="accounts")
public class Account {
    @Id
    @Column(name="acc_id",nullable = false)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String accountNumber;  //계좌번호
    private String accountHolder; //예금주
    private double balance;  //잔고
    private LocalDate transactionDate; //거래일자

    @Builder(builderClassName = "builder")
    public Account(long id, String accountNumber, 
    double balance, LocalDate transactionDate
    // , User accHolder
    ){
    this.id = id;
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.transactionDate = transactionDate;
    // this.accHolder = accHolder;
}
}
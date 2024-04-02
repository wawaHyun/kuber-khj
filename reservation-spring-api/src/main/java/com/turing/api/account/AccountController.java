package com.turing.api.account;


import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RestController;

import java.sql.SQLException;
import java.time.LocalDateTime;
import java.util.Map;
import java.util.Scanner;
@RestController
@RequiredArgsConstructor
public class AccountController {

    AccountServiceImpl accountService;

    public Map<String, ?> createAccount(Scanner sc) {
        System.out.println("개설할 계좌번호를 입력하세요");
        System.out.println("예금주를 입력하세요");

        return null;
    }

    public String deposit(Scanner sc) {
        System.out.println("계좌번호를 입력하세요");
        System.out.println("입금할 금액을 입력하세요");

        return null;
    }

    public String withdraw(Scanner sc) {
        System.out.println("계좌번호를 입력하세요");
        System.out.println("출금할 금액을 입력하세요");
        return null;
    }

    public String getBalance(Scanner sc) {
        System.out.println("통장정리할 계좌를 입력하세요");
        return accountService.getBalance(sc.next());
    }

    public Map<String, ?> removeAccount(Scanner sc) {
        System.out.println("삭제할 계좌번호을 입력하세요");

        return accountService.delete(Account.builder()
                .accountNumber(sc.next())
                .build());
    }

    public Map<String, ?> accountList() throws SQLException {
        return accountService.findAll();
    }
}
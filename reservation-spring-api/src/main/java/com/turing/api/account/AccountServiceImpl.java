package com.turing.api.account;


import com.turing.api.common.AbstractService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class AccountServiceImpl extends AbstractService<Account> implements AccountService {
    List<Account> accountList;
    List<Account> bankingHistory;
    String result = "";

    @Override
    public String deposit(Account account) {
        return null;
    }

    @Override
    public String withdraw(Account account) {
        return null;
    }

    @Override
    public String getBalance(String accountNumber) {
        return null;
    }


    @Override
    public Map<String, ?> save(Account account) {
        accountList.add(account);
        return null;
    }

    @Override
    public Map<String, ?> findAll() throws SQLException {
        return null;
    }

    @Override
    public Map<String, ?> findById(Long id) {
        return null;
    }

    @Override
    public Map<String, ?> count() {
        return null;
    }

    @Override
    public Map<String, ?> getOne(String id) throws SQLException {
        return null;
    }

    @Override
    public Map<String, ?> delete(Account account) {
        return null;
    }

    @Override
    public Map<String, ?> existsById(Long id) {
        return null;
    }

}

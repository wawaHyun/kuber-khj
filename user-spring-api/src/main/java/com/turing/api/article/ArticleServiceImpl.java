package com.turing.api.article;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.sql.SQLException;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ArticleServiceImpl implements ArticleService{
  
    private ArticleRepository repository;

    @Override
    public List<Article> findAll() throws SQLException {
      return repository.findAll();
    }
   
}

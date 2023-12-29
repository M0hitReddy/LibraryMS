package com.libraryManage.library;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends CrudRepository<User,Long> {

    User findByEmail(String email);
//    Optional<User> findAllById(Long id);

}

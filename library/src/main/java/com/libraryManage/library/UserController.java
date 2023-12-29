package com.libraryManage.library;

import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.function.Consumer;

@RestController
//@RequestMapping(path = "/signup")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    private final UserRepository userRepository;
    @Autowired
    public UserController (UserRepository userRepository){
        this.userRepository=userRepository;
    }

    @PostMapping(path = "/signup/post")
    public User addUser(@RequestBody User details){
        System.out.println(details.getName()+" "+details.getEmail()+" "+details.getPassword());
        User user=new User();
        user.setName(details.getName());
        user.setEmail(details.getEmail());
        user.setPassword(details.getPassword());

        userRepository.save(user);
        return user;
    }

    @PostMapping(path = "/login/post")
    public Long validateLogin(@RequestBody User details){
        System.out.println(details.getEmail());
        String email=details.getEmail();
        if(email!=null){
            String password= details.getPassword();
            User existingUser=userRepository.findByEmail(email);
            System.out.println(password+" "+existingUser.getPassword());
            if(existingUser.getPassword().equals(password)) return existingUser.getId();
        }
        return null;
    }

    @GetMapping(path = "/dashboard/{id}")
    public User getUser(@PathVariable Long id){
        Optional<User> existingUser=userRepository.findById(id);
        return existingUser.orElse(null);
//        System.out.println(existingUser);
    }

}

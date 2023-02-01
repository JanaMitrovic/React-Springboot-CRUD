package com.java.springboot.exception;

public class CustomerNotFoundException extends RuntimeException{

    public CustomerNotFoundException(long id){
        super("Could not found the customer with id " + id);
    }

}

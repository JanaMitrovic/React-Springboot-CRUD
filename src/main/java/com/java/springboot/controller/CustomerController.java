package com.java.springboot.controller;

import com.java.springboot.exception.CustomerNotFoundException;
import com.java.springboot.model.Customer;
import com.java.springboot.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000/")
@Service
@RestController
public class CustomerController {

    @Autowired
    private CustomerRepository customerRepository;

    @PostMapping("/customers")
    public Customer saveCustomer(@RequestBody Customer customer){
        return customerRepository.save(customer);
    }

    @GetMapping("/customers")
    public List<Customer> getAllCustomers(){
        return customerRepository.findAll();
    }

    @GetMapping("/customer/{id}")
    Customer getCustomerById(@PathVariable long id){
        return customerRepository.findById(id)
                .orElseThrow(() -> new CustomerNotFoundException(id));
    }

    @PutMapping("customer/{id}")
    Customer updateCustomer(@RequestBody Customer newCustomer, @PathVariable long id){
        return customerRepository.findById(id)
                .map(customer -> {
                    customer.setFirstName(newCustomer.getFirstName());
                    customer.setLastName(newCustomer.getLastName());
                    customer.setEmail(newCustomer.getEmail());
                    return customerRepository.save(customer);
                }).orElseThrow(() -> new CustomerNotFoundException(id));
    }

    @DeleteMapping("/customer/{id}")
    String deleteCustomer(@PathVariable long id){
        if(!customerRepository.existsById(id)){
            throw new CustomerNotFoundException(id);
        }
        customerRepository.deleteById(id);
        return "Customer with id " + id + " has been deleted successfuly!";
    }


}

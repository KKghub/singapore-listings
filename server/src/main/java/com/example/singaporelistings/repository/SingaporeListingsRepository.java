package com.example.singaporelistings.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.singaporelistings.model.SingaporeListings;

@Repository
public interface SingaporeListingsRepository extends JpaRepository<SingaporeListings, Long> {

}

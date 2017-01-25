package com.github.kozake.handson.jhipster.blog.repository;

import com.github.kozake.handson.jhipster.blog.domain.Authority;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Spring Data JPA repository for the Authority entity.
 */
public interface AuthorityRepository extends JpaRepository<Authority, String> {
}

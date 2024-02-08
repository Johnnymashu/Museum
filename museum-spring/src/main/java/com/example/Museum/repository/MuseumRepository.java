package com.example.Museum.repository;


import com.example.Museum.dto.ArtDto;

import com.example.Museum.dto.MuseumDto;

import com.example.Museum.model.Museum;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MuseumRepository extends CrudRepository<Museum, Integer> {

    List<Museum> findAll();
    Museum findByNameContains(String name);
    Museum findById(int id);



    @Query("SELECT new com.example.Museum.dto.MuseumDto(m.id, m.name) FROM Museum m WHERE m.name LIKE %:name%")
    List<MuseumDto> getMuseumByName(String name);
    @Query("SELECT new com.example.Museum.dto.MuseumDto(m) FROM Museum m WHERE m.name LIKE %:name%")
    List<MuseumDto> findMuseumByName(String name);

    void deleteById(int id);

//    @Query("SELECT new com.example.Museum.dto.MuseumDto(m) FROM Museum m join GuideLookup l on l.museum_id = m.id where l.guide_id = :id")
//    List<MuseumDto> getMuseumsInGuide(int id);

    @Query("SELECT new com.example.Museum.dto.MuseumDto(m) FROM Museum m JOIN GuideLookup l ON l.museum_id = m.id JOIN Guide g ON l.guide_id = g.id WHERE g.name LIKE %:name%")
    List<MuseumDto> getMuseumsInGuide(String name);

    @Query("SELECT AVG(l.rating) FROM GuideLookup l JOIN Museum m on l.museum_id = m.id WHERE m.name LIKE %:museumName%")
    double getMuseumRating(String museumName);

    Museum getMuseumById(Long id);
}

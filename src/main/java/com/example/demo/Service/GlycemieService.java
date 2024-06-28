package com.example.demo.Service;

import com.example.demo.Model.Glycemie;
import com.example.demo.Repository.GlycemieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GlycemieService {

    @Autowired
    GlycemieRepository glycemieRepository;
    public List<Glycemie> getGlycemieById(@Param("id") Integer id){
        id=1;
        return glycemieRepository.GetAllGycemieByUserId(id);
    }

}

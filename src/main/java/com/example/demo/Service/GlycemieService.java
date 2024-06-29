package com.example.demo.Service;

import com.example.demo.Model.Glycemie;
import com.example.demo.Repository.GlycemieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GlycemieService {

    @Autowired
    GlycemieRepository glycemieRepository;

    public List<Glycemie> getGlycemieById(){
        return glycemieRepository.findAll();
    }

    public Glycemie save(Glycemie glycemie) {
        glycemieRepository.save(glycemie);
        return glycemie;
    }
    public void delete( Integer id) {
        glycemieRepository.deleteById(id);
    }

    public Glycemie getGlycemieById(Integer id) {
        return glycemieRepository.findById(id).orElseThrow();
    }

    public Glycemie update(Integer id, Glycemie glycemie) {
        Glycemie glycemie1=getGlycemieById(id);
        glycemie1.setId(glycemie.getId());
        return glycemieRepository.save(glycemie);
    }

}

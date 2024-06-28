package com.example.demo.Controller;
import com.example.demo.Model.Glycemie;
import com.example.demo.Service.GlycemieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@CrossOrigin("*")
@RestController
public class GlycemieController {

    @Autowired
    GlycemieService glycemieService;

    @RequestMapping("/glycemieList")
    public List<Glycemie> GetGlycemie(){
        return glycemieService.getGlycemieById();
    }
}

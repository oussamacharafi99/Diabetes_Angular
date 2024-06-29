package com.example.demo.Controller;
import com.example.demo.Model.Glycemie;
import com.example.demo.Service.GlycemieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.*;

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
    @PostMapping("/addGlycemie")
    public Glycemie addGlycemie(@RequestBody Glycemie glycemie) {
        return glycemieService.save(glycemie);
    }

    @DeleteMapping("/deleteGlycemie/{id}")
    public void deleteGlycemie(@PathVariable("id") Integer id ) {
        glycemieService.delete(id);
    }

    @GetMapping("/Find/{id}")
    public Glycemie FindById(@PathVariable("id") Integer id) {
       return glycemieService.getGlycemieById(id);
    }


    @PutMapping("/updateGlycemie/{id}")
    public void UpdateGlycemie(@PathVariable("id") Integer id, @RequestBody Glycemie glycemie ) {
        glycemieService.update(id , glycemie);
    }
}

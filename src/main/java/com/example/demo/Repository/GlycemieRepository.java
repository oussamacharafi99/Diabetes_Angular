package com.example.demo.Repository;
import com.example.demo.Model.Glycemie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.util.List;
@Repository
public interface GlycemieRepository extends JpaRepository<Glycemie, Integer> {
//    @Query(value = "SELECT G.id, G.heures, G.valeur, G.date, G.user.id FROM Glycemie G WHERE G.user.id =:id")
//    List<Glycemie> GetAllGycemieByUserId(@Param("id") Integer id);
}

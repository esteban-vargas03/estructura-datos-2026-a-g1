package com.turnos.gestion.turnos;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table (name="personas")
public class Persona {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private long id;

    private String nombre;
    private String correo;
    private String documento;

    public Persona() {

    }

    public long getId() {
       return id;

    }
    public void setId(Long id) {
        this.id=id;
    }

    public String getNombre() {
        return nombre;
    }
    public void setNombre(String nombre) {
        this.nombre=nombre;
    }
    public String getCorreo() {
        return correo;
    }
    public void setCorreo(String correo) {
        this.correo=correo;
    }
    public String getDocumento() {
        return documento;

    }
    public void setDocumento(String documento) {
        this.documento=documento;
    }


}    

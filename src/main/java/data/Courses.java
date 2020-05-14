package data;

import java.util.ArrayList;
import java.util.Collection;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToOne;

public class Courses {
    private Integer id;
    private String name;
    private String specialization;

    private Collection<Integer> day=new ArrayList<>();
    private Collection<Integer> slot=new ArrayList<>();
//    private Integer day;
//    private Integer slot;
    
    private Faculty faculty;
    
    private Collection<Student> student=new ArrayList<>();

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }
    
    public Collection<Integer> getDay() {
		return day;
	}

	public void setDay(Collection<Integer> day) {
		this.day = day;
	}

	public Collection<Integer> getSlot() {
		return slot;
	}

	public void setSlot(Collection<Integer> slot) {
		this.slot = slot;
	}

    
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
    public String getSpecialization() {
        return specialization;
    }

    public void setSpecialization(String specialization) {
        this.specialization = specialization;
    }

    public Collection<Student> getStudent() {
        return student;
    }

    public void setStudent(Collection<Student> student) {
        this.student = student;
    }

	public Faculty getFaculty() {
		return faculty;
	}

	public void setFaculty(Faculty faculty) {
		this.faculty = faculty;
	}

    
    
}

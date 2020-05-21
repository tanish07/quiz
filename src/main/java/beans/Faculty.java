package beans;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.ArrayList;
import java.util.Collection;

import javax.persistence.*;

@Entity
public class Faculty {
    @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Integer id;
  private String name;
  private String dob;
  private boolean login;
    private String course;
    private String password;

    @OneToMany(fetch = FetchType.LAZY,mappedBy = "faculty")
    @JsonIgnore
    private Collection<Test> tests = null;
  

  public Integer getId() {
      return id;
  }

  public void setId(Integer id) {
      this.id = id;
  }

  public String getName() {
      return name;
  }

  public void setName(String name) {
      this.name = name;
  }
  public String getDob() {
      return dob;
  }

  public void setDob(String dob) {
      this.dob = dob;
  }

    public void setCourse(String course) {
        this.course = course;
    }

    public boolean getLogin() {
        return login;
    }

    public void setLogin(boolean login) {
        this.login = login;
    }
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
    public Collection<Test> getTests() {
        return tests;
    }

    public void setTests(Collection<Test> tests) {
        this.tests = tests;
    }

    public String getCourse() {
		return course;
	}

	public void setCourse(Faculty faculty) {
		this.course = course;
	}
	

}

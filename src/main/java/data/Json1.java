package data;

import beans.Question;

import java.util.ArrayList;

public class Json1 {
    private int facultyid;
    private String duration;
    private String name;
    private String password;
    private ArrayList<data.Question> questionlist;

    public int getFacultyid() {
        return facultyid;
    }

    public void setFacultyid(int facultyid) {
        this.facultyid = facultyid;
    }

    public String getDuration() {
        return duration;
    }

    public void setDuration(String duration) {
        this.duration = duration;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public ArrayList<data.Question> getQuestionlist() {
        return questionlist;
    }

    public void setQuestionlist(ArrayList<data.Question> questionlist) {
        this.questionlist = questionlist;
    }
}

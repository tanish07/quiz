package data;

import java.util.ArrayList;

public class JSon2 {
    private int testid;
    private int studentid;
    private ArrayList<String> answerlist;

    public int getTestid() {
        return testid;
    }

    public void setTestid(int testid) {
        this.testid = testid;
    }

    public int getStudentid() {
        return studentid;
    }

    public void setStudentid(int studentid) {
        this.studentid = studentid;
    }

    public ArrayList<String> getAnswerlist() {
        return answerlist;
    }

    public void setAnswerlist(ArrayList<String> answerlist) {
        this.answerlist = answerlist;
    }
}

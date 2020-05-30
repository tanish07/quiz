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
        this.answerlist = new ArrayList<String>();
        for(int i=0;i<=answerlist.size()-1;i++)
            this.answerlist.add("");
        for(int i=0;i<=answerlist.size()-1;i++)
        {
            String s=answerlist.get(i);
            int index=Integer.parseInt(s.substring(0,s.indexOf(':')));
            this.answerlist.set(index-1,s.substring(s.indexOf(':')+1));
        }
    }
}

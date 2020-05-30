
package QuizPlatform;

import java.sql.Timestamp;
import java.util.*;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import beans.Question;
import beans.Test;
import beans.TestA;
import com.mysql.cj.xdevapi.JsonArray;
import org.hibernate.Session;


//import org.json.JSONObject;
import org.hibernate.query.Query;
import util.SessionUtil;

/** Example resource class hosted at the URI path "/myresource"
 */
@Path("quiz")
public class MyResource {

    /** Method processing HTTP GET requests, producing "text/plain" MIME media
     * type.
     * @return String that will be send back as a response of type "text/plain".
     */
//    @GET 
//    @Produces("text/plain")
//    public String getIt() {
//        return "Hi there!";
//    }



    @POST
    @Path("/studentlogout")
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    @Produces("text/plain")
    public Response StudentLogout(@FormParam("id") int id){

    	Session session = SessionUtil.getSession();
        session.beginTransaction();
        beans.Student s=session.get(beans.Student.class,id);
    	s.setLogin(false);

		session.save(s);
        session.getTransaction().commit();
        session.close();
        return Response.status(Response.Status.OK).entity(id).build();
    }

    @POST
    @Path("/studentlogin")
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    @Produces(MediaType.APPLICATION_JSON)
    public Response studentlogin(
            @FormParam("rollno") String rollno,
            @FormParam("password") String password)
    {
        Session session = SessionUtil.getSession();
        session.beginTransaction();
        List list=session.createQuery("From beans.Student").list();
        Iterator it=list.iterator();
        ArrayList<String> l=new ArrayList<>();
        while(it.hasNext())
        {
            beans.Student st= (beans.Student) it.next();
            if(st.getRollNo().equals(rollno))
            {
                if(st.getPassword().equals((password)))
                {
                    if(st.getLogin())
                    {
                        session.getTransaction().commit();
                        session.close();
                        return Response.status(Response.Status.NOT_ACCEPTABLE).build();

                    }
                    else {
                        l.add(st.getId()+"");
                        l.add(st.getRollNo());
                        l.add(st.getName());
                        l.add(st.getDob());
                        l.add(st.getCourse());
                        l.add(st.getYear());
                        st.setLogin(false);
                        session.save(st);
                        session.getTransaction().commit();
                        session.close();
                        return Response.status(Response.Status.OK).entity(l).build();
                    }
                }
                else
                {
                    session.getTransaction().commit();
                    session.close();
                    return Response.status(Response.Status.UNAUTHORIZED).build();
                }
            }
        }
        session.getTransaction().commit();
        session.close();
        return Response.status(Response.Status.NO_CONTENT).build();
    }


    @POST
    @Path("/facultylogout")
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    @Produces("text/plain")
    public Response FacultyLogout(@FormParam("id") int id){

        Session session = SessionUtil.getSession();
        session.beginTransaction();
        beans.Faculty s=session.get(beans.Faculty.class,id);
        s.setLogin(false);

        session.save(s);
        session.getTransaction().commit();
        session.close();
        return Response.status(Response.Status.OK).entity(id).build();
    }



    @POST
    @Path("/facultylogin")
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    @Produces(MediaType.APPLICATION_JSON)
    public Response facultylogin(
            @FormParam("name") String name,
            @FormParam("password") String password)
    {
        Session session = SessionUtil.getSession();
        session.beginTransaction();
        List list=session.createQuery("From beans.Faculty").list();
        Iterator it=list.iterator();
        ArrayList<String> l=new ArrayList<>();
        while(it.hasNext())
        {
            beans.Faculty st= (beans.Faculty) it.next();
            if(st.getName().equals(name))
            {
                if(st.getPassword().equals((password)))
                {
                    if(st.getLogin())
                    {
                        session.getTransaction().commit();
                        session.close();
                        return Response.status(Response.Status.NOT_ACCEPTABLE).build();

                    }
                    else {
                        l.add(st.getId()+"");
                        l.add(st.getName());
                        l.add(st.getDob());
                        l.add(st.getCourse());
                        st.setLogin(false);
                        session.save(st);
                        session.getTransaction().commit();
                        session.close();
                        return Response.status(Response.Status.OK).entity(l).build();
                    }
                }
                else
                {
                    session.getTransaction().commit();
                    session.close();
                    return Response.status(Response.Status.UNAUTHORIZED).build();
                }
            }
        }
        session.getTransaction().commit();
        session.close();
        return Response.status(Response.Status.NO_CONTENT).build();
    }


    @POST
    @Path("/createstudent")
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    @Produces(MediaType.APPLICATION_JSON)
    public Response createstudent(
            @FormParam("rollno") String rollno,
            @FormParam("name") String name,
            @FormParam("dob") String dob,
            @FormParam("course") String course,
            @FormParam("year") String year,
            @FormParam("password") String password)
    {
        beans.Student s=new beans.Student();
        s.setAnswers(new ArrayList<TestA>());
        s.setTests(new ArrayList<Test>());
        s.setCourse(course);
        s.setDob(dob);
        s.setRollNo(rollno);
        s.setLogin(true);
        s.setName(name);
        s.setYear(year);
        s.setPassword(password);
        Session session = SessionUtil.getSession();
        session.beginTransaction();
        List list=session.createQuery("From beans.Student").list();
        Iterator it=list.iterator();
        ArrayList<String> li=new ArrayList<>();
        while(it.hasNext()) {
            beans.Student st = (beans.Student) it.next();
            if (st.getRollNo().equals(rollno)) {
                session.getTransaction().commit();
                session.close();
                return Response.status(Response.Status.UNAUTHORIZED).build();
            }
        }
        try {
            int id = (Integer)session.save(s);
            li.add(id+"");
            li.add(rollno);
            li.add(name);
            li.add(dob);
            li.add(course);
            li.add(year);
            session.getTransaction().commit();
            session.close();
            return Response.status(Response.Status.OK).entity(li).build();
        }
        catch(Exception e)
        {
            e.printStackTrace();
            session.getTransaction().commit();
            session.close();
            return Response.status(Response.Status.UNAUTHORIZED).build();
        }
    }


    @POST
    @Path("/createfaculty")
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    @Produces("text/plain")
    public Response createfaculty(
            @FormParam("name") String name,
            @FormParam("dob") String dob,
            @FormParam("course") String course,
            @FormParam("password") String password)
    {
        beans.Faculty s=new beans.Faculty();
        s.setTests(new ArrayList<Test>());
        s.setCourse(course);
        s.setDob(dob);
        s.setLogin(true);
        s.setName(name);
        s.setPassword(password);

        Session session = SessionUtil.getSession();
        session.beginTransaction();
        List list=session.createQuery("From beans.Faculty").list();
        Iterator it=list.iterator();
        ArrayList<String> li=new ArrayList<>();
        while(it.hasNext()) {
            beans.Faculty st = (beans.Faculty) it.next();
            if (st.getName().equals(name)) {
                session.getTransaction().commit();
                session.close();
                return Response.status(Response.Status.UNAUTHORIZED).build();
            }
        }
        try {
            int id = (Integer)session.save(s);
            li.add(id+"");
            li.add(name);
            li.add(dob);
            li.add(course);
            session.getTransaction().commit();
            session.close();
            return Response.status(Response.Status.OK).entity(li).build();
        }
        catch(Exception e)
        {
            session.getTransaction().commit();
            session.close();
            return Response.status(Response.Status.UNAUTHORIZED).build();
        }
    }


    @GET
    @Path("/testlistbyfacultyname")
    @Produces(MediaType.APPLICATION_JSON)
    public Response testList(
            @QueryParam("name") String name)
    {

        Session session = SessionUtil.getSession();
        session.beginTransaction();
        List list1=session.createQuery("From beans.Faculty").list();
        Iterator it1=list1.iterator();
        Collection<Test> list=null;
        while(it1.hasNext()) {
            beans.Faculty st = (beans.Faculty) it1.next();
            if (st.getName().equals(name)) {
                list = st.getTests();
                break;
            }
        }
        if(list==null)
            list=new ArrayList<>();

        ArrayList<ArrayList<String>> l=new ArrayList<>();
        System.out.println(list.size()+" in testlistbyfacultyname");
        Iterator<Test> it=list.iterator();
        while(it.hasNext())
        {
            Test ts=it.next();
            ArrayList<String> al=new ArrayList<>();
            al.add(ts.getId()+"");
            al.add(ts.getName());
            if(ts.isOpen())
                al.add("true");
            else
                al.add("false");
            al.add(ts.getPassword());
            al.add(ts.getDuration()+"");
            l.add(al);
        }
        session.getTransaction().commit();
        session.close();
        return Response.ok().entity(l).build();
    }
    @GET
    @Path("/testlistbyuserid")
//    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    @Produces(MediaType.APPLICATION_JSON)
    public Response testListByUser(
            @QueryParam("id") int id)
    {

        Collection<Test> list=null;
        Collection<TestA> answer=null;
        Session session = SessionUtil.getSession();
        session.beginTransaction();
        beans.Student s=session.get(beans.Student.class,id);
        list=s.getTests();
        answer=s.getAnswers();

        ArrayList<ArrayList<String>> ls=new ArrayList<>();
        Iterator<Test> it=list.iterator();
        Iterator<TestA> it2=answer.iterator();
        while(it.hasNext())
        {
            Test ts=it.next();
            TestA ta=it2.next();
            ArrayList<String> al=new ArrayList<>();
            al.add(ts.getId()+"");
            al.add(ts.getName());
            al.add(ts.getFaculty().getName());
            al.add(ta.getMarks()+"");
            al.add(ta.getId()+"");
            ls.add(al);
        }
        session.getTransaction().commit();
        session.close();
        return Response.ok().entity(ls).build();
    }

    @GET
    @Path("/answerlist")
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    @Produces(MediaType.APPLICATION_JSON)
    public Response answerList(
            @QueryParam("testid") int tid,
            @QueryParam("testaid") int taid)
    {

        Test test=null;
        TestA testa=null;
        Collection<Question> ques=null;
        Collection<String> ans=null;
        Session session = SessionUtil.getSession();
        session.beginTransaction();
        test=session.get(Test.class,tid);
        testa=session.get(TestA.class,taid);
        ques=test.getQuestions();
        ans=testa.getAnswers();

        ArrayList<ArrayList<String>> ls=new ArrayList<>();
        Iterator<Question> it=ques.iterator();
        Iterator<String> it2=ans.iterator();
        while(it.hasNext())
        {
            Question tqs=it.next();
            String a=it2.next();
            ArrayList<String> al=new ArrayList<>();
            al.add(tqs.getQuest());
            if(tqs.isMcq())
                al.add("true");
            else
                al.add("false");
            al.add(tqs.getOption1());
            al.add(tqs.getOption2());
            al.add(tqs.getOption3());
            al.add(tqs.getOption4());
            al.add(tqs.getAnswer());
            al.add(a);
            al.add(tqs.getMarks()+"");
            ls.add(al);
        }
        session.getTransaction().commit();
        session.close();
        return Response.ok().entity(ls).build();
    }

    @POST
    @Path("/questionlist")
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    @Produces(MediaType.APPLICATION_JSON)
    public Response questionList(
            @FormParam("testid") int tid,
            @FormParam("studentid") int sid)
    {

        Test test=null;
        Collection<Question> ques=null;
        Collection<Test> tests=null;
        Session session = SessionUtil.getSession();
        session.beginTransaction();
        test=session.get(Test.class,tid);
        tests=session.get(beans.Student.class,sid).getTests();
        ques=test.getQuestions();


        Iterator<Test> it1=tests.iterator();
        while(it1.hasNext()) {
            Test t=it1.next();
            if (t.getId()==tid) {
                session.getTransaction().commit();
                session.close();
                return Response.status(Response.Status.UNAUTHORIZED).build();
            }
        }

        ArrayList<ArrayList<String>> ls=new ArrayList<>();
        Iterator<Question> it=ques.iterator();
        while(it.hasNext())
        {
            Question tqs=it.next();
            ArrayList<String> al=new ArrayList<>();
            al.add(tqs.getQuest());
            if(tqs.isMcq())
                al.add("true");
            else
                al.add("false");
            al.add(tqs.getOption1());
            al.add(tqs.getOption2());
            al.add(tqs.getOption3());
            al.add(tqs.getOption4());
            al.add(tqs.getAnswer());
            al.add(tqs.getMarks()+"");
            ls.add(al);
        }
        session.getTransaction().commit();
        session.close();
        return Response.ok().entity(ls).build();
    }

    @POST
    @Path("/saveanswer")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces("text/plain")
    public Response saveanswer(data.JSon2 j2)
    {
        int tid=j2.getTestid();
        int sid=j2.getStudentid();
        ArrayList<String> answer=j2.getAnswerlist();
        TestA ta=new TestA();
        Test test=null;
        beans.Student s =null;
        Collection<Question> ques=null;
        Session session = SessionUtil.getSession();
        session.beginTransaction();
        test=session.get(Test.class,tid);
        s=session.get(beans.Student.class,sid);
        ques=test.getQuestions();

        ta.setAnswers(answer);
        ta.setTestId(tid);
        int marks=0;
        Iterator<Question> it1=ques.iterator();
        Iterator<String> it2=answer.iterator();
        while(it1.hasNext()) {
            Question q=it1.next();
            if (q.getAnswer().equals(it2.next())) {
                marks=marks+q.getMarks();
            }
        }
        ta.setMarks(marks);
        s.getAnswers().add(ta);
        s.getTests().add(test);
        test.getStudents().add(s);
        session.save(s);
        session.save(test);
        session.save(ta);
        session.getTransaction().commit();
        session.close();
        return Response.status(Response.Status.OK).entity(marks).build();
    }
    @GET
    @Path("/testlistbyfacultyid")
    @Produces(MediaType.APPLICATION_JSON)
    public Response testList(
            @QueryParam("id") int id)
    {

        Session session = SessionUtil.getSession();
        session.beginTransaction();
        Collection<Test> list=null;
        beans.Faculty s=session.get(beans.Faculty.class,id);
        list=s.getTests();

        ArrayList<ArrayList<String>> l=new ArrayList<>();
        Iterator<Test> it=list.iterator();
        while(it.hasNext())
        {
            Test ts=it.next();
            ArrayList<String> al=new ArrayList<>();
            al.add(ts.getId()+"");
            al.add(ts.getName());
//            if(ts.isOpen())
//                al.add("true");
//            else
//                al.add("false");
//            al.add(ts.getPassword());
            al.add(ts.getDuration()+"");
            l.add(al);
        }
        session.getTransaction().commit();
        session.close();
        return Response.ok().entity(l).build();
    }

    @GET
    @Path("/studentlist")
//    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    @Produces(MediaType.APPLICATION_JSON)
    public Response studentList(
            @QueryParam("id") int id)
    {

        Collection<beans.Student> list=null;
        Test test=null;
        Collection<TestA> lta=null;
        Session session = SessionUtil.getSession();
        session.beginTransaction();
        test=session.get(Test.class,id);
        list=test.getStudents();

        ArrayList<ArrayList<String>> ls=new ArrayList<>();
        Iterator<beans.Student> it=list.iterator();
        while(it.hasNext())
        {
            beans.Student s=it.next();
            ArrayList<String> al=new ArrayList<>();
            al.add(s.getId()+"");
            al.add(s.getName());
            al.add(s.getRollNo());
            al.add(s.getCourse());
            al.add(s.getYear());
            lta=s.getAnswers();
            Iterator<TestA> ita=lta.iterator();
            while(ita.hasNext())
            {
                TestA ta=ita.next();
                if(id==ta.getTestId())
                {
                    al.add(ta.getMarks()+"");
                    al.add(ta.getId()+"");
                    break;
                }
            }
            ls.add(al);
        }
        session.getTransaction().commit();
        session.close();
        return Response.ok().entity(ls).build();
    }

    @POST
    @Path("/savetest")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces("text/plain")
    public Response questionList(data.Json1 js)
    {
        Test test=new Test();
        test.setDuration(Integer.parseInt(js.getDuration()));
        test.setName(js.getName());
        if(js.getPassword().equals(""))
            test.setOpen(true);
        else
            test.setOpen(false);
        test.setPassword(js.getPassword());
        System.out.println(js.getQuestionlist().size()+" in savetest");
        Iterator<data.Question> it=js.getQuestionlist().iterator();
        Session session = SessionUtil.getSession();
        session.beginTransaction();
        Collection<Question> al=new ArrayList<>();
        while(it.hasNext())
        {
            data.Question q=it.next();
            Question ques=new Question();
            ques.setId(0);
            ques.setMarks(Integer.parseInt(q.getMarks()));
            ques.setQuest(q.getQuest());
            ques.setAnswer(q.getAnswer());
            ques.setOption1(q.getOption1());
            ques.setOption2(q.getOption2());
            ques.setOption3(q.getOption3());
            ques.setOption4(q.getOption4());
            if(q.getMcq().equals("true"))
                ques.setMcq(true);
            else
                ques.setMcq(false);
            al.add(ques);
            session.save(ques);
        }
        test.setQuestions(al);
        beans.Faculty f=session.get(beans.Faculty.class,js.getFacultyid());
        System.out.println(f.getTests().size()+" facultyTestSize");
//        Collection<Test> tl=f.getTests();
//        tl.add(test);
        f.getTests().add(test);
        test.setFaculty(f);
        session.save(test);
        session.update(f);
        session.getTransaction().commit();
        session.close();
        return Response.status(Response.Status.OK).build();
    }







//    @GET
//    @Path("/getTimeTable")
//    @Produces(MediaType.APPLICATION_JSON)
//    public Response getTime(@QueryParam("id") int id)
//    {
//
////        System.out.println(id+" Time");
//    	        Session session = SessionUtil.getSession();
//    	        session.beginTransaction();
//////    			int s_id=id%10000;
//    	        Student s=session.get(Student.class,id);
////
//                session.getTransaction().commit();
//                session.close();
//
////            JSON
//                ArrayList<ArrayList<String>> al=new ArrayList<>();
//                for(int i=0;i<=3;i++)
//                {
//                	ArrayList<String> tal=new ArrayList<>();
////                    JSON j=new JSONArray();
//                	for(int j=0;j<=5;j++)
//                	{
//                		tal.add("NA");
//                	}
//                	al.add(tal);
//                }
//
//                Collection<Courses> cal=s.getCourse();
//                Iterator<Courses> it=cal.iterator();
//                while(it.hasNext())
//                {
//                	Courses cr=it.next();
//                	Collection<Integer> days=cr.getDay();
//                    Collection<Integer> slot=cr.getDay();
//                    Iterator<Integer> itr1=days.iterator();
//                    Iterator<Integer> itr2=slot.iterator();
//                    while(itr1.hasNext())
//                    {
//                        int idd=itr1.next();
//                        int is=itr2.next();
//                        al.get(is).set(idd,cr.getName());
//                    }
//                }
//
//
//                return Response.ok().entity(al).build();
//
//    }
//
//
//    @GET
//    @Path("/getSubject")
//    @Produces(MediaType.APPLICATION_JSON)
//    public Response getSubject(@QueryParam("id") int id)
//    {
//
//        Session session = SessionUtil.getSession();
//        session.beginTransaction();
//////        int s_id=id%10000;
//        Student s=session.get(Student.class,id);
////
//        session.getTransaction().commit();
//        session.close();
//
//        HashSet<String> set=new HashSet<>();
//        set.add("All Courses");
//        Collection<Courses> cal=s.getCourse();
//        Iterator<Courses> it=cal.iterator();
//        while(it.hasNext())
//        {
//            Courses cr=it.next();
//            set.add(cr.getName());
//        }
//        // returrn time table
//
//
//
////        HashSet<String> set=new HashSet<>();
////        set.add("All Courses");
////        set.add("NIL0");
////        set.add("NIL1");
////        set.add("NIL2");
////        set.add("NIL3");
////        set.add("NIL4");
////        set.add("NIL5");
//        return Response.ok().entity(set).build();
//
////    return Response.noContent().build();
//    }
//
//    @POST
//    @Path("/getFaculty")
//    @Produces(MediaType.APPLICATION_JSON)
//    public Response getFaculty(@QueryParam("cname") String cname)
//    {
//
//        Session session = SessionUtil.getSession();
//        session.beginTransaction();
////////        int s_id=id%10000;
////        Student s=session.get(Student.class,id);
//        String hql="from beans.Courses where name=cname";
//        Query<Courses> query=session.createQuery(hql);
//        Courses c=query.getSingleResult();
//        Faculty f=c.getFaculty();
////
//        session.getTransaction().commit();
//        session.close();
//
////        Faculty f=new Faculty();
////        f.setId(1);
////        f.setName("Thangraju");
////        f.setDetails("System Teacher");
////
//        return Response.ok().entity(f).build();
//
////    return Response.noContent().build();
//    }

    /*public Response login(Student student){
        System.out.println(student.getId());
        return Response.ok().build();
    }*/
}

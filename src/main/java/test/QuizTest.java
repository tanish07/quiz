package test;


import static junit.framework.TestCase.assertNotNull;
import static org.junit.Assert.assertEquals;

import javax.ws.rs.client.Entity;
import javax.ws.rs.core.Application;
import javax.ws.rs.core.Form;
import javax.ws.rs.core.GenericType;
import javax.ws.rs.core.Response;

import QuizPlatform.MyResource;
import org.glassfish.jersey.server.ResourceConfig;
import org.glassfish.jersey.test.JerseyTest;
import org.glassfish.jersey.test.TestProperties;
import org.junit.Test;

import java.util.ArrayList;


public class QuizTest extends JerseyTest {
        ArrayList<String> student=null;
        ArrayList<String> faculty=null;
        @Override
        public Application configure() {
            enable(TestProperties.LOG_TRAFFIC);
            enable(TestProperties.DUMP_ENTITY);
            return new ResourceConfig(MyResource.class);
        }

        @Test
        public void testFacultyCreation() {
            Form form = new Form().param("name", "MT2019141201914120191001")
                    .param("dob", "12/12/12")
                    .param("course", "MMT")
                    .param("password", "12345");
            Response response = target("/quiz/createfaculty").request().post(Entity.form(form));
            faculty= response.readEntity(new GenericType<ArrayList<String>>(){});
            assertEquals("should return status 200", 200, response.getStatus());
//            assertNotNull("Should return user list", response.getEntity().toString());
            System.out.println(response.getStatus());
//            System.out.println(al.get(0));
        }
    @Test
    public void testStudentCreation() {
        Form form = new Form().param("rollno", "MT20191412019141201914111")
                .param("name", "MT201914120191412019141")
                .param("dob", "12/12/12")
                .param("course", "MMT")
                .param("year", "2019")
                .param("password", "12345");
        Response response = target("/quiz/createstudent").request().post(Entity.form(form));
        assertEquals("should return status 200", 200, response.getStatus());
        student= response.readEntity(new GenericType<ArrayList<String>>(){});
//        assertNotNull("Should return user list", response.getEntity().toString());
        System.out.println(response.getStatus());
//        System.out.println(response.readEntity(String.class));
    }
//    @Test
//    public void studentLogin() {
//        Form form = new Form().param("rollno", "MT20191412019141201914111")
//                .param("password", "12345");
//        Response response = target("/quiz/studentlogin").request().post(Entity.form(form));
//        assertEquals("should return status 200", 406, response.getStatus());
////        student= response.readEntity(new GenericType<ArrayList<String>>(){});
////        assertNotNull("Should return user list", response.getEntity().toString());
//        System.out.println(response.getStatus());
////        System.out.println(response.readEntity(String.class));
//    }

//    @Test
//    public void facultyLogout() {
//        Form form = new Form().param("id",faculty.get(0));
//        Response response = target("/quiz/facultylogout").request().post(Entity.form(form));
//        assertEquals("should return status 200", 200, response.getStatus());
////        student= response.readEntity(new GenericType<ArrayList<String>>(){});
////        assertNotNull("Should return user list", response.getEntity().toString());
//        System.out.println(response.getStatus());
////        System.out.println(response.readEntity(String.class));
//    }
//
//        @Test
//        public void testGetById() {
//
//            Response output = target("/users/user/100").request().get();
//            assertEquals("Should return status 200", 200, output.getStatus());
//            assertNotNull("Should return user object as json", output.getEntity());
//            System.out.println(output.getStatus());
//            System.out.println(output.readEntity(String.class));
//        }
//
//        @Test
//        public void testCreate() {
//            User user = new User(105, "Ramesh", "myemail@gmail.com");
//            Response output = target("/users").request().post(Entity.entity(user, MediaType.APPLICATION_JSON));
//            System.out.println(output.getStatus());
//            assertEquals("Should return status 201", 201, output.getStatus());
//        }
//
//        @Test
//        public void testUpdate() {
//            User user = new User(105, "Ramesh", "myemail@gmail.com");
//            Response output = target("/users/user/101").request().put(Entity.entity(user, MediaType.APPLICATION_JSON));
//            assertEquals("Should return status 204", 204, output.getStatus());
//            System.out.println(output.getStatus());
//        }
//
//        @Test
//        public void testDelete() {
//            Response output = target("/users/user/100").request().delete();
//            assertEquals("Should return status 204", 204, output.getStatus());
//        }
    }


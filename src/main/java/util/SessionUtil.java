package util;


import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

//import com.mysql.cj.xdevapi.SessionFactory;

public class SessionUtil {

//    private static final SessionFactory sessionFactory;
	private static SessionFactory sessionFactory;
	
	static{
		try{
			Configuration cfg=new Configuration();
			cfg.addAnnotatedClass(beans.Student.class).addAnnotatedClass(beans.Faculty.class).addAnnotatedClass(beans.Question.class).addAnnotatedClass(beans.Test.class).addAnnotatedClass(beans.TestA.class);
			sessionFactory=cfg.buildSessionFactory();
		} catch(HibernateException e)
		{
			e.printStackTrace();
		}
		
	}
		public static Session getSession() throws HibernateException
		{
			return sessionFactory.openSession();
		}
	

}

package com.atlwork.config;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.ServletRegistration;

import org.springframework.web.WebApplicationInitializer;
import org.springframework.web.context.ContextLoaderListener;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.AnnotationConfigWebApplicationContext;
import org.springframework.web.servlet.DispatcherServlet;

public class WebAppInitializer implements WebApplicationInitializer {

    private static final String CONFIG_LOCATION = "com.atlwork.config";
    private static final String MAPPING_URL = "/mvc/*";

    @Override
    public void onStartup(ServletContext servletContext) throws ServletException {
	WebApplicationContext context = getContext();
	servletContext.addListener(new ContextLoaderListener(context));
	ServletRegistration.Dynamic dispatcher = servletContext.addServlet("dispatcherServlet", new DispatcherServlet(context));
	dispatcher.setLoadOnStartup(1);
	dispatcher.addMapping(MAPPING_URL);
    }

    private AnnotationConfigWebApplicationContext getContext() {
	AnnotationConfigWebApplicationContext context = new AnnotationConfigWebApplicationContext();
	context.setConfigLocation(CONFIG_LOCATION);
	return context;
    }

}
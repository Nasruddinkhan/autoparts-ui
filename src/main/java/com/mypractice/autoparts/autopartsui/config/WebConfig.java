package com.mypractice.autoparts.autopartsui.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

@Configuration
@EnableWebMvc
public class WebConfig implements WebMvcConfigurer {

    private static final String CLASSPATH_DIST = "classpath:/build/";
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        addMapping(registry, "/build/**", CLASSPATH_DIST);
        addMapping(registry, "/resources/**", CLASSPATH_DIST);
        addMapping(registry, "/asset/**", CLASSPATH_DIST);
        addMapping(registry, "/config/**", CLASSPATH_DIST);
        addMapping(registry, "/**", CLASSPATH_DIST);
        addMapping(registry, "/webjars/**", "classpath:/META-INF/resources/webjars/");
    }

    private void addMapping(ResourceHandlerRegistry registry, String pattern, String path) {
        if (!registry.hasMappingForPattern(pattern)) {
            registry.addResourceHandler(pattern).addResourceLocations(path);
        }
    }

    @Bean
    public InternalResourceViewResolver internalViewResolver() {
        final var viewResolver = new InternalResourceViewResolver();
        viewResolver.setPrefix("/build/");
        viewResolver.setSuffix(".html");
        viewResolver.setOrder(1);
        return viewResolver;
    }

}
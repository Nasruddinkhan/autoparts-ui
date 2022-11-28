package com.mypractice.autoparts.autopartsui.controller;

import com.mypractice.autoparts.autopartsui.config.UIEndpointProperties;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Map;

@Slf4j
@Controller
@CrossOrigin(value = "*")
@RequiredArgsConstructor
public class HomeController {

    public static final String INDEX = "index";
    private final UIEndpointProperties uiEndpointProperties;

    @GetMapping(value = "/")
    public String landingPage() {
        return INDEX;
    }


    @GetMapping(value = "/endpoints")
    @ResponseBody
    public Map<String, String> getEndpoints() {
        return  UIEndpointProperties.from(uiEndpointProperties);
    }

}
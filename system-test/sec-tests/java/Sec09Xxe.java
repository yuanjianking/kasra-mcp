// SEC-09: XXE Vulnerability
// Test: TC-CR-015
package com.example;

import javax.xml.parsers.*;
import org.w3c.dom.Document;

public class XmlService {
    public Document parseXml(String filePath) throws Exception {
        DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
        DocumentBuilder builder = factory.newDocumentBuilder();
        return builder.parse(filePath);
    }
}
